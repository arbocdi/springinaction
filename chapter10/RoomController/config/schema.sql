CREATE TABLE rooms
(
id bigint NOT NULL PRIMARY KEY,
description text
);
CREATE TABLE room_data
(
id bigserial NOT NULL PRIMARY KEY,
room_id bigint NOT NULL REFERENCES rooms(id) ON UPDATE CASCADE ON DELETE CASCADE,
date_time timestamp without time zone NOT NULL DEFAULT now(),
air_temp integer NOT NULL,
floor_temp integer NOT NULL
);