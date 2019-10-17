package chapter2;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
/**
Конфигурация автоматически подхватывается при component scanning
@author arbocdi
*/
@Configuration
public class ModernTalkingConfig {
    
    @Bean
    public CompactDisc modernTalking() {
        return new ModernTalking();
    }
}
