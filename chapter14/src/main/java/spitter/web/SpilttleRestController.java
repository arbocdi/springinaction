package spitter.web;

import java.net.URI;
import java.util.List;
import lombok.Data;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.annotation.Secured;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import static org.springframework.web.bind.annotation.RequestMethod.GET;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.util.UriComponentsBuilder;
import spitter.data.Spittle;
import spitter.data.SpittleRepository;

/**
 *
 * @author arbocdi
 */
@RestController()
@RequestMapping(path = "/rest/spittles",
        consumes = "application/json",
        produces = "application/json"
)
public class SpilttleRestController {

    @Autowired
    private SpittleRepository spittleRepo;

    @RequestMapping(method = GET)
    @Secured(value = "ROLE_ADMIN")
    public List<Spittle> getSpittles(
            @RequestParam(name = "count", defaultValue = "10") int count) {
        return this.spittleRepo.findSpittles(count);
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.GET)
    public ResponseEntity<Spittle> spittleById(@PathVariable long id) {
        Spittle spittle = spittleRepo.findOne(id);
        HttpStatus status = spittle != null
                ? HttpStatus.OK : HttpStatus.NOT_FOUND;
        return new ResponseEntity<>(spittle, status);
    }

    @RequestMapping(value = "/{id}/err", method = RequestMethod.GET)
    public Spittle spittleByIdError(@PathVariable long id) {
        Spittle spittle = spittleRepo.findOne(id);
        if (spittle == null) {
            throw new SpittleException(new Error(HttpStatus.NOT_FOUND, "spittle not found"));
        }
        return spittle;
    }

    /**
     * Метод возвращает урл вновь созданного ресурса.
     *
     * @param spittle
     * @param ucb
     * @return
     */
    @RequestMapping(
            method = RequestMethod.POST
    )
    public ResponseEntity<Spittle> saveSpittle(
            @RequestBody Spittle spittle,
            UriComponentsBuilder ucb) {
        //todo поддержка добавления спиттла в репозиториии
        HttpHeaders headers = new HttpHeaders();
        URI locationUri
                = ucb.path("/rest/spittles/")//ucb уже содержит хост и порт
                .path(String.valueOf(spittle.getId()))
                .build()
                .toUri();
        headers.setLocation(locationUri);
        ResponseEntity<Spittle> responseEntity = new ResponseEntity<Spittle>(spittle, headers, HttpStatus.CREATED);
        return responseEntity;
    }

    @ExceptionHandler(SpittleException.class)
    public ResponseEntity exceptionHandler(SpittleException ex) {
        return new ResponseEntity(ex.getError(), ex.getError().getCode());
    }

    /**
     * Кастомное исключение
     */
    @Data
    public static class SpittleException extends RuntimeException {

        private Error error;

        public SpittleException(Error error) {
            this.error = error;
        }

    }

    /**
     * Класс для возвращения ошибок и их пояснений клиенту.
     */
    @Data
    public static class Error {

        private HttpStatus code;
        private String message;

        public Error(HttpStatus code, String message) {
            this.code = code;
            this.message = message;
        }

    }

}
