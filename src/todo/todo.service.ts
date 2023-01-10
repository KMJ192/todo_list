import { Injectable } from '@nestjs/common';
import { MysqlService } from 'src/mysql/mysql.service';
import {
  TodoListBody,
  TodoListDeleteBody,
  TodoListDTO,
  TodoListUpdateBody,
} from './models/todo.dto';

@Injectable()
export class TodoService {
  constructor(private mySQLConnection: MysqlService) {}

  async list() {
    try {
      const [list] = await this.mySQLConnection.CP.query(
        'select * from TODO_LIST',
      );
      return list;
    } catch (e) {
      return e;
    }
  }

  async add(body: TodoListBody) {
    try {
      const [list] = await this.mySQLConnection.CP.query(
        'select * from TODO_LIST',
      );
      let id = 0;
      if (Array.isArray(list)) {
        if (list.length > 0) {
          id = (list[list.length - 1] as TodoListDTO).id + 1;
        }
      } else {
        return {
          error: 'error',
        };
      }

      const sql = `INSERT INTO TODO_LIST.TODO_LIST VALUES (${id}, "${body.subject}", "${body.content}", "${body.date}", "${body.date}", "${body.date}")`;
      const [result] = await this.mySQLConnection.CP.query(sql);
      return id;
    } catch (e) {
      console.log(e);
      return e;
    }
  }

  async delete(body: TodoListDeleteBody) {
    const query = `DELETE FROM TODO_LIST.TODO_LIST WHERE id=${body.id};`;
    const [result] = await this.mySQLConnection.CP.query(query);
    console.log(result);
  }

  async update(body: TodoListUpdateBody) {
    const query = `UPDATE TODO_LIST.TODO_LIST SET subject='${body.subject}', content='${body.content}', date='${body.date}', update_date='${body.date}' WHERE id=${body.id}`;
    const [result] = await this.mySQLConnection.CP.query(query);
    console.log(result);
  }
}
