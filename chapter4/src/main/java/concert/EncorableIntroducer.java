package concert;

import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.DeclareParents;
import org.springframework.stereotype.Component;

/**
 *
 * @author arbocdi
 */
@Aspect
@Component
public class EncorableIntroducer {
    //value - к каким бинам добавлять новые свойства
    //в данном случае к concert.Performance и наследникам
    //defaultImpl - какой класс реализует дополнит. функционал
    @DeclareParents(value = "concert.Performance+",
            defaultImpl = DefaultEncorable.class)
    public static Encorable encorable;
}
