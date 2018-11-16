package spitter.config;

import javax.sql.DataSource;
import org.postgresql.ds.PGPoolingDataSource;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.beans.factory.config.BeanPostProcessor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Scope;
import org.springframework.context.annotation.ScopedProxyMode;
import org.springframework.dao.annotation.PersistenceExceptionTranslationPostProcessor;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.jdbc.core.JdbcOperations;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.datasource.DataSourceTransactionManager;
import org.springframework.orm.jpa.JpaTransactionManager;
import org.springframework.orm.jpa.JpaVendorAdapter;
import org.springframework.orm.jpa.LocalContainerEntityManagerFactoryBean;
import org.springframework.orm.jpa.LocalEntityManagerFactoryBean;
import org.springframework.orm.jpa.support.PersistenceAnnotationBeanPostProcessor;
import org.springframework.orm.jpa.vendor.Database;
import org.springframework.orm.jpa.vendor.HibernateJpaVendorAdapter;
import org.springframework.transaction.PlatformTransactionManager;
import org.springframework.transaction.annotation.EnableTransactionManagement;

/**
 *
 * @author arbocdi
 */
@Configuration
@ComponentScan(basePackages = "spitter.data")
@EnableJpaRepositories(basePackages = "spitter.data")
@EnableTransactionManagement()//включим управление транзакциями 
public class RootConfig  {

//    @Bean
//    public LocalEntityManagerFactoryBean entityManagerFactoryBean() {
//        LocalEntityManagerFactoryBean emfb = new LocalEntityManagerFactoryBean();
//        emfb.setPersistenceUnitName("spitterPU");
//        return emfb;
//    }
    @Bean
    public JpaVendorAdapter jpaVendorAdapter() {
        HibernateJpaVendorAdapter adapter = new HibernateJpaVendorAdapter();
        adapter.setDatabase(Database.POSTGRESQL);
        adapter.setShowSql(true);
        adapter.setGenerateDdl(false);

        adapter.setDatabasePlatform("org.hibernate.dialect.PostgreSQLDialect");
        return adapter;
    }

    @Bean(destroyMethod = "close")
    public DataSource dataSource() {
        PGPoolingDataSource ds = new PGPoolingDataSource();
        ds.setDatabaseName("spring_db");
        ds.setServerName("127.0.0.1");
        ds.setPortNumber(5432);
        ds.setUser("postgres");
        ds.setPassword("postgres");
        ds.setMaxConnections(100);
        return ds;
    }

    @Bean()
    public LocalContainerEntityManagerFactoryBean entityManagerFactory(
            DataSource dataSource, JpaVendorAdapter jpaVendorAdapter) {
        LocalContainerEntityManagerFactoryBean emfb
                = new LocalContainerEntityManagerFactoryBean();
        emfb.setDataSource(dataSource);
        emfb.setJpaVendorAdapter(jpaVendorAdapter);
        emfb.setPackagesToScan("spitter.data");
        //по имени юнита можно инжектировать разные EM
        emfb.setPersistenceUnitName("spittle");
        return emfb;
    }

//    @Bean
//    //этот бин требуется чтобы spring понимал jpa-аннотации
//    //регистрируется автоматически
//    public PersistenceAnnotationBeanPostProcessor paPostProcessor() {
//        return new PersistenceAnnotationBeanPostProcessor();
//    }
//
//    @Bean
//    //этот бин оборачивает jpa-исключения в унифицированные spring-исключения
//    //регистрируется автоматически
//    public BeanPostProcessor persistenceTranslation() {
//        return new PersistenceExceptionTranslationPostProcessor();
//    }
    @Bean
    //этот бин обеспечивает поддержку транзакций
    //квалификатор нужен в случае множества БД
    @Qualifier("spittle")
    public PlatformTransactionManager transactionManager(LocalContainerEntityManagerFactoryBean entityManagerFactory) {
        JpaTransactionManager transactionManager
                = new JpaTransactionManager();
        transactionManager.setEntityManagerFactory(
                entityManagerFactory.getObject());
        return transactionManager;
    }

    @Bean(name = "jdbc")
    @Qualifier("jdbc")//qualifier doesnt work
    public PlatformTransactionManager transactionManager() {
        DataSourceTransactionManager transactionManager = new DataSourceTransactionManager();
        transactionManager.setDataSource(dataSource());
        return transactionManager;
    }

    @Bean(name = "jdbcOps")
    public JdbcOperations jdbcOperations() {
        JdbcTemplate jdbc = new JdbcTemplate();
        jdbc.setDataSource(dataSource());
        return jdbc;
    }

}
