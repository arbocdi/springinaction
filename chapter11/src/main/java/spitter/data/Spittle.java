package spitter.data;

import java.io.Serializable;
import java.sql.Timestamp;
import java.util.Date;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import lombok.Data;

/**
 *
 * @author arbocdi
 */
@Data
//некоторое высказывание пользователя
@Entity
@Table(name = "spittles")
public class Spittle implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String message;
    @Column(name = "date_time")
    private Timestamp time = new Timestamp(System.currentTimeMillis());
    public Spittle() {
    }

    
    
    public Spittle(long id) {
        this.id = id;
    }

    public Spittle(long id, String message) {
        this.id = id;
        this.message = message;
        this.time = new Timestamp(System.currentTimeMillis());
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
