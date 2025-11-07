import { IsEmail, IsNotEmpty } from "class-validator";

export class RegisterDTO {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  password: string;
}
