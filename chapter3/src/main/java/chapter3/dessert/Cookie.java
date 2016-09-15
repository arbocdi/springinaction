package chapter3.dessert;

import org.springframework.stereotype.Component;

/**
 *
 * @author arbocdi
 */
@Component
@DessertQualifier(DessertEnum.COOKIE)
public class Cookie extends AbstractDessert {

}
