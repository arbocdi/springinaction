package net.sf.arbocdi.room_controller.front.controllers;

import net.sf.arbocdi.room_controller.back.generator.TestDataGenerator;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import static org.springframework.web.bind.annotation.RequestMethod.GET;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author arbocdi
 */
@RestController
@RequestMapping(produces = "text/html", path = "/rdGenerator")
public class RDGeneratorController {

    @Autowired
    private TestDataGenerator testGenerator;

    @RequestMapping(method = GET)
    public String generateRoomData(
            @RequestParam(name = "t11", defaultValue = "11") int t11,
            @RequestParam(name = "t12", defaultValue = "12") int t12,
            @RequestParam(name = "t21", defaultValue = "21") int t21,
            @RequestParam(name = "t22", defaultValue = "22") int t22) {
        return this.testGenerator.generateTestData(t11, t12, t21, t22);
    }
}
