package spitter.web;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import spitter.data.Spittle;
import spitter.data.SpittleRepository;

/**
 * Показывает одно событие либо набор событий.
 *
 * @author arbocdi
 */
@Controller
public class SpittleController {

    private SpittleRepository repository;

    @Autowired
    public void setRepository(SpittleRepository repository) {
        this.repository = repository;
    }

    @RequestMapping(path = "/spittles", method = RequestMethod.GET)
    //GET /spittles?count=2
    //метод возвращает набор спитлов
    public String spittles(
            @RequestParam(name = "count", defaultValue = "2") int count,
            Model model) {
        model.addAttribute("spittleList", this.repository.findSpittles(count));
        return "spittles";
    }

    @RequestMapping(value = "/spittles/{spittleId}", method = RequestMethod.GET)
    //GET /spittles/12345
    //вернем какой-то один спитл
    public String spittle(
            @PathVariable("spittleId") long spittleId,
            Model model) {
        model.addAttribute("spittle", this.repository.findOne(spittleId));
        return "spittle";
    }

    @RequestMapping(method = RequestMethod.GET, path = "/spittlesRest")
    //Rest-метод, возвращает не View а набор спитлов.
    public List<Spittle> spittles(@RequestParam(value = "count", defaultValue = "20") int count) {
        return repository.findSpittles(count);
    }

}
