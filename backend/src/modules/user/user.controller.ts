import { Controller, Get, Req, UseGuards } from "@nestjs/common";
import { UserService } from "./user.service";
import { AuthGuard } from "src/guards/auth.guard";

@Controller("api/fashiq/users")
export class UserController {
    constructor(private readonly userService: UserService) {}

  @Get('/all')
  async findAllUsers() {
    return await this.userService.findAllUsers();
  }

  @UseGuards(AuthGuard)
  @Get('/me')
  async findCurrentUser(@Req() req: any) {
    const user = req.user;
    return await this.userService.findCurrentUser(user);
  }
}
