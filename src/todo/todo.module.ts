import { Module } from '@nestjs/common';
import { MysqlService } from 'src/mysql/mysql.service';
import { TodoController } from './todo.controller';
import { TodoService } from './todo.service';

@Module({
  controllers: [TodoController],
  providers: [TodoService, MysqlService],
})
export class TodoModule {}
