package net.sf.arbocdi.room_controller.front;

import java.util.Locale;
import org.springframework.context.MessageSource;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.support.ResourceBundleMessageSource;
import org.springframework.web.servlet.ViewResolver;
import org.springframework.web.servlet.config.annotation.DefaultServletHandlerConfigurer;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;
import org.springframework.web.servlet.i18n.SessionLocaleResolver;
import org.springframework.web.servlet.view.InternalResourceViewResolver;
import org.springframework.web.servlet.view.JstlView;
import org.springframework.web.servlet.view.tiles3.TilesConfigurer;
import org.springframework.web.servlet.view.tiles3.TilesViewResolver;

/**
 *
 * @author arbocdi
 */
@Configuration
@ComponentScan
@EnableWebMvc
public class WebConfig extends WebMvcConfigurerAdapter {

    @Bean
    public ViewResolver viewResolver() {
        return new TilesViewResolver();
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

//    @Bean
//    public MessageSource messageSource() {
//        //класс читает пропертис-файлы из classpath
//        ResourceBundleMessageSource source = new ResourceBundleMessageSource();
//        source.setBasename("messages");
//        return source;
//    }

    @Bean
    public SessionLocaleResolver localeResolver() {
        //хранит установленную локаль в сессии пользователя
        //имя бина должно быть localeResolver
        SessionLocaleResolver resolver = new SessionLocaleResolver();
        resolver.setDefaultLocale(Locale.forLanguageTag("ru"));
        return resolver;
    }

    @Bean
    //загружаем шаблоны Tiles
    public TilesConfigurer tilesConfigurer() {
        TilesConfigurer tiles = new TilesConfigurer();
        //"/WEB-INF/**/tiles.xml" - искать tiles.xml во всех подпапках
        tiles.setDefinitions(new String[]{
            "/WEB-INF/layout/tiles.xml"
        });
        //автообновление шаблонов
        tiles.setCheckRefresh(true);
        return tiles;
    }

}
