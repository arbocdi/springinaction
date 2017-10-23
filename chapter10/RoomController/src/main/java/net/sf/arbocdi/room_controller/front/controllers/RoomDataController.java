package net.sf.arbocdi.room_controller.front.controllers;

import java.sql.Timestamp;
import java.text.ParseException;
import java.util.List;
import javax.servlet.http.HttpServletRequest;
import net.sf.arbocdi.room_controller.back.data_reader.HttpRoomDataReader;
import net.sf.arbocdi.room_controller.back.data_reader.RoomData;
import net.sf.arbocdi.room_controller.back.repo.RoomDataRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import static org.springframework.web.bind.annotation.RequestMethod.GET;
import static org.springframework.web.bind.annotation.RequestMethod.POST;

/**
 *
 * @author arbocdi
 */
@Controller
@RequestMapping(path = "/")
@Scope("session")
public class RoomDataController {

    @Autowired
    private HttpRoomDataReader dataReader;
    @Autowired
    private RoomDataRepo repo;
    @Autowired
    private RoomDataForm form;
    @Autowired
    private RoomDataPaginator paginator;

    @RequestMapping(method = GET)
    public String roomData(Model model) {
        this.process(model);
        return "roomData";
    }

    @RequestMapping(method = POST,path = "/getData")
    public String roomDataPost(Model model, HttpServletRequest request) throws ParseException {
        form.parseFromRequest(request);
        this.process(model);
        return "roomData";
    }
    @RequestMapping(method = POST,path = "/paginator")
    public String roomDataPaginator(Model model, HttpServletRequest request) throws ParseException {
        paginator.parseFromRequest(request);
        this.process(model);
        return "roomData";
    }

    public void process(Model model) {
        List<RoomData> rdList = this.repo.readData(new Timestamp(form.getStartDate().getTime()),
                new Timestamp(form.getEndDate().getTime()),Long.MAX_VALUE);
        model.addAttribute("currentData", dataReader.getRoomDataList());
        model.addAttribute("form", form);
        model.addAttribute("paginator", paginator);
        model.addAttribute("historyData", rdList);
    }

    

}
