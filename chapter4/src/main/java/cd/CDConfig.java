package cd;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.EnableAspectJAutoProxy;

/**
 *
 * @author arbocdi
 */
@Configuration
@ComponentScan
@EnableAspectJAutoProxy
public class CDConfig {

    @Bean
    public CompactDisc cdOne() {
        BlankCD cd = new BlankCD();
        cd.addTrack(0, "track0");
        cd.addTrack(1, "track1");
        return cd;
    }
}
