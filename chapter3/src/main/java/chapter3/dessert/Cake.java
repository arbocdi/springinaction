package chapter3.dessert;

import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Component;

/**
 *
 * @author arbocdi
 */
@Component
@Qualifier("soft")
public class Cake extends AbstractDessert{

}
