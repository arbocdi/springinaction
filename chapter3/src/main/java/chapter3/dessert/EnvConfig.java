package chapter3.dessert;

import chapter3.dessert.IceCream;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.PropertySource;
import org.springframework.context.support.PropertySourcesPlaceholderConfigurer;
import org.springframework.core.env.Environment;

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
    //enable ${property.name} usage
    @Bean
    public static PropertySourcesPlaceholderConfigurer placeholderConfigurer() {
        return new PropertySourcesPlaceholderConfigurer();
    }

}
