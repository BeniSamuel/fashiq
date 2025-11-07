import { Injectable, UnauthorizedException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { RegisterDTO } from "src/dtos/register.dto";
import { Users } from "src/models/user.model";
import { Repository } from "typeorm";

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(Users) private readonly userRepository: Repository<Users>
  ) {}

  // Finding a user by email
  findUserByEmail(email: string): Promise<Users> {
    const user = this.userRepository.findOne({ where: { email: email } });
    return user;
  }

  // Creating a user
  addUser(userInform: RegisterDTO): Promise<Users> {
    const user = this.userRepository.create(userInform);
    return this.userRepository.save(user);
  }

  // Getting All users
  findAllUsers(): Promise<Users[]> {
    return this.userRepository.find();
  }

  findCurrentUser (user: { id: number, email: string }): Promise<Users> {
    const currentUser = this.findUserByEmail(user.email);
    
    if (!currentUser) { throw new UnauthorizedException("User Doesn't Exist")};
    return currentUser;
  }
}
