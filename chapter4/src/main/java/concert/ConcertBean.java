package concert;

import org.springframework.stereotype.Component;

/**
 *
 * @author arbocdi
 */
@Component
public class ConcertBean implements Performance {

    @Override
    public void perform() {
        System.out.println("Concert is going");
    }

}
