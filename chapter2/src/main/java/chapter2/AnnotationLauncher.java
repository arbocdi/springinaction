package chapter2;

import java.util.Arrays;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;

public class AnnotationLauncher {

    public static void main(String[] args) {
        try (AnnotationConfigApplicationContext ctx = new AnnotationConfigApplicationContext(CDPlayerConfig.class);) {
            Arrays.asList(ctx.getBeanDefinitionNames()).forEach(name -> {
                if (!name.contains("spring")) {
                    System.out.println(name);
                }
            });
        }
    }
}
