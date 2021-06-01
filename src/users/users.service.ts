
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { users } from './user.entity';

// This should be a real class/interface representing a user entity
//export type User = any;

@Injectable()
export class UsersService {
  constructor (
    @InjectRepository(users)
    private usersRepository: Repository<users>,
  ) {}
  /*
  private readonly users = [
    {
      userId: 1,
      username: 'john',
      password: 'changeme',
    },
    {
      userId: 2,
      username: 'maria',
      password: 'guess',
    },
  ];

  async findOne(username: string): Promise<User | undefined> {
    return this.users.find(user => user.username === username);
  }
  */
  findOne(id: string): Promise<users> {
    return this.usersRepository.findOne({
      where: {
        username: id
      }
    });
  }
}
