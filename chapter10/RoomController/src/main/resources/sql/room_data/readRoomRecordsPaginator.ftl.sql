[#ftl]
SELECT *
FROM room_data
WHERE  true
[#if startTime??]
AND date_time>='${startTime}'
[/#if]
[#if endTime??]
AND date_time<='${endTime}'
[/#if]
ORDER BY date_time DESC
[#if offset??]
OFFSET ${offset}
[/#if]
[#if limit??]
LIMIT ${limit}
[/#if]
