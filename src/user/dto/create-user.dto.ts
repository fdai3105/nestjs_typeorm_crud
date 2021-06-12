import { IsNotEmpty, Validate } from 'class-validator';
import { Class } from '../../class/entities/class.entity';
import { ClassExits } from '../../rules/class.exits';

export class CreateUserDto {
  @IsNotEmpty({ message: 'Cái đéo này không được empty' })
  name: string;

  @IsNotEmpty({ message: 'Empty cc' })
  @Validate(ClassExits)
  classId: Class;
}
