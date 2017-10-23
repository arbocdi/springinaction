package net.sf.arbocdi.room_controller.back.repo;

import java.sql.Timestamp;
import java.util.List;
import net.sf.arbocdi.room_controller.back.data_reader.RoomData;

/**
 *
 * @author arbocdi
 */
public interface RoomDataRepo {

    void insertData(List<RoomData> data);

    List<RoomData> readData(Timestamp startTime,Timestamp endTime,long limit);
    
    List<RoomData> readData(Timestamp startTime,Timestamp endTime,long pageNumber,long pageSize);
    
    void clearData();
}
