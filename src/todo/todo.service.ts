import { Injectable } from '@nestjs/common';
import { MysqlService } from 'src/mysql/mysql.service';
import { TodoListBody } from './models/todo.dto';

@Injectable()
export class TodoService {
  constructor(private mySQLConnection: MysqlService) {}

  async list() {
    try {
      const [list] = await this.mySQLConnection.CP.query(
        'select * from TODO_LIST',
      );
      console.log(list);
    } catch (e) {
      console.log(e);
    }
  }

  async add(body: TodoListBody) {
    try {
      // const id
      const sql = `
        INSERT INTO TODO_LIST.TODO_LIST 
        VALUES (2, ${body.subject}, ${body.content}, ${body.date}, '2022-01-09', '2022-01-09')
      `;
      const result = await this.mySQLConnection.CP.query(sql);
      console.log(result);
    } catch (e) {
      console.log(e);
    }
  }
}
