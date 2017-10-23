package net.sf.arbocdi.room_controller.back;

import freemarker.core.ParseException;
import freemarker.template.Configuration;
import freemarker.template.MalformedTemplateNameException;
import freemarker.template.TemplateException;
import freemarker.template.TemplateExceptionHandler;
import java.io.IOException;
import java.io.StringWriter;
import java.util.HashMap;
import java.util.Map;
import lombok.Data;

/**
 * Created by arbocdi on 11/16/16.
 */
public class TemplateUtils {

    public static final Configuration freemarkerConfiguration;

    /**
     * конфигурация effectively immutable -> потоково безопасна, если не
     * вызывать сеттеры шаблоны кешируются внутри Configuration загружаю
     * шаблон,он потоково безопасен, если не вызывать сеттер-методы
     */
    static {
        freemarkerConfiguration = new Configuration();
        freemarkerConfiguration.setClassForTemplateLoading(TemplateUtils.class, "/sql");
        freemarkerConfiguration.setDefaultEncoding("UTF-8");
        freemarkerConfiguration.setTemplateExceptionHandler(TemplateExceptionHandler.RETHROW_HANDLER);
    }

    public static String getString(String templateName, Map<String, Object> model) throws MalformedTemplateNameException, ParseException, IOException, TemplateException {
        StringWriter sw = new StringWriter();
        freemarkerConfiguration.getTemplate(templateName).process(model, sw);
        return sw.toString();
    }

    public static String getString(String templateName, Entry... data) {
        try {
            Map<String, Object> map = new HashMap();
            for (Entry e : data) {
                if (e != null) {
                    map.put(e.getName(), e.getValue());
                }
            }
            return getString(templateName, map);
        } catch (Exception ex) {
            throw new RuntimeException(ex);
        }
    }

    @Data
    public static class Entry {

        private String name;
        private String value;

        public Entry(String name, String value) {
            this.name = name;
            this.value = value;
        }

        public Entry(String name, Object value) {
            this.name = name;
            this.value = value==null?null:value.toString();
        }

    }
}
