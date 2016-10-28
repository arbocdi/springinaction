package spitter.data;

/**
 *
 * @author arbocdi
 */
public interface SpitterRepository {

    void save(Spitter spitter);

    Spitter findByUsername(String username);
}
