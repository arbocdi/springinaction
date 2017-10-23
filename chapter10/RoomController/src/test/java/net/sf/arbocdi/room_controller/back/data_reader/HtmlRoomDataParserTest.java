/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package net.sf.arbocdi.room_controller.back.data_reader;

import net.sf.arbocdi.room_controller.back.parser.HtmlRoomDataParser;
import net.sf.arbocdi.room_controller.back.data_reader.RoomData;
import java.util.List;
import org.junit.Assert;
import org.junit.Test;

/**
 *
 * @author arbocdi
 */
public class HtmlRoomDataParserTest {

    public static final String TEMP_EXAMPLE = "T(air) = 11 degrees C,  T(floor) = 12 degrees C";
    public static final String ROOM_EXAMPLE = "Room #1: ";
    public static final String HTML_DATA = "HTTP/1.1 200 OK\n"
            + "Content-Type: text/html\n"
            + "\n"
            + "Room #1: <br />\n"
            + "T(air) = 11 degrees C,  T(floor) = 12 degrees C<br />\n"
            + "Room #2: <br />\n"
            + "T(air) = 21 degrees C,  T(floor) = 22 degrees C<br />\n"
            + "";
    
    protected HtmlRoomDataParser parser = new HtmlRoomDataParser();

    public HtmlRoomDataParserTest() {
    }
    
    @Test
    public void testParse(){
        List<RoomData> rdList = parser.parse(HTML_DATA);
        System.out.println(rdList);
    }

    @Test
    public void testParseRoom() {
        int room = this.parser.pasreRoom(ROOM_EXAMPLE);
        Assert.assertEquals(1, room);
    }

    @Test
    public void testIsTemp() {
        Assert.assertTrue(parser.isTemp(TEMP_EXAMPLE));
        Assert.assertFalse(parser.isTemp(ROOM_EXAMPLE));
    }

    @Test
    public void testIsRoom() {
        Assert.assertTrue(parser.isRoom(ROOM_EXAMPLE));
        Assert.assertFalse(parser.isRoom(TEMP_EXAMPLE));
    }

    @Test
    public void testParseTemp() {
        RoomData rd = parser.parseTemp(TEMP_EXAMPLE);
        System.out.println(rd);
        Assert.assertEquals(11, rd.getAirTemp());
        Assert.assertEquals(12, rd.getFloorTemp());

    }

}
