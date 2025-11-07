import { Color } from "src/enums/color.enum";
import { Size } from "src/enums/size.enum";
import {
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Favorite } from "./favorite.model";
import { Cart } from "./cart.model";

@Entity()
export class Item {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  rating: number;

  @Column({ enum: Size, default: Size.MD })
  size: Size;

  @Column({ enum: Color, default: Color.BLACK })
  color: Color;

  @Column()
  price: number;

  @ManyToOne(() => Favorite, (favorite) => favorite.items)
  favorite: Favorite;

  @ManyToOne(() => Cart, (cart) => cart.items)
  cart: Cart;

  constructor(
    name: string,
    description: string,
    rating: number,
    price: number,
    size: number,
    color: Color
  ) {
    this.name = name;
    this.description = description;
    this.rating = rating;
    this.price = price;
    this.size = size;
    this.color = color;
  }
}
