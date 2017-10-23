package net.sf.arbocdi.room_controller.back.generator;

import java.io.PrintWriter;
import java.io.StringWriter;
import org.springframework.context.annotation.Primary;
import org.springframework.context.annotation.Scope;
import org.springframework.context.annotation.ScopedProxyMode;
import org.springframework.stereotype.Component;

/**
 *
 * @author arbocdi
 */
@Component
@Primary
@Scope(proxyMode = ScopedProxyMode.INTERFACES, scopeName = "prototype")
public class HtmlTestDataGenerator implements TestDataGenerator {
    
    public static void main(String[] args) {
        System.out.println(new HtmlTestDataGenerator().generateTestData(11, 12, 21, 22));
    }

    @Override
    public String generateTestData(int Temp11, int Temp12, int Temp21, int Temp22) {
        StringWriter sw = new StringWriter();
        PrintWriter client = new PrintWriter(sw, true);

        //client.println("HTTP/1.1 200 OK");
        //client.println("Content-Type: text/html");
        //client.println();
        // print the current readings, in HTML format:
        client.print("Room #1: ");
        client.println("<br />");
        client.print("T(air) = ");
        client.print(Temp11);
        client.print(" degrees C,  ");
        client.print("T(floor) = ");
        client.print(Temp12);
        client.print(" degrees C");
        client.println("<br />");
        client.print("Room #2: ");
        client.println("<br />");
        client.print("T(air) = ");
        client.print(Temp21);
        client.print(" degrees C,  ");
        client.print("T(floor) = ");
        client.print(Temp22);
        client.print(" degrees C");
        client.println("<br />");
        
        return sw.toString();
    }
}
