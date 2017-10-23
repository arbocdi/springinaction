/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package net.sf.arbocdi.room_controller.back.data_reader;

import junit.framework.Assert;
import net.sf.arbocdi.room_controller.back.RootConfig;
import org.junit.AfterClass;
import org.junit.Test;
import static org.junit.Assert.*;
import org.junit.Before;
import org.junit.BeforeClass;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

/**
 *
 * @author arbocdi
 */
public class HttpRoomDataReaderTest {
    
    private static AnnotationConfigApplicationContext ctx;
    
    @BeforeClass
    public static void before(){
        ctx = new AnnotationConfigApplicationContext(RootConfig.class);
                
    }
    @AfterClass
    public static void after(){
        ctx.close();
    }
    @Before
    public void init(){
        ctx.getAutowireCapableBeanFactory().autowireBean(this);
    }
    
    @Autowired
    private HttpRoomDataReader dataReader;
    
    public HttpRoomDataReaderTest() {
    }

    @Test
    public void testDataReader() throws InterruptedException {
        System.out.println(dataReader);
        Assert.assertNotNull(dataReader.getHttpClient());
        Assert.assertNotNull(dataReader.getUrl());
        Assert.assertNotNull(dataReader.getParser());
        Assert.assertNotNull(dataReader.getTaskScheduler());
    }
    
    
}
