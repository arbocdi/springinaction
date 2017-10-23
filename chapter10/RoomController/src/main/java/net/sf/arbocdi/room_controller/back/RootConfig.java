package net.sf.arbocdi.room_controller.back;

import com.zaxxer.hikari.HikariConfig;
import com.zaxxer.hikari.HikariDataSource;
import java.io.File;
import javax.sql.DataSource;
import net.sf.selibs.utils.misc.HttpClientWrapper;
import net.sf.selibs.utils.service.ServiceException;
import org.simpleframework.xml.Serializer;
import org.simpleframework.xml.core.Persister;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.PropertySource;
import org.springframework.context.annotation.Scope;
import org.springframework.context.annotation.ScopedProxyMode;
import org.springframework.context.support.PropertySourcesPlaceholderConfigurer;
import org.springframework.jdbc.core.JdbcOperations;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.scheduling.TaskScheduler;
import org.springframework.scheduling.concurrent.ThreadPoolTaskScheduler;

/**
 *
 * @author arbocdi
 */
@Configuration
@ComponentScan
@PropertySource("file:config/config.properties")
public class RootConfig {

    public static final String CFG_DIR = "config";
    public static final String HTTP_CLIENT_CFG = CFG_DIR + "/httpClient.xml";
    public static final String POOL_CFG = CFG_DIR + "/pool.properties";

    @Bean
    public static PropertySourcesPlaceholderConfigurer propertyConfigInDev() {
        return new PropertySourcesPlaceholderConfigurer();
    }

    @Bean(destroyMethod = "shutdown")
    @Scope(scopeName = "singleton")
    public TaskScheduler taskScheduler() {
        ThreadPoolTaskScheduler te = new ThreadPoolTaskScheduler();
        te.setPoolSize(5);
        te.setAwaitTerminationSeconds(120);
        return te;
    }

    @Bean(destroyMethod = "stop")
    @Scope(scopeName = "singleton")
    public HttpClientWrapper httpClient() throws ServiceException, Exception {
        Serializer serializer = new Persister();
        HttpClientWrapper httpClient = serializer.read(HttpClientWrapper.class,
                new File(HTTP_CLIENT_CFG));
        httpClient.start();
        return httpClient;
    }

    public void generateHttpClient() throws Exception {
        Serializer serializer = new Persister();
        HttpClientWrapper httpClient = new HttpClientWrapper();
        serializer.write(httpClient, new File(HTTP_CLIENT_CFG));
    }

    public static void main(String[] args) throws Exception {
        RootConfig cfg = new RootConfig();
        File cfgDir = new File(CFG_DIR);
        cfgDir.mkdir();
        cfg.generateHttpClient();
    }

    @Bean(destroyMethod = "close")
    @Scope(scopeName = "singleton")
    public DataSource hikariDS() {
        HikariConfig hcfg = new HikariConfig(POOL_CFG);
        HikariDataSource ds = new HikariDataSource(hcfg);
        return ds;
    }

    @Bean
    @Scope(scopeName = "singleton",proxyMode = ScopedProxyMode.INTERFACES)
    public JdbcOperations jdbcOperations(DataSource ds) {
        return new JdbcTemplate(ds);
    }

}
