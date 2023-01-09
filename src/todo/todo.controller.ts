import { Body, Controller, Get, Put } from '@nestjs/common';
import { TodoListBody } from './models/todo.dto';
import { TodoService } from './todo.service';

@Controller('todo')
export class TodoController {
  constructor(private todoService: TodoService) {}

  @Get('list')
  async list() {
    this.todoService.list();
    return 'list';
  }

  @Put('add')
  async add(@Body() body: TodoListBody) {
    this.todoService.add(body);
  }
}
