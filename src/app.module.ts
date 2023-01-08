import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodoModule } from './todo/todo.module';
import { MysqlService } from './mysql/mysql.service';

@Module({
  imports: [TodoModule],
  controllers: [AppController],
  providers: [AppService, MysqlService],
})
export class AppModule {}
