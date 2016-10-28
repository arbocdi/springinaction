* Можно вручную сконфигурировать ContextLoaderListener
и DispatcherServlet в web.xml
* Multipart request - это HTTP-запрос который содержит
набор различных частей (как результат отправки формы
  например с рисунками):

```xml
POST /cgi-bin/qtest HTTP/1.1
Host: aram
Content-Type: multipart/form-data; boundary=----------287032381131322
Content-Length: 514

------------287032381131322
Content-Disposition: form-data; name="datafile1"; filename="r.gif"
Content-Type: image/gif

GIF87a.............,...........D..;
------------287032381131322
Content-Disposition: form-data; name="datafile2"; filename="g.gif"
Content-Type: image/gif

GIF87a.............,...........D..;
------------287032381131322
Content-Disposition: form-data; name="datafile3"; filename="b.gif"
Content-Type: image/gif

GIF87a.............,...........D..;
------------287032381131322--
```
* чтобы обрабатывать такие запросы нужно
 сконфигурировать  StandardServletMultipartResolver
 и DispatcherServlet, определить место, куда будут записываться загружаемые файлы и их макс. размеры:
 ```xml
 <multipart-config>
<location>/tmp/spittr/uploads</location>
<max-file-size>2097152</max-file-size>
<max-request-size>4194304</max-request-size>
</multipart-config>
 ```
