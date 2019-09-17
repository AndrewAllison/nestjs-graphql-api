import { Query, Resolver } from '@nestjs/graphql';
import { User } from './models/user';
import { UserService } from './user.service';

@Resolver('User')
export class UserResolver {
  constructor(private userService: UserService) {
  }

  @Query(returns => [User])
  recipes(): Promise<User[]> {
    return this.userService.findAll();
  }
}
