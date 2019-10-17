package spitter.config;

import java.util.Locale;
import org.springframework.context.MessageSource;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.support.ResourceBundleMessageSource;
import org.springframework.http.MediaType;
import org.springframework.web.accept.ContentNegotiationManager;
import org.springframework.web.servlet.View;
import org.springframework.web.servlet.ViewResolver;
import org.springframework.web.servlet.config.annotation.ContentNegotiationConfigurer;
import org.springframework.web.servlet.config.annotation.DefaultServletHandlerConfigurer;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;
import org.springframework.web.servlet.i18n.SessionLocaleResolver;
import org.springframework.web.servlet.view.BeanNameViewResolver;
import org.springframework.web.servlet.view.ContentNegotiatingViewResolver;
import org.springframework.web.servlet.view.InternalResourceViewResolver;
import org.springframework.web.servlet.view.JstlView;
import org.springframework.web.servlet.view.json.MappingJackson2JsonView;
import org.springframework.web.servlet.view.tiles3.TilesConfigurer;
import org.springframework.web.servlet.view.tiles3.TilesViewResolver;

/**
 *
 * @author arbocdi
 */
@Configuration
@ComponentScan({"spitter.web", "spitter.data"})
@EnableWebMvc
public class WebConfig extends WebMvcConfigurerAdapter {

//    @Bean
//    public ViewResolver viewResolverOld() {
//        InternalResourceViewResolver resolver
//                = new InternalResourceViewResolver();
//        resolver.setPrefix("/WEB-INF/views/");
//        resolver.setSuffix(".jsp");
//        //view name home = /WEB-INF/views/home.jsp
//        //all context beans will be available as request attributes
//        resolver.setExposeContextBeansAsAttributes(true);
//        resolver.setViewClass(JstlView.class);
//        return resolver;
//    }
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

    @Bean
    public MessageSource messageSource() {
        //класс читает пропертис-файлы из classpath
        ResourceBundleMessageSource source = new ResourceBundleMessageSource();
        source.setBasename("messages");
        return source;
    }

    @Bean
    //метод изменяет локаль по умолчанию
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

    @Bean
    //Инжектирую ContentNegotiationManager
    public ViewResolver cnViewResolver(ContentNegotiationManager cnm) {
        ContentNegotiatingViewResolver cnvr
                = new ContentNegotiatingViewResolver();
        cnvr.setContentNegotiationManager(cnm);
        return cnvr;
    }

    @Override
    //По умолчанию CNViewReslover будет выбирать html-представления
    public void configureContentNegotiation(
            ContentNegotiationConfigurer configurer) {
        configurer.defaultContentType(MediaType.TEXT_HTML);
    }

    @Bean
    //Выбирает View по Bean name.
    public ViewResolver beanNameViewResolver() {
        return new BeanNameViewResolver();
    }

    @Bean
    //spittles - имя бина, view будет выбран для json-сериализации
    public View spittlesRest() {
        return new MappingJackson2JsonView();
    }

}
