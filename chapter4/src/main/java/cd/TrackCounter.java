package cd;

import java.util.HashMap;
import java.util.Map;
import lombok.Getter;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Before;
import org.springframework.stereotype.Component;

/**
 *
 * @author arbocdi
 */
@Aspect
@Component
public class TrackCounter {

    @Getter
    private final Map<Integer, Integer> tackCount = new HashMap();

    @Before("execution(* cd.CompactDisc.playTrack(int)) && args(track)")
    public void countTrack(int track) {
        int playCount = this.getPlayCount(track);
        playCount++;
        this.tackCount.put(track, playCount);
    }

    public int getPlayCount(int track) {
        return this.tackCount.get(track) == null ? 0 : this.tackCount.get(track);
    }
}
