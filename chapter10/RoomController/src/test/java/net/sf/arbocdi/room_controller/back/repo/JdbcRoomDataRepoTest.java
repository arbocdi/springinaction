/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package net.sf.arbocdi.room_controller.back.repo;

import java.sql.Timestamp;
import java.util.LinkedList;
import java.util.List;
import junit.framework.Assert;
import net.sf.arbocdi.room_controller.back.RootConfig;
import net.sf.arbocdi.room_controller.back.data_reader.RoomData;
import org.junit.Test;
import static org.junit.Assert.*;
import org.junit.Before;
import org.junit.Ignore;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

/**
 *
 * @author arbocdi
 */
@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(classes=RootConfig.class)
public class JdbcRoomDataRepoTest {
    
    @Autowired
    private RoomDataRepo repo;
    
    public JdbcRoomDataRepoTest() {
    }
    
    @Before
    public void befoe(){
        //this.repo.clearData();
    }

    @Test
    @Ignore
    public void testReadWriteData() {
        List<RoomData> data = new LinkedList();
        RoomData rec1 = new RoomData();
        rec1.setAirTemp(11);
        rec1.setFloorTemp(12);
        rec1.setDate(new Timestamp(1000));
        rec1.setRoom(1);
        data.add(rec1);
        repo.insertData(data);
        
        data = repo.readData(null, null, 100);
        System.out.println(data);
        
        RoomData rec1Db = data.get(0);
        rec1.setId(rec1Db.getId());
        
        Assert.assertEquals(rec1, rec1Db);
    }
    
}
