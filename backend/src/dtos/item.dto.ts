import { IsNotEmpty } from "class-validator";

export class ItemDto {
    @IsNotEmpty()
    name: string;

    @IsNotEmpty()
    description: string;

    @IsNotEmpty()
    rating: number;

    @IsNotEmpty()
    price: number;
}