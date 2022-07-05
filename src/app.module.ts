import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TasksModule } from './tasks/tasks.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    TasksModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'ec2-34-242-84-130.eu-west-1.compute.amazonaws.com',
      port: 5432,
      username: 'rjqiltjnbuvurz',
      password:
        '261611d86898bae8224a9507f3b7d6a874c8d75c41a326778d94b02543812b35',
      database: 'd362m4kd4uenme',
      autoLoadEntities: true,
      synchronize: true,
      ssl: {
        rejectUnauthorized: false,
      },
    }),
    AuthModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
