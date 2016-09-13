package chapter1.jdbc;

import java.sql.ResultSet;
import java.sql.SQLException;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;

/**
 *
 * @author arbocdi
 */
public class EmployeeDAO {

    public Employee getEmployeeById(long id) {
        JdbcTemplate jt = new JdbcTemplate(null);//data source
        return jt.queryForObject(
                "select id, firstname, lastname, salary "
                + "from employee where id=?",
                new RowMapper<Employee>() {
                    public Employee mapRow(ResultSet rs,
                            int rowNum) throws SQLException {
                        Employee employee = new Employee();
                        employee.setId(rs.getLong("id"));
                        return employee;
                    }
                },
                id);
    }
}
