package spitter.web;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

/**
 * Показывает домашнюю страницу.
 * @author arbocdi
 */
//аннотация нужна, чтобы авто-сканирование подцепило этот бин
@Controller
public class HomeController {
    
    @RequestMapping(path = "/", method = RequestMethod.GET)
    public String home() {
        //InternalViewResolver преобразует имя представления в его
        //физическое расположение
        //view name home = /WEB-INF/views/home.jsp
        return "home";
    }
}
