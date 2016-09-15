package chapter3;

import org.junit.Assert;
import org.junit.BeforeClass;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

/**
 *
 * @author arbocdi
 */
@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(classes=BeanConfig.class)
@ActiveProfiles("dev")
public class MagicBeanTest {
    
    @BeforeClass
    public static void init(){
        System.setProperty("magic", "present!");
    }
    @Autowired
    private MagicBean magicBean;
    @Test
    public void testMagicBeanCreated(){
        Assert.assertNotNull(magicBean);
    }
}
