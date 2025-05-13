import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

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
}
