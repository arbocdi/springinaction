* cross-cutting concerns (сквозная функциональность) - это действия,
выполняемые во многих местах системы для решения одних и тех же задачь
(напр. логгирование, обработка исключений и пр).
* advice (совет) - какие действия нужно выполнить, когда их нужно выполнить
(до вызова метода, после вызова метода, до и после, только если выброшено искл и пр.).
* join points - это все точки выполнения программы, где можно применить совет
(вызов метода, изменение поля и т.п.).
* pointcuts - это набор join point в которых применяется данный совет. Spring перехватывает только выполнение метода и только для публичных не статических методов.
* аспект = совет+pointcuts
![aspect](aspect.png)
* introduction - это добавление новых методов и аттрибутов в существующие классы.
* weaving - это процесс применения аспектов к объектам, в spring создается новый прокси-объект, содержащий
аспект и собственно рабочий объект.
![proxy](proxy.png)
### Pointcuts (выборки join points)
* Spring перехватывает только вызов методов (конструкторы, доступ к полям и пр. не перехватываются).
* Перехват методов реализован с помощью прокси-объектов. Вызов методов объекта ИЗ ТОГО ЖЕ объекта (через this) не перехватывается (т.к. this в target-объекте
это сам target-объект а не прокси). 
Создание прокси-объектов:
	* Для проксирования интерфейсов используются JDK-прокси (возможен перехват только методов интерфейса).
	* Для проксирования классов используются CGLIB-прокси (возможен перехват public,protected,package методов).
![designators](designators.png)
* within аналогична target включает в выборку статические join points (которые в спринг не перехватываются).
в within можно использовать wildcard, в target - нельзя.
* any join point (method execution only in Spring AOP) within the service package:
```java
within(com.xyz.service.*)
```
* any join point (method execution only in Spring AOP) within the service package or a sub-package:
```java
within(com.xyz.service..*)
```
* any join point (method execution only in Spring AOP) where the target object implements the AccountService interface:
(+ означает все реализации интерфейса)
```java
target(com.xyz.service.AccountService+)
```
* П: выберем точку внедрения по:
  1. Полному имени класса (concert.Performance)
  2. Имени метода
  3. Возвращаемый тип - любой
  4. Тип аргументов - любой
![perform1](perform1.png)
* П: используя указатель within ограничим выборку точек внедрения, будем перехватывать метод только если он объявлен внутри любого класса в пакете concert:
![perform2](perform2.png)
* В aspectJ выборках можно использовать булевые
операторы:
```java
&& and
|| or
! not
```
* Указатель bean позволяет опеределить аспект только
при вызове метода бином с определенным id:
```java
execution(* concert.Performance.perform())
            and bean('woodstock')
```
### Советы

![adviceMethods](adviceMethods.png)
* @EnableAspectJAutoProxy  - это аннотация, включающая
автопоиск аспектов(включена в @SpringBootApplication), аналог в xml:
```xml
<aop:aspectj-autoproxy/>
```

![concert](concert.png)
* В советы можно передавать параметры:
![counter](counter.png)

![cd](cd.png)

### Добавление новых методов и свойств
* Spring AOP позволяет добавлять новые методы в существующие бины, при вызове дополнительного метода
прокси-объект пробрасывает вызов на другой объект,
т.о. получается, что один бин состоит из множества
объектов.

![proxy](introProxy.png)
