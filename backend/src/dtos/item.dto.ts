import { IsNotEmpty } from "class-validator";
import { Color } from "src/enums/color.enum";
import { Size } from "src/enums/size.enum";

export class ItemDto {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  description: string;

  @IsNotEmpty()
  rating: number;

  @IsNotEmpty()
  size: Size;

  @IsNotEmpty()
  color: Color;

  @IsNotEmpty()
  price: number;
}
