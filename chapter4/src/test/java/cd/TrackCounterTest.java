package cd;

import junit.framework.Assert;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

/**
 *
 * @author arbocdi
 */
@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(classes = CDConfig.class)
public class TrackCounterTest {
    @Autowired
    private CompactDisc cd;
    @Autowired
    private TrackCounter counter;
    @Test
    public void testTrackCount(){
        cd.playTrack(0);
        cd.playTrack(0);
        cd.playTrack(1);
        System.out.println(counter.getTackCount());
        Assert.assertEquals(2, counter.getPlayCount(0));
        Assert.assertEquals(1, counter.getPlayCount(1));
    }
}
