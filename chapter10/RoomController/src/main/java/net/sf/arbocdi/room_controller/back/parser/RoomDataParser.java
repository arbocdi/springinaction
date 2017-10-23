package net.sf.arbocdi.room_controller.back.parser;

import java.util.List;
import net.sf.arbocdi.room_controller.back.data_reader.RoomData;

/**
 *
 * @author arbocdi
 */
public interface RoomDataParser {
    List<RoomData> parse(String str);
}
