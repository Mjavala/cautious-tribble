import { Module } from '@nestjs/common';
import { UsersService } from './users.service'
import { TypeOrmModule } from '@nestjs/typeorm';
import { users } from './user.entity'

@Module({
    imports: [TypeOrmModule.forFeature([users])],
    providers: [UsersService],
    exports: [UsersService]
})
export class UsersModule {}
