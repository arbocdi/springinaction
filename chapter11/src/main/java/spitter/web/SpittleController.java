package spitter.web;

import java.util.List;
import javax.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import spitter.data.Spittle;
import spitter.data.SpittleAutoRepository;
import spitter.data.SpittleRepository;

/**
 * Показывает одно событие либо набор событий.
 *
 * @author arbocdi
 */
@Controller
public class SpittleController {
    
    @Autowired
    @Qualifier("auto")
    private SpittleAutoRepository repository;


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
    
     @RequestMapping(value = "/spittles", method = RequestMethod.POST)
    //GET /spittles/12345
    //вернем какой-то один спитл
    public String addSpittle(
            HttpServletRequest request,
            Model model) {
       
        Spittle spittle = new Spittle();
        spittle.setMessage(request.getParameter("message"));
        repository.save(spittle);
        model.addAttribute("spittleList", this.repository.findAll());
        return "spittles";
    }
    

}
