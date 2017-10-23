package net.sf.arbocdi.room_controller.front.controllers;

import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;
import java.util.GregorianCalendar;
import javax.servlet.http.HttpServletRequest;
import lombok.Data;
import org.springframework.beans.factory.InitializingBean;
import org.springframework.context.annotation.Scope;
import org.springframework.context.annotation.ScopedProxyMode;
import org.springframework.stereotype.Component;

/**
 *
 * @author arbocdi
 */
@Data
@Scope(scopeName = "session",proxyMode = ScopedProxyMode.TARGET_CLASS)
@Component
public class RoomDataForm implements InitializingBean {

    private Date startDate;
    private Date endDate;

    
    
    public void parseFromRequest(HttpServletRequest request) throws ParseException {
        this.setStartDateStr(request.getParameter("startDate"));
        this.setEndDateStr(request.getParameter("endDate"));
    }

    private DateFormat df = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");

    public String getStartDateStr() {
        return df.format(startDate);
    }

    public String getEndDateStr() {
        return df.format(endDate);
    }

    public void setStartDateStr(String date) throws ParseException {
        this.startDate = df.parse(date);
    }

    public void setEndDateStr(String date) throws ParseException {
        this.endDate = df.parse(date);
    }
    
    public Calendar getDaySart() {
        Calendar cal = new GregorianCalendar();
        cal.set(Calendar.SECOND, 0);
        cal.set(Calendar.MINUTE, 0);
        cal.set(Calendar.HOUR_OF_DAY, 0);
        return cal;
    }

    public Calendar getDayEnd() {
        Calendar cal = new GregorianCalendar();
        cal.set(Calendar.SECOND, 59);
        cal.set(Calendar.MINUTE, 59);
        cal.set(Calendar.HOUR_OF_DAY, 23);
        return cal;
    }

    @Override
    public void afterPropertiesSet() throws Exception {
        this.endDate = this.getDayEnd().getTime();
        this.startDate = this.getDaySart().getTime();
    }

}
