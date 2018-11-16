/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package spitter.data.repos;

import java.util.List;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;
import spitter.data.Spittle;

/**
 *
 * @author root
 */
@Qualifier("DB")
@Repository
@Transactional(transactionManager = "spittle")
public class DBSpittleReposiory implements SpittleRepository {

    @PersistenceContext(unitName = "spittle")
    private EntityManager em;

    @Override
    public List<Spittle> findSpittles(int count) {
        Query query =   em.createQuery("SELECT s FROM Spittle s");
        query.setMaxResults(count);
        List<Spittle> spittleList = query.getResultList();
        return spittleList;
    }

    @Override
    public Spittle findOne(long id) {
        return em.find(Spittle.class, id);
    }

    @Override
    public void saveSpittle(Spittle spittle) {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }

}
