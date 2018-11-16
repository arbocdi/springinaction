/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package spitter.data.repos;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.dao.DataAccessException;
import org.springframework.jdbc.core.JdbcOperations;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.PlatformTransactionManager;
import org.springframework.transaction.TransactionDefinition;
import org.springframework.transaction.TransactionException;
import org.springframework.transaction.TransactionStatus;
import org.springframework.transaction.annotation.Isolation;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.support.DefaultTransactionDefinition;
import org.springframework.transaction.support.TransactionCallbackWithoutResult;
import org.springframework.transaction.support.TransactionTemplate;
import spitter.data.Spittle;

/**
 * Manual transactions using spring api
 * @author root
 */
@Repository
@Qualifier("jdbcRepo")
public class JDBCSpittleRepository implements SpittleRepository {

    @Autowired
    @Qualifier("jdbc")
    private PlatformTransactionManager tm;
    @Autowired
    @Qualifier("jdbcOps")
    private JdbcOperations jdbcOperations;

    @Override
    public List<Spittle> findSpittles(int count) {
        DefaultTransactionDefinition def = new DefaultTransactionDefinition();
        def.setPropagationBehavior(TransactionDefinition.PROPAGATION_REQUIRED);
        def.setIsolationLevel(TransactionDefinition.ISOLATION_DEFAULT);
        TransactionStatus status = tm.getTransaction(def);//получим новую транзакцию
        try {
            List<Spittle> sList = jdbcOperations.query("SELECT * FROM spittles ORDER BY id LIMIT ?  ", new Object[]{count}, new SpittleRowMapper());
            tm.commit(status);
            return sList;
        } catch (DataAccessException | TransactionException ex) {
            tm.rollback(status);
            throw new RuntimeException(ex);
        }

    }

    @Override
    public Spittle findOne(long id) {
        TransactionDefinition def = new DefaultTransactionDefinition();
        TransactionStatus status = tm.getTransaction(def);//получим новую транзакцию
        try {
            Spittle s = jdbcOperations.queryForObject("SELECT * FROM spittles WHERE id = ? ", new Object[]{id}, new SpittleRowMapper());
            tm.commit(status);
            return s;
        } catch (DataAccessException | TransactionException ex) {
            tm.rollback(status);
            throw new RuntimeException(ex);
        }
    }

    @Override
    public void saveSpittle(final Spittle spittle) {
         TransactionDefinition def = new DefaultTransactionDefinition();
        TransactionTemplate tt = new TransactionTemplate(tm,def);
        tt.execute(new TransactionCallbackWithoutResult() {
            @Override
            protected void doInTransactionWithoutResult(TransactionStatus ts) {
                jdbcOperations.update("INSERT INTO spittles (message,date_time) VALUES(?,?)", spittle.getMessage(), spittle.getTime());
                //ts.setRollbackOnly(); принудительный откат транзакии
            }
        });
    }

    public static class SpittleRowMapper implements RowMapper<Spittle> {

        @Override
        public Spittle mapRow(ResultSet rs, int i) throws SQLException {
            Spittle s = new Spittle();
            s.setId(rs.getLong("id"));
            s.setMessage(rs.getString("message"));
            s.setTime(rs.getTimestamp("date_time"));
            return s;
        }

    }

}
