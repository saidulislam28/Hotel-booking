import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { TaskDto } from './dto/task.dto';

@Injectable()
export class TaskService {
  private task = [
    { id: 1, title: 'saidul', sub_title: 'sub_title' },
    { id: 2, title: 'saidul', sub_title: 'sub_title' },
  ];

  constructor(private readonly prismaService: PrismaService){}

  getAllTask() {
    return this.prismaService.task.findMany();
  }

  getTask(id:number){
    return this.prismaService.task.findFirst({where: {id}})
  }

  async createTask(data : TaskDto){
    return await this.prismaService.task.create({data})
  }

  deleteTask(id:number){
    return this.prismaService.task.delete({where: {id}})
  }

  async updateTask(id:number, data : TaskDto){
    return this.prismaService.task.update({where: {id}, data})
  }


}
