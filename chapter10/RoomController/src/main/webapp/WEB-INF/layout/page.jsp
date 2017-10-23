<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@ taglib uri="http://www.springframework.org/tags" prefix="s" %>
<%@ taglib uri="http://tiles.apache.org/tags-tiles" prefix="t" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ page session="false" %>
<html>
    <head>
        <title>RoomController</title>
        <link rel="stylesheet"
              type="text/css"
              href="<s:url value="/resources/style.css" />" >
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
        <link rel="stylesheet" type="text/css" href="//cdn.datatables.net/1.10.13/css/jquery.dataTables.css">
        <script type="text/javascript" charset="utf8" src="//cdn.datatables.net/1.10.13/js/jquery.dataTables.js"></script>
        
    </head>
    <body>
        <div id="header">
            <t:insertAttribute name="header" />
        </div>
        <div id="content">
            <t:insertAttribute name="body" />
        </div>
        <div id="footer">
            <t:insertAttribute name="footer" />
        </div>
    </body>
</html>

