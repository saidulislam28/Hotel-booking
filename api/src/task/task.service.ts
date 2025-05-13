import { Injectable } from '@nestjs/common';

@Injectable()
export class TaskService {
  private task = [
    { id: 1, title: 'saidul', sub_title: 'sub_title' },
    { id: 2, title: 'saidul', sub_title: 'sub_title' },
  ];

  getAllTask() {
    return this.task;
  }
}
