package chapter3.dessert;

import org.junit.Assert;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

/**
 *
 * @author arbocdi
 */
@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(classes = EnvConfig.class)
public class EnvConfigTest {
    @Autowired
    //@Qualifier("iceCream")
    private IceCream iceCream;
    @Autowired
    private PropertiesBean propertiesBean;
    
    @Test
    public void iceCreamPriceTest(){
        Assert.assertEquals(20, iceCream.getPrice());
    }
    @Test
    public void testPropertiesBean(){
        System.out.println(propertiesBean);
    }
}
