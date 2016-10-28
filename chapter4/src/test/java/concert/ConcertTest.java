package concert;

import org.junit.Assert;
import org.junit.Rule;
import org.junit.Test;
import org.junit.contrib.java.lang.system.SystemOutRule;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

/**
 *
 * @author arbocdi
 */
@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(classes = ConcertConfig.class)
public class ConcertTest {
    @Autowired
    private Performance performance;
    @Rule
    public final SystemOutRule systemOutRule = new SystemOutRule().enableLog();

    @Test
    public void testPerform(){
        this.performance.perform();
        //System.out.println(this.systemOutRule.getLog());
        Assert.assertTrue(this.systemOutRule.getLog().contains("CLAP CLAP"));
        Assert.assertTrue(this.systemOutRule.getLog().contains("Concert is going"));
        Assert.assertTrue(this.systemOutRule.getLog().contains("Silencing cell phones"));
        Assert.assertTrue(this.systemOutRule.getLog().contains("Taking seats"));
        Assert.assertTrue(this.systemOutRule.getLog().contains("before"));
        Assert.assertTrue(this.systemOutRule.getLog().contains("after OK"));
    }
}
