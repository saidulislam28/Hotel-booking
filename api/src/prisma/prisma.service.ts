import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient {
  constructor(){
    super({
      datasources:{
        db: {
          url : "postgresql://postgres:123456@localhost:5432/basic-database?schema=public"
        }
      }
    })
  }
}
