<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib 
    uri="http://www.springframework.org/tags" 
    prefix="s" %>
<h1><s:message code="spittr.welcome"/></h1>
<a href="<c:url value="/spittles" />">Spittles</a> 
<a href="<c:url value="/spitter/register" />">Register</a>
<br/>
Current Locale : ${pageContext.response.locale}|

