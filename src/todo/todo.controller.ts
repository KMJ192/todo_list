import { Controller, Get } from '@nestjs/common';
import { MysqlService } from 'src/mysql/mysql.service';
import { TodoService } from './todo.service';

@Controller('todo')
export class TodoController {
  constructor(
    private todoService: TodoService,
    private mysqlConnection: MysqlService,
  ) {}

  @Get('list')
  async list() {
    try {
      const [list] = await this.mysqlConnection.CP.query(
        'select * from TODO_LIST',
      );
      console.log(list);
    } catch (e) {
      console.log(e);
    }

    return 'list';
  }
}
