package chapter2;

import org.springframework.stereotype.Component;

/**
 * @Component указывает на то, что класс является спринг бином. Внутри аннотации
 * также можно явно определить имя бина, по умолчанию оно равно sgtPeppers.
 * @author arbocdi
 */
@Component("sgtPeppers")
public class SgtPeppers implements CompactDisc {

    public static final String MSG="Playing sgtPeppers";

    @Override
    public void play() {
        System.out.println(MSG);
    }
}
