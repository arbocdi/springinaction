package spitter.data;

import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import lombok.Data;

/**
 *
 * @author arbocdi
 */
@Data
//пользователь спиттера
public class Spitter {

    @NotNull
    @Size(min = 1, max = 20)
    protected String firstName;
    @NotNull
    @Size(min = 1, max = 20)
    protected String lastName;
    @NotNull
    @Size(min = 1, max = 20)
    protected String email;
    @NotNull
    @Size(min = 1, max = 20)
    protected String username;
    @NotNull
    @Size(min = 1, max = 20)
    protected String password;
}
