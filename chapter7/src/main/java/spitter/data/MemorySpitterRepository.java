package spitter.data;

import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;
import static org.springframework.beans.factory.config.ConfigurableBeanFactory.SCOPE_SINGLETON;
import org.springframework.context.annotation.Primary;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Component;

/**
 *
 * @author arbocdi
 */
@Component
@Primary
@Scope(SCOPE_SINGLETON)
public class MemorySpitterRepository implements SpitterRepository{
    
    Map<String,Spitter> spitters = new ConcurrentHashMap();

    @Override
    public void save(Spitter spitter) {
        this.spitters.put(spitter.getUsername(), spitter);
    }

    @Override
    public Spitter findByUsername(String username) {
        return this.spitters.get(username);
    }

}
