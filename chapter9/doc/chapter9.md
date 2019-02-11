# Web secutiry
![securityModules](securityModules.png)
*  Для веб-приложения нужно добавить в CP: core,configuration,web.
* Principal - главный, основной - это некая сущность - пользователь, сервис, устройство.
* Web-безопасность в спринг реализована
как набор web-фильтров. DelagatingFilterProxy направляет
все запросы в специальный бин (id = springSecurityFilterChain), в качестве которого обычно
выступает FilterChainProxy.
* FilterChainProxy направляет запрос в цепочку secutiry
фильтров Spring.
![filters](filters.png)
* DelagatingFilterProxy конфигурируется либо в web xml,
либо программно.
* Конфигурируем security в WebMvc-приложении:
```java
//конфигурация аутентификации и авторизации
@Configuration
@EnableWebMvcSecurity
//@EnableWebSecurity
public class SecurityConfig extends WebSecurityConfigurerAdapter {
}
//конфигурация фильтров безопасности спринг
public class SecurityWebAppInitializer
   extends AbstractSecurityWebApplicationInitializer {
}
```
![webSecurityConfigurerAdapterMethods](webSecurityConfigurerAdapterMethods.png)
* Возможно хранить аутентификационные данные в памяти (см код SecurityConfig), методы хранилища в памяти:
![memoryAuth](memoryAuth.png)
* Role это GrantedAuthority с префиксом ROLE_
* GrantedAuthority это некоторое разрешение или "право".
* UserDetailsService - это интерфейс, используемый для
поиска пользователей в некотором хранилище данных:
```java
public interface UserDetailsService {
    UserDetails loadUserByUsername(String username)
      throws UsernameNotFoundException;
}
```
![spitterAuth](spitterAuth.png)
* Можно использовать SpEL для конфигурации авторизации:
![expr1.png](expr1.png)
![expr2.png](expr2.png)
* CSRF - cross-site request forgery - если юзер залогинен на одном сайте, то можно отправить
потенциально вредоносную команду с другого сайта
на первый.
* По умолчанию в спрингах включена CRSF-защита
и каждая форма должна иметь поле, которое содержит
некий секретный токен:
```java
<inputtype="hidden"
  name="${_csrf.parameterName}"
  value="${_csrf.token}" />
```
* CSRF отключается в WebSecurityConfigurerAdapter.
* Можно использовать и базовую http-аутентификацию.
##### Spring And Hibernate Materials
![springSecurityModel](img/springSecurityModel.png)
![securityUsingFilters](img/securityUsingFilters.png)
![securityOverview](img/securityOverview.png)
![securityInAction](img/securityInAction.png)
![securityConcepts](img/securityConcepts.png)
![declarativeSecurity](img/declarativeSecurity.png)
![programmaticSecurity](img/programmaticSecurity.png)
![loginMethods](img/loginMethods.png)
* project-specific tasks (maven/security):<br/>
<span style="color:blue;">
spring-security-demo-01-base-app
<br/>
spring-security-demo-02-base-security
</span>


![devProcess1](img/devProcess1.png)
![enableWebMvc](img/enableWebMvc.png)
![appConfig1](img/appConfig1.png)
![dispatcher1](img/dispatcher1.png)
![controller1](img/controller1.png)
* Чтобы найти правильную версию для spring-security нужно:
  1. Найти желаемую версию <b>spring-security-web, spring-security-config</b> в search.maven.org.
  2. Посмотреть в pom.xml на какую версию spring framework он ссылается:

![findingSpringSecurityVersion](img/findingSpringSecurityVersion.png)
##### Configuring basic security
![securityDevProcess](img/securityDevProcess.png)
* Этот класс регистрирует security-фильтры spring:

![createSecurityInitializer](img/createSecurityInitializer.png)
![webSecurityConfigurerAdapter](img/webSecurityConfigurerAdapter.png)
* SpringSecurity работает на базе Http-сессий(JSESSIONID).
##### custom login form (security-demo-03)
![customLoginForm1](img/customLoginForm1.png)
![customLoginFormDevProcess](img/customLoginFormDevProcess.png)
* Security configuration:
  1. authorizeRequests() - ограничить доступ используя HttpServletRequest
  2. anyRequest().authenticated() - любой запрос должен быть аутентифицирован - т.е. пользователь должен быть залогинен
  3. loginPage("/showMyLoginPage") - показывать Login Page по этому адресу. Нужно создать соотв. контроллер.
  4. loginProcessinUrl("/authenticateTheUser") - на этот адрес LoginPage будет отправлять запросы на аутентификацию. Spring Security перехватит вызов по этому адресу и сверит имя юзера и пароль. Контроллер для обработки этого запроса создавать не нужно.
  5. permitAll() - все имеют доступ к LoginPage.

![loginPageStep1](img/loginPageStep1.png)
![loginPageStep2](img/loginPageStep2.png)
* Login Form должна:
  1. использовать метод post
  2. запрос должен посылаться на "/authenticateTheUser"
  3. нужно использовать Form-binding tag library
  4. поля имя пользователя и пароль должны иметь стандартные имена:username,password

![loginPageStep3](img/loginPageStep3.png)
![failedLogin](img/failedLogin.png)
![failedLoginDevProcess](img/failedLoginDevProcess.png)
![loginFormErrors](img/loginFormErrors.png)
##### adding bootstrap (demo-04)
![bootstrap](img2/bootstrap.png)
![bootstrapDevProcess](img2/bootstrapDevProcess.png)
##### logging out (demo-05)
![logOut](img2/logOut.png)
![logOutDevProcess](img2/logOutDevProcess.png)
![logOutStep1](img2/logOutStep1.png)
![logOuts2](img2/logOuts2.png)
![logOutProcess](img2/logOutProcess.png)
![logOut2](img2/logOut3.png)
##### csrf (demo-06)
* <b>CSRF (англ. Сross Site Request Forgery — «межсайтовая подделка запроса», также известна как CSRF)</b>
* Пусть Боб создал тег <img>, в котором в качестве источника картинки указал URL, при переходе по которому выполняется действие на сайте банка Алисы, например:
Боб: Привет, Алиса! Посмотри, какой милый котик:
```html
<img src="http://bank.example.com/withdraw?account=Alice&amount=1000000&for=Bob">
```
* Если банк Алисы хранит информацию об аутентификации Алисы в куки, и если куки ещё не истекли, при попытке загрузить картинку браузер Алисы отправит куки в запросе на перевод денег на счёт Боба, чем подтвердит аутентификацию Алисы. Таким образом, транзакция будет успешно завершена, хотя её подтверждение произойдет без ведома Алисы.

* Распространённым способом защиты является механизм, при котором с каждой сессией пользователя ассоциируется дополнительный секретный уникальный ключ, предназначенный для выполнения запросов. Секретный ключ не должен передаваться в открытом виде, например, для POST запросов ключ следует передавать в теле запроса, а не в адресе страницы. Браузер пользователя посылает этот ключ в числе параметров каждого запроса, и перед выполнением каких-либо действий сервер проверяет этот ключ.

* Synchronizer token pattern (STP) is a technique where a token, secret and unique value for each request, is embedded by the web application in all HTML forms and verified on the server side.

![csrfProtection](img2/csrfProtection.png)
![csrfAutoToken](img2/csrfAutoToken.png)
![csrfManually](img2/csrfManually.png)
* Spring Security автоматом добавляет токен (видно в исходниках страницы).
```HTML
<input type="hidden" name="_csrf" value="69fab7b5-2848-4d5f-a275-0ff80c862fac">
```
* Используя обычную веб-форму со включенной csrf-защитой и без добавленного вручную токена получим ошибку.
##### display userID and roles (demo-07)
* Spring Security имеет специальные теги для отображения имен и ролей пользователя.

![devProcess](img3/devProcess.png)
```HTML
home.jsp

<%@taglib prefix="security" uri="http://www.springframework.org/security/tags" %>
...
<!-- show username and roles-->
User: <security:authentication property="principal.username"/>
<br><br>
Role(s): <security:authentication property="principal.authorities"/>
<hr>
```
##### Ограничение доступа на базе ролей (demo-07)
![project1](img/project1.png)
![roles](img3/roles.png)
![rolesDevProcess](img3/rolesDevProcess.png)
![updateUserRoles](img3/updateUserRoles.png)
![restrictSingleRole](img3/restrictSingleRole.png)
![restrictMultipleRoles](img3/restrictMultipleRoles.png)
![antMatchers](img3/antMatchers.png)
![rolesRestriction](img3/rolesRestriction.png)
##### Custom access denied page (demo-07)
![customAccessDeniedPage.png](img3/customAccessDeniedPage.png)
![customAccessDeniedDevProcess](img3/customAccessDeniedDevProcess.png.png)
![adStep1.png](img3/adStep1.png)
##### Displaying content based on roles (demo-07)
![employeeLinks](img3/employeeLinks.png)
* Managers and Admins should see their specific content.

![authorizeTag](img3/authorizeTag.png)
