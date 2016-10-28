package chapter3.dessert;

import lombok.Getter;
import lombok.Setter;
import org.springframework.context.annotation.Primary;
import org.springframework.stereotype.Component;

/**
 *
 * @author arbocdi
 */
@Component
@Primary
public class IceCream extends AbstractDessert{
    @Setter
    @Getter
    private int price;
   
}
