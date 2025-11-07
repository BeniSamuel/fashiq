import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDTO } from 'src/dtos/register.dto';
import { LoginDTO } from 'src/dtos/login.dto';

@Controller('api/fashiq/auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signup')
  async registerUser(@Body() registerData: RegisterDTO) {
    const user = await this.authService.registerUser(registerData);
    return user ? { success: true, data: user } : {success: false, data: null} ;
  }

  @Post('login')
  async loginUser(@Body() loginData: LoginDTO) {
    return  await this.authService.loginUser(loginData);
  }
}
