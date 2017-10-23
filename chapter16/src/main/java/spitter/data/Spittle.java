package spitter.data;

import java.util.Date;
import lombok.Data;

/**
 *
 * @author arbocdi
 */
@Data
//некоторое высказывание пользователя
public class Spittle {

    private long id;
    private String message;
    private Date date;
    
    public Spittle(){
        
    }
    
    public Spittle(long id) {
        this.id = id;
    }

    public Spittle(long id, String message) {
        this.id = id;
        this.message = message;
        this.date = new Date();
    }

    @Override
    public int hashCode() {
        int hash = 3;
        hash = 47 * hash + (int) (this.id ^ (this.id >>> 32));
        return hash;
    }

    @Override
    public boolean equals(Object obj) {
        if (obj == null) {
            return false;
        }
        if (getClass() != obj.getClass()) {
            return false;
        }
        final Spittle other = (Spittle) obj;
        if (this.id != other.id) {
            return false;
        }
        return true;
    }

}
