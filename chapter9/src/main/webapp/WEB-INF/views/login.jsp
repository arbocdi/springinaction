<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib 
    uri="http://www.springframework.org/tags" 
    prefix="s" %>
<html>
    <head><title>Login Page</title></head>
    <body onload='document.f.username.focus();'>
        <!-- login form must have predefined action, user and password fields -->
        <h3>Login with Username and Password</h3>
        <form name='f' action='/login' method='POST'>
            <table>
                <tr><td>User:</td><td>
                        <input type='text' name='username' value=''></td></tr>
                <tr><td>Password:</td>
                    <td><input type='password' name='password'/></td></tr>
                <tr><td colspan='2'>
                        <input name="submit" type="submit" value="Login"/></td></tr>
                <!-- csrf protection -->
                <input type='hidden'
                    name="${_csrf.parameterName}"
                    value="${_csrf.token}" />
            </table>
        </form>
    </body>
</html>
