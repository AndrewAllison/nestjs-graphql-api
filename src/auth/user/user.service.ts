import { Injectable } from '@nestjs/common';
import { User } from './models/user';

@Injectable()
export class UserService {
  async findAll(): Promise<User[]> {
    return [] as User[];
  }
}
