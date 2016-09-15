package chapter2;

import static chapter2.SgtPeppers.MSG;
import org.junit.Assert;
import static org.junit.Assert.*;
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
//укажем runner, который должен выполнить юнит-тест
@RunWith(SpringJUnit4ClassRunner.class)
//укажем конфигурационный класс
@ContextConfiguration(classes = CDPlayerConfig.class)
public class CDPlayerTest {

    @Autowired
    private CompactDisc cd;
    @Autowired
    private MediaPlayer player;
    //The SystemErrRule and the SystemOutRule help you to create tests
    //for classes that write to System.err or System.out. 
    //They can record everything written to System.err or System.out. 
    //The text is available by calling getLog().
    @Rule
    public final SystemOutRule systemOutRule = new SystemOutRule().enableLog();

    @Test
    public void cdShouldNotBeNull() {

        assertNotNull(cd);
    }

    @Test
    public void testMediaPlayer() {
        this.player.play();
        Assert.assertTrue(systemOutRule.getLog().contains(MSG));
    }
}
