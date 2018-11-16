
package chapter3.dessert;

import java.util.Map;
import lombok.Data;
import org.springframework.beans.factory.annotation.Value;

@Data
public class PropertiesBean {
    @Value("#{mapper}")
    private Map<String,String>properties;
    
    @Value("${price}")
    private int price;
}
