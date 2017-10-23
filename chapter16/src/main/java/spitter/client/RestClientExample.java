package spitter.client;

import org.springframework.http.HttpEntity;
import org.springframework.http.HttpMethod;
import org.springframework.http.RequestEntity;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.client.RestTemplate;
import spitter.data.Spittle;

/**
 *
 * @author arbocdi
 */
public class RestClientExample {

    public static final String URL = "http://127.0.0.1:9090/spitter/rest/spittles";
    
    public static void main(String[] args) {
        getSpittles();
        getSpittle();
        saveSpittle();
    }

    public static void getSpittles() {
        RestTemplate template = new RestTemplate();
        System.out.println(template.exchange(URL, HttpMethod.GET, HttpEntity.EMPTY, Spittle[].class));
    }

    public static void getSpittle() {
        RestTemplate template = new RestTemplate();
        System.out.println(template.exchange(URL + "/{id}", HttpMethod.GET, HttpEntity.EMPTY, Spittle.class, 1));
    }

    public static void saveSpittle() {
        Spittle spittle = new Spittle(100, "hello");
        RestTemplate template = new RestTemplate();
        MultiValueMap<String, String> headers
                = new LinkedMultiValueMap<String, String>();
        headers.add("Accept", "application/json");
        headers.add("Content-type", "application/json");
        HttpEntity re = new HttpEntity(spittle, headers);
        System.out.println(template.exchange(URL, HttpMethod.POST, re, Spittle.class));
    }
    
}
