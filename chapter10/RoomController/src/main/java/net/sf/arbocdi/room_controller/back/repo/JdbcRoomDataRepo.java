package net.sf.arbocdi.room_controller.back.repo;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Timestamp;
import java.util.List;
import net.sf.arbocdi.room_controller.back.TemplateUtils;
import net.sf.arbocdi.room_controller.back.TemplateUtils.Entry;
import net.sf.arbocdi.room_controller.back.data_reader.RoomData;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Primary;
import org.springframework.jdbc.core.JdbcOperations;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

/**
 *
 * @author arbocdi
 */
@Repository
@Primary
public class JdbcRoomDataRepo implements RoomDataRepo {

    @Autowired
    private JdbcOperations jdbcOperations;

    @Override
    public void insertData(List<RoomData> data) {
        for (RoomData rd : data) {
            this.jdbcOperations.update(TemplateUtils.getString("room_data/insertRoomRecord.ftl.sql"), rd.getRoom(), rd.getDate(), rd.getAirTemp(), rd.getFloorTemp());
        }
    }

    @Override
    public List<RoomData> readData(Timestamp startTime, Timestamp endTime, long limit) {
        String query = TemplateUtils.getString("room_data/readRoomRecords.ftl.sql",
                new Entry("startTime", startTime),
                new Entry("endTime", endTime),
                new Entry("limit", limit));
        return this.jdbcOperations.query(query, new RoomDataRowMapper());
    }

    @Override
    public void clearData() {
        this.jdbcOperations.update(TemplateUtils.getString("room_data/clearRoomRecords.ftl.sql"));
    }

    @Override
    public List<RoomData> readData(Timestamp startTime, Timestamp endTime,long pageNumber, long pageSize) {
        long offset = pageSize*(pageNumber-1);
        String query = TemplateUtils.getString("room_data/readRoomRecordsPaginator.ftl.sql",
                new Entry("startTime", startTime),
                new Entry("endTime", endTime),
                new Entry("offset", offset),
                new Entry("limit", pageSize));
        return this.jdbcOperations.query(query, new RoomDataRowMapper());
    }

    public static class RoomDataRowMapper implements RowMapper<RoomData> {

        @Override
        public RoomData mapRow(ResultSet rs, int i) throws SQLException {
            RoomData rd = new RoomData();
            rd.setAirTemp(rs.getInt("air_temp"));
            rd.setDate(rs.getTimestamp("date_time"));
            rd.setFloorTemp(rs.getInt("floor_temp"));
            rd.setRoom(rs.getLong("room_id"));
            rd.setId(rs.getLong("id"));
            return rd;
        }

    }

}
