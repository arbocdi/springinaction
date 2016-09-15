package chapter3;

import org.springframework.context.annotation.Conditional;
import org.springframework.context.annotation.Profile;
import org.springframework.stereotype.Component;

/**
 *
 * @author arbocdi
 */
@Component
@Conditional(MagicExistsCondition.class)
@Profile("dev")
public class MagicBean {

}
