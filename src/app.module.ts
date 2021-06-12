import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { ClassModule } from './class/class.module';
import { User } from './user/entities/user.entity';
import { Class } from './class/entities/class.entity';
import { ClassExits } from './rules/class.exits';
import { ClassService } from './class/class.service';

@Module({
  imports: [
    ClassModule,
    UserModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      database: 'nestjs_ss01',
      synchronize: true,
      autoLoadEntities: true,
      entities: [User, Class],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private connection: Connection) {}
}
