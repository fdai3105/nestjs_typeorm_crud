import { Body, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UserService {
  constructor(@InjectRepository(User) private repository: Repository<User>) {}

  create(@Body() createUserDto: CreateUserDto): Promise<User> {
    return this.repository.save(createUserDto);
  }

  findAll(): Promise<User[]> {
    return this.repository.find({ relations: ['class'] });
  }

  findOne(id: number): Promise<User> {
    return this.repository.findOne(id);
  }

  update(id: number, updateUserDto: UpdateUserDto): Promise<UpdateResult> {
    return this.repository.update(id, updateUserDto);
  }

  remove(id: number): Promise<DeleteResult> {
    return this.repository.delete(id);
  }
}
