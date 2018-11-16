package spitter.data.repos;

import spitter.data.Spitter;

/**
 *
 * @author arbocdi
 */
public interface SpitterRepository {

    void save(Spitter spitter);

    Spitter findByUsername(String username);
}
