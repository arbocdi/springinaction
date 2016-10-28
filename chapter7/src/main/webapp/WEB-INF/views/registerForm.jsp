<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib uri="http://www.springframework.org/tags/form" prefix="sf" %>
<h1>Register</h1>
<!-- form will be sent to the address it was requested
because no action attribute is present 
commandName - object name in model
path - object`s properties
the object shouldbe present in model
-->
<sf:form method="POST" commandName="spitter">
    <!-- sf:errors can display errors for the single element, 
    or for all  form elements in one place,
    span element will be used by default, here I use div-->
    <sf:errors cssClass="error" path="*" element="div"/>
    <!--######################## -->
    First Name: <sf:input path="firstName" />
    <!-- sf:errors will display error message if 
    validation fails for the firstName -->
    <sf:errors cssClass="error" path="firstName"/>
    <br/>
    <!--######################## -->
    <!--sf:label renders html label and can show validation errors if
    cssErrorClass and path are set -->
    <sf:label path="lastName" cssErrorClass="error"> Last Name:</sf:label><sf:input path="lastName" /><br/>
        <!--######################## -->
        Email: <sf:input path="email" /><br/>
    <!--######################## -->
    Username: <sf:input path="username" /><br/>
    <!--######################## -->
    Password: <sf:password path="password" /><br/>
    <!--######################## -->
    <input type="submit" value="Register" />
</sf:form>