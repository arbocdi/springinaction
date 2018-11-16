package spitter.data.repos;

import java.util.List;
import spitter.data.Spittle;

/**
 *
 * @author arbocdi
 */
public interface SpittleRepository {
    List<Spittle> findSpittles(int count);
    Spittle findOne(long id);
    void saveSpittle(Spittle spittle);
}
