package spitter.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.ViewResolver;
import org.springframework.web.servlet.config.annotation.DefaultServletHandlerConfigurer;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;
import org.springframework.web.servlet.view.InternalResourceViewResolver;

/**
 *
 * @author arbocdi
 */
@Configuration
@ComponentScan("spitter.web")
@EnableWebMvc
public class WebConfig extends WebMvcConfigurerAdapter {

    @Bean
    public ViewResolver viewResolver() {
        InternalResourceViewResolver resolver
                = new InternalResourceViewResolver();
        resolver.setPrefix("/WEB-INF/views/");
        resolver.setSuffix(".jsp");
        //view name home = /WEB-INF/views/home.jsp
        //all context beans will be available as request attributes
        resolver.setExposeContextBeansAsAttributes(true);
        return resolver;
    }

    @Override
    //статический контент будет обслуживаться стандартным сервлетом
    //контейнера, предназначенным для этих дел
    //иначе DispatcherServlet будет обслуживать статический контент
    //метод WebMvcConfigurerAdapter 
    public void configureDefaultServletHandling(
            DefaultServletHandlerConfigurer configurer) {
        configurer.enable();
    }

}
