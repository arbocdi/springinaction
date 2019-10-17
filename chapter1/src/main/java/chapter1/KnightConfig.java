package chapter1;

import javax.inject.Inject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

/**
 * Java-based spring configuration.
 * @author arbocdi
 */
@Configuration
public class KnightConfig {
    //по умолчанию id бина = имя метода
    //@Bean(name = "knight")
    @Bean()
    public Knight knight() {
        //spring перехватывает вызов метода quest()
        //и всегда возвращает один и тот же синглетон quest
        return new BraveKnight(quest());
    }
    
    //для примера
    @Bean
    public Knight knight2() {
        //spring перехватывает вызов метода quest()
        //и всегда возвращает один и тот же синглетон quest
        return new BraveKnight(quest());
    }
    
    //для примера
    @Bean
    public Knight knight3(Quest quest) {
        //можно явно и не вызывать метод quest()
        //spring может выполнить инжекцию в метод
        return new BraveKnight(quest);
    }

    @Bean
    public Quest quest() {
        return new SlayDragonQuest(System.out);
    }
}
