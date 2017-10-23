package net.sf.arbocdi.room_controller.back.parser;

import net.sf.arbocdi.room_controller.back.parser.RoomDataParser;
import java.sql.Timestamp;
import java.util.LinkedList;
import java.util.List;
import java.util.regex.Matcher;
import java.util.regex.Pattern;
import net.sf.arbocdi.room_controller.back.data_reader.RoomData;
import org.springframework.stereotype.Component;
import org.springframework.context.annotation.*;

/**
 *
 * @author arbocdi
 */
@Component
@Primary
@Scope(proxyMode = ScopedProxyMode.INTERFACES, scopeName = "prototype")
public class HtmlRoomDataParser implements RoomDataParser {

    protected Pattern tempPattern = Pattern.compile("^T.+ (\\d+) .+ (\\d+) .+$");
    protected Pattern roomPattern = Pattern.compile("^Room .+(\\d):.+$");

    @Override
    public List<RoomData> parse(String str) {
        List<RoomData> rdList = new LinkedList();
        int room = 0;
        for (String line : str.split("\\n")) {
            if (this.isRoom(line)) {
                room = pasreRoom(line);
            }
            if (isTemp(line)) {
                RoomData rd = parseTemp(line);
                rd.setRoom(room);
                rdList.add(rd);
            }
        }
        return rdList;
    }

    public boolean isRoom(String str) {
        Matcher m = roomPattern.matcher(str);
        return m.matches();
    }

    public int pasreRoom(String str) {
        //Room #1: <br />
        Matcher m = roomPattern.matcher(str);
        if (m.find()) {
            return Integer.parseInt(m.group(1));
        }
        throw new RuntimeException("No room number found!");
    }

    public boolean isTemp(String str) {
        Matcher m = tempPattern.matcher(str);
        return m.matches();
    }

    public RoomData parseTemp(String str) {
        //T(air) = 11 degrees C,  T(floor) = 12 degrees C<br />
        Matcher m = tempPattern.matcher(str);
        RoomData rd = new RoomData();
        rd.setDate(new Timestamp(System.currentTimeMillis()));
        if (m.find()) {
            rd.setAirTemp(Integer.parseInt(m.group(1)));
            rd.setFloorTemp(Integer.parseInt(m.group(2)));
        }
        return rd;
    }

}
