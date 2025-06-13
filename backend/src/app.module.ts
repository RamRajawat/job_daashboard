import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Job } from './job/job.entity';
import { JobModule } from './job/job.module';

@Module({
  imports: [JobModule],
  controllers: [AppController],
  providers: [AppService],
})

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '1234',
      database: 'job_db',
      entities: [Job],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Job]),
  ],
})
export class AppModule {}
