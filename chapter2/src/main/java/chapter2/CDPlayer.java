package chapter2;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

/**
 *
 * @author arbocdi
 */
@Component
public class CDPlayer implements MediaPlayer {

    @Autowired
    private CompactDisc disc;

    @Override
    public void play() {
        disc.play();
    }

}
