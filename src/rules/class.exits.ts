import {
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';
import { ClassService } from '../class/class.service';
import {Class} from "../class/entities/class.entity";

@ValidatorConstraint({ name: 'ClassExits', async: true })
export class ClassExits implements ValidatorConstraintInterface {
  constructor(private readonly classService: ClassService) {}

  defaultMessage(): string {
    return 'Class doesnt exist';
  }

  async validate(value: any) {
    const c = Class.findOne(value);
    return c != null;
  }
}
