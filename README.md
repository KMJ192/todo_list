# MYSQL

- SCHEMA : TODO_LIST

- TODO_LIST Table

```
CREATE TABLE `TODO_LIST`.`TODO_LIST` (
  `id` INT NOT NULL,
  `subject` VARCHAR(55) NOT NULL,
  `content` VARCHAR(500) NULL,
  `create_date` VARCHAR(20) NULL,
  `update_date` VARCHAR(20) NULL,
  PRIMARY KEY (`id`));
```
