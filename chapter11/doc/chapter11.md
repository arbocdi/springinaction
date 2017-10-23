# Spring JPA
![coreDataAccessElements](coreDataAccessElements.png)
* EntityManager бывает
  1. Application-managed - приложение ответственно за создание EM старт и останов транзакций и тп.
  2. Container-managed - EM управляется контейнером.
* В любом случае spring будет сам управлять EM. В случае 1 - как приложение, в случае 2 - как контейнер.
Основное их различие - в способе конфигурации.
* App-managed EMF требуют наличия persistence,xml в META-INF.
* Независимо от способа создания можно инжектировать прокси EM.
```java
@PersistenceContext
private EntityManager em;
@PersistenceUnit
private EntityManagerFactory emf;
```
* Для декларативного управления транзакциями dao-класс аннотируется через
```java
@Transactional
```
* Следующая аннотация включает поддержку транзакций:
```java
@EnableTransactionManagement
```
* Также в конфигурации должен быть определен бин для управления транзакциями:
```java
JpaTransactionManager
```
![emf](emf.png)
### Container-managed EntityManagerFactory
* конфигурируется программно, создается LocalContainerEntityManagerBean в который добавляется
DataSource и JpaVendorAdapter.
* DataSource можно создать или поискать в JNDI:
```java
@Bean
public DataSource dataSource() {
return new JndiDataSourceLookup().getDataSource("jdbc/VehicleDS");
}
```
* JpaVendorAdapter имеет свойство database которое может принимать значения:

![db](db.png)

### Автоматическое создание репозиториев
```java
public interface SpitterAutoRepository extends JpaRepository<Spitter, Long> {
}
```
* В рантайме спринг имплементирует 18 хелпер-методов интерфейса JpaRepository.
* Класс сущности и первичного ключа указываются как параметры JpaRepository.
* Чтобы включить авто-имплементацию репозиториев нужно аннотировать конфиг.класс через
```java
@EnableJpaRepositories(basePackages="spitter.data")
```
* Спринг может автоимплементировать методы на основе их названий:
![methods](methods.png)
  1. всего можно использовать 4 глагола - read=find=get и count.
  2. Subject обычно не важен тк он уже определен в параметрах класса.
  3. Предикат следует за словом By и может иметь множество операторов,
  если оператор не указан (как в примере) то предполагается равенство.
![predicate](predicate.png)

* Можно добавлять кастомные запросы в интерфейс используя @Query,писать имплементацию метода
так же не требуется.
```java
@Query("select s from Spitter s where s.email like '%gmail.com'")
List<Spitter> findAllGmailSpitters();
```
* Если @Query-аннотации не достаточно то можно создать класс InterfaceNameImpl и spring
автоматически добавит его методы к авто-генерируемым методам класса.

![spittleDB](spittleDB.png)
