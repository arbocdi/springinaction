/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package chapter3.dessert;

import chapter3.BeanConfig;
import org.junit.Assert;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.context.annotation.Scope;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

/**
 *
 * @author arbocdi
 */
@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(classes=BeanConfig.class)
public class DessertTest {
    
    @Autowired
    Dessert iceCream;
    @Autowired
    @Qualifier("soft")
    Dessert cake;
    @Autowired
    @DessertQualifier(DessertEnum.COOKIE)
    Dessert cookie;
    
    @Test
    public void testIceCream(){
        Assert.assertEquals("IceCream", this.iceCream.getTaste());
    }
    @Test
    public void testCake(){
        Assert.assertEquals("Cake", this.cake.getTaste());
    }
    @Test
    public void testCookie(){
        Assert.assertEquals("Cookie", this.cookie.getTaste());
    }
    
}
