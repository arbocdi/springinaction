package spitter.data;

import java.util.List;

/**
 *
 * @author arbocdi
 */
public interface SpittleRepository {
    List<Spittle> findSpittles(int count);
    Spittle findOne(long id);
}
