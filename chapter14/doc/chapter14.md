# Methog Security
* Spring позволяет ограничивать доступ к методам
используя аннотации.
* Эти аннотация ограничивают доступ к аннотированному методу только для пользователей с указанными ролями:
```java
@Secured({"ROLE_ADMIN",ROLE_SPITTER})
@RolesAllowed({"ROLE_ADMIN",ROLE_SPITTER})
```
* Чтобы аннотация заработала нужно добавить класс
```java
@Configuration
@EnableGlobalMethodSecurity(securedEnabled = true,jsr250Enabled = true)
//securedEnabled разрешает использовать аннотацию @Secured
//jsr250Enabled разрешает использовать @RolesAllowed с таким же синтаксисом
public class MethodSecurityConfig extends GlobalMethodSecurityConfiguration {

}
```
в
```java
AbstractAnnotationConfigDispatcherServletInitializer.getServletConfigClasses()
```
