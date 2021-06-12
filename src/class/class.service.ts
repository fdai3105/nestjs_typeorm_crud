import { Injectable } from '@nestjs/common';
import { CreateClassDto } from './dto/create-class.dto';
import { UpdateClassDto } from './dto/update-class.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Class } from './entities/class.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ClassService {
  constructor(@InjectRepository(Class) private repository: Repository<Class>) {}

  create(createClassDto: CreateClassDto) {
    return this.repository.insert(createClassDto);
  }

  findAll() {
    return this.repository.find({ relations: ['users'] });
  }

  findOne(id: number) {
    return this.repository.findOne(id);
  }

  update(id: number, updateClassDto: UpdateClassDto) {
    return this.repository.update(id, updateClassDto);
  }

  remove(id: number) {
    return this.repository.delete(id);
  }
}
