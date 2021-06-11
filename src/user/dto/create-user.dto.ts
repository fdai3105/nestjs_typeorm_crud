import { IsNotEmpty } from 'class-validator';
import { Class } from '../../class/entities/class.entity';

export class CreateUserDto {
  @IsNotEmpty({ message: 'Cái đéo này không được empty' })
  name: string;

  @IsNotEmpty({ message: 'Empty cc' })
  class: Class;
}
