package spitter.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.annotation.web.servlet.configuration.EnableWebMvcSecurity;

/**
 *
 * @author arbocdi
 */
@Configuration
@EnableWebMvcSecurity
public class SecurityConfig extends WebSecurityConfigurerAdapter {

  
    @Override
    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
        //хранилище данных в памяти
        //roles - добавляет пользователю authorities с префиксом ROLE_ADMIN и тп.
        auth.inMemoryAuthentication().withUser("arboc").password("123").roles("ADMIN");
    }

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        // /spitters/me доступен только админу
        // /spittles доступен всем, кто аутентифицирован
        // вырубаем csrf-защиту
        http.csrf().disable()
                //.formLogin().loginPage("/login")//включим вход с формой /login
                //.and()
                .httpBasic().realmName("spitter");// http-basic auth включим, все страницы в одинаковом realm
                 
                
    }

}
