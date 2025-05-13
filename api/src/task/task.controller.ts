import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { TaskService } from './task.service';
import { TaskDto } from './dto/task.dto';

@Controller('task')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Get()
  getAllTask() {
    return this.taskService.getAllTask();
  }

  @Get(':id')
  getTask(@Param('id', ParseIntPipe) id: number) {
    return this.taskService.getTask(id);
  }

  @Post()
  createTask(@Body() data: TaskDto) {
    return this.taskService.createTask(data);
  }

  @Delete(':id')
  deleteTask(@Param('id', ParseIntPipe) id: number) {
    return this.taskService.deleteTask(id);
  }

  @Patch(':id')
  updateTask(@Param('id', ParseIntPipe) id: number, @Body() data: TaskDto) {
    return this.taskService.updateTask(id, data);
  }
}
