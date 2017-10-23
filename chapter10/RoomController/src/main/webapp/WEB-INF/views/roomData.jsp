<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@ taglib 
    uri="http://www.springframework.org/tags" 
    prefix="s" %>

<script type="text/javascript">
    $(document).ready(function () {
        $('#roomDataTable').DataTable({
            language: {
                url: '//cdn.datatables.net/plug-ins/1.10.13/i18n/Russian.json'
            },
            searching: false,
            "order": [[1, "desc"]]
        });
        $('#currentRoomData').DataTable({
            searching: false,
            paging: false,
            ordering: false,
            info: false,
            language: {
                url: '//cdn.datatables.net/plug-ins/1.10.13/i18n/Russian.json'
            }
        });
    });
</script>
<div  class = "table">
    <div class="cell">
        <h3 class="blue">Текущие данные</h3>
        <table class="display" id="currentRoomData" >
            <thead>
                <tr>
                    <th>Комната</th>
                    <th>Дата и время</th>
                    <th>Темп. воздуха</th>
                    <th>Темп. пола</th>
                </tr>
            </thead>
            <tbody>
                <c:forEach items="${currentData}" var="roomData" >
                    <tr>
                        <td>${roomData.room}</td>
                        <td>${roomData.getDateAsStr()}</td>
                        <td>${roomData.airTemp}</td>
                        <td>${roomData.floorTemp}</td>
                    </tr>
                </c:forEach>
            </tbody>
        </table>
    </div>
</div>
<div  style="display: table; margin-top: 10px;">
    <div style="width:400px; display: table-cell" class="block">
        <div>
            <h3 class="blue">Поиск в истории</h3>
            <form method="POST" class="roomForm" action="getData">
                <table>
                    <tr>
                        <td>С:</td>
                        <td><input type="text" name="startDate" value="${form.getStartDateStr()}"/></td>
                    </tr>
                    <tr>
                        <td>По:</td>
                        <td><input type="text" name="endDate" value="${form.getEndDateStr()}"/></td>
                    </tr>
                    <tr>
                        <td colspan="2"><input type="submit" value="OK" /></td>
                    </tr>
                </table>
            </form>
        </div>
    </div>
    <div style="width:802px; display: table-cell">
        <div class="block" style="margin-left:10px;">
            <div style="margin: 10px;">
                <h3 class="blue">История</h3>
                <table class="display"  id="roomDataTable">
                    <thead>
                        <tr>
                            <th>Комната</th>
                            <th>Дата и время</th>
                            <th>Темп. воздуха</th>
                            <th>Темп. пола</th>
                        </tr>
                    </thead>
                    <tbody>
                        <c:forEach items="${historyData}" var="roomData" >
                            <tr>
                                <td>${roomData.room}</td>
                                <td>${roomData.getDateAsStr()}</td>
                                <td>${roomData.airTemp}</td>
                                <td>${roomData.floorTemp}</td>
                            </tr>
                        </c:forEach>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</div>

