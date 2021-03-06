package spitter.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.annotation.web.servlet.configuration.EnableWebMvcSecurity;
import spitter.data.SpitterUserDetailsService;

/**
 *
 * @author arbocdi
 */
@Configuration
@EnableWebMvcSecurity
public class SecurityConfig extends WebSecurityConfigurerAdapter {

    @Autowired
    private SpitterUserDetailsService spitterUserService;

    @Override
    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
        //хранилище данных в памяти
        //roles - добавляет пользователю authorities с префиксом ROLE_ADMIN и тп.
        auth.inMemoryAuthentication().withUser("arboc").password("123").roles("ADMIN");
    }

    //@Override
    //используем репозиторий Spitters для аутентификации
    protected void configure2(AuthenticationManagerBuilder auth) throws Exception {
        //хранилище данных в памяти
        //roles - добавляет пользователю authorities с префиксом ROLE_ADMIN и тп.
        auth.userDetailsService(spitterUserService);
    }

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        // /spitters/me доступен только админу
        // /spittles доступен всем, кто аутентифицирован
        // вырубаем csrf-защиту
        http.csrf().disable()
                //.formLogin().loginPage("/login")//включим вход с формой /login
                //.and()
                .httpBasic().realmName("spitter")// http-basic auth включим, все страницы в одинаковом realm
                 //имеют один и тот же логин и пароль
                .and()
                .authorizeRequests()
                .regexMatchers("/spitters/me").hasRole("ROLE_ADMIN")
                .regexMatchers("/spittles").access("isAuthenticated()")
                .anyRequest().permitAll()
                ;
    }

}
