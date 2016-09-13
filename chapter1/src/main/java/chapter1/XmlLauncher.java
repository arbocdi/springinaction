package chapter1;

import org.springframework.context.support.ClassPathXmlApplicationContext;

/**
 *
 * @author arbocdi
 */
public class XmlLauncher {

    public static void main(String[] args) {
        //FileSystemXmlApplicationContext
        ClassPathXmlApplicationContext context = new ClassPathXmlApplicationContext("knights.xml");
        Knight knight = context.getBean(Knight.class);
        knight.embarkOnQuest();
        context.close();
    }
}
