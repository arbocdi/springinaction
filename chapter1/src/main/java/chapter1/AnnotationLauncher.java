package chapter1;

import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;

/**
 *
 * @author arbocdi
 */
public class AnnotationLauncher {

    public static void main(String[] args) {
        AnnotationConfigApplicationContext ctx
                = new AnnotationConfigApplicationContext(KnightConfig.class);
        ctx.getBean("knight",Knight.class).embarkOnQuest();
        ctx.close();
    }
}
