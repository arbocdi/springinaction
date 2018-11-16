package spitter.data.repos;

import java.util.LinkedList;
import java.util.List;
import static org.springframework.beans.factory.config.ConfigurableBeanFactory.SCOPE_SINGLETON;
import org.springframework.context.annotation.Primary;
import org.springframework.context.annotation.Scope;
import static org.springframework.context.annotation.ScopedProxyMode.INTERFACES;
import org.springframework.stereotype.Component;
import spitter.data.Spittle;

/**
 *
 * @author arbocdi
 */
@Component
@Primary
@Scope(value = SCOPE_SINGLETON, proxyMode = INTERFACES)
public class MemorySpittleRepository implements SpittleRepository {

    List<Spittle> spittles = new LinkedList();

    public MemorySpittleRepository() {
        for (int i = 0; i < 10; i++) {
            spittles.add(new Spittle(i, "Some message " + i));
        }
    }

    @Override
    public  List<Spittle> findSpittles(int count) {
        return this.spittles.subList(0, count);
    }

    @Override
    public Spittle findOne(long id) {
        for (Spittle spittle : spittles) {
            if (spittle.getId() == id) {
                return spittle;
            }
        }
        return null;
    }

    @Override
    public void saveSpittle(Spittle spittle) {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }

}
