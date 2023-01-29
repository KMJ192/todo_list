import { Body, Controller, Delete, Get, Post, Put } from '@nestjs/common';
import {
  TodoListBody,
  TodoListDeleteBody,
  TodoListUpdateBody,
} from './models/todo.dto';
import { TodoService } from './todo.service';

@Controller('todo')
export class TodoController {
  constructor(private todoService: TodoService) {}

  @Get('list')
  async list() {
    return this.todoService.list();
  }

  @Put('add')
  async add(@Body() body: TodoListBody) {
    return this.todoService.add(body);
  }

  @Delete('delete')
  async delete(@Body() body: TodoListDeleteBody) {
    return this.todoService.delete(body);
  }

  @Post('update')
  async update(@Body() body: TodoListUpdateBody) {
    return this.todoService.update(body);
  }
}
