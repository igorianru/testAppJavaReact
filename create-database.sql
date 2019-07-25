CREATE DATABASE  IF NOT EXISTS `test_app`;
USE `test_app`;

DROP TABLE IF EXISTS `tasks`;

-- auto-generated definition
create table tasks
(
    id             int auto_increment
        primary key,
    number         int         null,
    name           varchar(64) not null,
    `from`         varchar(64) not null,
    `to`           varchar(64) null,
    status         varchar(32) null,
    directories_id int         not null,
    create_at      datetime    null,
    update_at      datetime    null,
    deleted_at     datetime    null
);



LOCK TABLES `tasks` WRITE;

INSERT INTO test_app.tasks (id, number, name, `from`, `to`, status, directories_id, create_at, update_at, deleted_at) VALUES (1, 1, 'Tom', 'Tom', 'Unknown', 'penning', 1, '2019-07-23 20:23:45', null, null);
INSERT INTO test_app.tasks (id, number, name, `from`, `to`, status, directories_id, create_at, update_at, deleted_at) VALUES (2, 2, 'Barry', 'Barry', 'Unknown', 'penning', 2, '2019-07-23 20:23:45', null, null);
INSERT INTO test_app.tasks (id, number, name, `from`, `to`, status, directories_id, create_at, update_at, deleted_at) VALUES (3, 3, 'Homer', 'Homer', 'Unknown', 'penning', 2, '2019-07-23 20:23:45', null, null);
INSERT INTO test_app.tasks (id, number, name, `from`, `to`, status, directories_id, create_at, update_at, deleted_at) VALUES (4, 4, 'Tom000', 'Tom', 'Unknown', 'penning', 1, '2019-07-23 20:23:45', null, null);
INSERT INTO test_app.tasks (id, number, name, `from`, `to`, status, directories_id, create_at, update_at, deleted_at) VALUES (5, 5, 'Barry000', 'Barry', 'Unknown', 'penning', 2, '2019-07-23 20:23:45', null, null);
INSERT INTO test_app.tasks (id, number, name, `from`, `to`, status, directories_id, create_at, update_at, deleted_at) VALUES (6, 6, 'Homer00', 'Homer', 'Unknown', 'penning', 2, '2019-07-23 20:23:45', null, null);

UNLOCK TABLES;
