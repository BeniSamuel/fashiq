import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { RegisterDTO } from "src/dtos/register.dto";
import { Users } from 'src/models/user.model';
import { UserService } from 'src/modules/user/user.service';
import * as bcrypt from 'bcrypt';
import { LoginDTO } from 'src/dtos/login.dto';

/*
  Creator: Beni Samuel
  Description: Created AuthService
*/

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  async registerUser(userData: RegisterDTO): Promise<Users> {
    const user = await this.userService.findUserByEmail(userData.email);
    if (user) {
      throw new UnauthorizedException({ message: 'User Already Exist' });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(userData.password, salt);
    userData.password = hashedPassword;

    return await this.userService.addUser(userData);
  }

  async loginUser(userData: LoginDTO) {
    const user = await this.userService.findUserByEmail(userData.email);
    if (!user) {
      throw new UnauthorizedException({ message: "User Doesn't exit", success: false });
    }

    const isPasswordMatch = await bcrypt.compare(
      userData.password,
      user.password,
    );
    if (!isPasswordMatch) {
      throw new UnauthorizedException({ message: 'Incorrect Password', success: false });
    }

    const payload = { id: user.id, email: user.email };
    return {
      message: 'User Logged In',
      accessToken: await this.jwtService.signAsync(payload),
      success: true
    };
  }
}
