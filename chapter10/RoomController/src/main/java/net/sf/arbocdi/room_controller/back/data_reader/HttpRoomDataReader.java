package net.sf.arbocdi.room_controller.back.data_reader;

import java.util.LinkedList;
import net.sf.arbocdi.room_controller.back.parser.RoomDataParser;
import java.util.List;
import lombok.Data;
import lombok.extern.slf4j.Slf4j;
import net.sf.arbocdi.room_controller.back.repo.RoomDataRepo;
import net.sf.selibs.utils.misc.HttpClientWrapper;
import org.apache.http.client.config.RequestConfig;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.entity.ContentType;
import org.apache.http.entity.StringEntity;
import org.springframework.beans.factory.InitializingBean;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Scope;
import org.springframework.core.task.TaskExecutor;
import org.springframework.scheduling.TaskScheduler;
import org.springframework.scheduling.concurrent.ThreadPoolTaskExecutor;
import org.springframework.stereotype.Component;

/**
 *
 * @author arbocdi
 */
@Component
@Scope(scopeName = "singleton")
@Data
@Slf4j
public class HttpRoomDataReader implements Runnable, InitializingBean {

    @Autowired
    private TaskScheduler taskScheduler;
    @Autowired
    private HttpClientWrapper httpClient;
    @Value("${http_data_reader.url}")
    private String url;
    @Value("${http_data_reader.delay}")
    private long delay;
    @Autowired
    private RoomDataParser parser;
    @Autowired
    private RoomDataRepo repo;
    
    private volatile List<RoomData> roomDataList = new LinkedList();

    @Override
    public void run() {
        try {
            HttpGet get = new HttpGet(url);

            RequestConfig defaultRequestConfig = RequestConfig.custom()
                    .setSocketTimeout(5000)
                    .build();
            get.setConfig(defaultRequestConfig);

            String response = httpClient.makeStringRequest(get);

            List<RoomData> rdList = parser.parse(response);
            
            roomDataList = rdList;
            repo.insertData(rdList);
            
        } catch (Exception ex) {
            log.warn("Cant execute job", ex);
        }
    }

    @Override
    public void afterPropertiesSet() throws Exception {
        taskScheduler.scheduleWithFixedDelay(this, delay * 1000);
    }

}
