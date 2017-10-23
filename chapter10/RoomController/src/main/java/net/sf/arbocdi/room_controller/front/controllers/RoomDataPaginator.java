package net.sf.arbocdi.room_controller.front.controllers;

import javax.servlet.http.HttpServletRequest;
import lombok.Data;
import org.springframework.context.annotation.Scope;
import org.springframework.context.annotation.ScopedProxyMode;
import org.springframework.stereotype.Component;

/**
 *
 * @author arbocdi
 */
@Scope(scopeName = "session", proxyMode = ScopedProxyMode.TARGET_CLASS)
@Data
@Component
public class RoomDataPaginator {

    private long pageNumber = 1;
    private long pageSize = 20;

    public void parseFromRequest(HttpServletRequest request) {
        pageNumber = Long.parseLong(request.getParameter("pageNumber"));
        pageSize = Long.parseLong(request.getParameter("pageSize"));
    }

    public long next() {
        return ++pageNumber;
    }

    public long previous() {
        --pageNumber;
        if (pageNumber < 0) {
            pageNumber = 0;
        }
        return pageNumber;
    }
}
