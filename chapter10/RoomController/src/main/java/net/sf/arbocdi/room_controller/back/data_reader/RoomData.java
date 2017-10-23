package net.sf.arbocdi.room_controller.back.data_reader;

import java.sql.Timestamp;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import lombok.Data;

/**
 *
 * @author arbocdi
 */
@Data
public class RoomData {
    
    private long id;
    private long room;
    private Timestamp date;
    private int airTemp;
    private int floorTemp;
    
    private DateFormat df = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
    
    public String getDateAsStr(){
        return df.format(date);
    }

}
