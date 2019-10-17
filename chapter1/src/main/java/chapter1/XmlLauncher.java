package chapter1;

import java.util.Arrays;
import org.springframework.context.support.ClassPathXmlApplicationContext;

/**
 *
 * @author arbocdi
 */
public class XmlLauncher {

    public static void main(String[] args) {
        //FileSystemXmlApplicationContext
        ClassPathXmlApplicationContext context = new ClassPathXmlApplicationContext("knights.xml");
        System.out.println(Arrays.toString(context.getBeanDefinitionNames()));
        Knight knight = context.getBean(Knight.class);
        knight.embarkOnQuest();
        context.close();
    }
}
