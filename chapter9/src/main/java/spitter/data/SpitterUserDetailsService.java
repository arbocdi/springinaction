package spitter.data;

import java.util.Arrays;
import java.util.Collection;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Component;

/**
 *
 * @author arbocdi
 */
@Component
public class SpitterUserDetailsService implements UserDetailsService {

    private SpitterRepository spitterRepo;

    @Override
    public UserDetails loadUserByUsername(String string) throws UsernameNotFoundException {
        final Spitter spitter = this.spitterRepo.findByUsername(string);
        if (spitter == null) {
            throw new UsernameNotFoundException(string);
        }
        return new UserDetails() {

            @Override
            public Collection<? extends GrantedAuthority> getAuthorities() {
                return Arrays.asList(new SimpleGrantedAuthority("ROLE_SPITTER"));
            }

            @Override
            public String getPassword() {
                return spitter.getPassword();
            }

            @Override
            public String getUsername() {
                return spitter.getUsername();
            }

            @Override
            public boolean isAccountNonExpired() {
                return true;
            }

            @Override
            public boolean isAccountNonLocked() {
                return true;
            }

            @Override
            public boolean isCredentialsNonExpired() {
                return true;
            }

            @Override
            public boolean isEnabled() {
                return true;
            }
        };
    }

}
