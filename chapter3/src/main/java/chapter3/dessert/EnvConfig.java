package chapter3.dessert;

import chapter3.dessert.IceCream;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.config.PropertiesFactoryBean;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.PropertySource;
import org.springframework.context.support.PropertySourcesPlaceholderConfigurer;
import org.springframework.core.env.Environment;
import org.springframework.core.io.ClassPathResource;

/**
 *
 * @author arbocdi
 */
@Configuration
@PropertySource("classpath:dessert.properties")
public class EnvConfig {

    @Autowired
    private Environment env;

    @Bean
    public IceCream iceCream() {
        IceCream ic = new IceCream();
        int price = env.getProperty("price", Integer.class, 10);
        ic.setPrice(price);
        return ic;
    }

    //enable @Value("${property.name}") usage
    @Bean
    public static PropertySourcesPlaceholderConfigurer placeholderConfigurer() {
        return new PropertySourcesPlaceholderConfigurer();
    }

    @Bean(name = "mapper")
    public PropertiesFactoryBean mapper() {
        PropertiesFactoryBean bean = new PropertiesFactoryBean();
        bean.setLocation(new ClassPathResource("dessert.properties"));
        return bean;
    }

    @Bean(name = "propertiesBean")
    public PropertiesBean propertiesBean() {
        return new PropertiesBean();
    }

}
