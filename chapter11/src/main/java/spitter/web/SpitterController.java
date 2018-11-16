package spitter.web;

import javax.servlet.http.HttpServletRequest;
import javax.validation.Valid;
import lombok.Setter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.Errors;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import static org.springframework.web.bind.annotation.RequestMethod.GET;
import static org.springframework.web.bind.annotation.RequestMethod.POST;
import spitter.data.Spitter;
import spitter.data.repos.SpitterRepository;

/**
 * Регистрация пользователей
 *
 * @author arbocdi
 */
@Controller
@RequestMapping("/spitter")
public class SpitterController {

    @Autowired
    @Setter
    private SpitterRepository spitterRepo;

    @RequestMapping(value = "/register", method = GET)
    //показать форму регистрации
    public String showRegistrationForm(Model model) {
        //нужно добавить пустого Spitter в модель, чтобы registerForm 
        //мог его отобразить
        model.addAttribute("spitter", new Spitter());
        return "registerForm";
    }

    
    @RequestMapping(value = "/register", method = POST)
    //регистрация пользователя с проверкой на валидность
    //спринг сам создатс экземпляр Spitter из HttpServletRequest
    public String registerV(@Valid Spitter spitter, Errors errors) {
        if (errors.hasErrors()) {
            return "registerForm";
        }
        this.spitterRepo.save(spitter);
        //internal view resolver will send redirect to specified url
        //forward is also accepted
        return "redirect:/spitter/" + spitter.getUsername();
    }

    @RequestMapping(value = "/{username}", method = GET)
    //показать пользователя по его имени
    public String showSpitter(
            @PathVariable(value = "username") String username,
            Model model) {
        Spitter spitter = this.spitterRepo.findByUsername(username);
        model.addAttribute("spitter", spitter);
        return "profile";
    }

    protected Spitter makeFromRequest(HttpServletRequest request) {
        Spitter spitter = new Spitter();
        spitter.setEmail(request.getParameter("email"));
        spitter.setFirstName(request.getParameter("firstName"));
        spitter.setLastName(request.getParameter("lastName"));
        spitter.setPassword(request.getParameter("password"));
        spitter.setUsername(request.getParameter("username"));
        return spitter;
    }

}
