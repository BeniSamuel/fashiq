import { Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Item } from "./item.model";

@Entity()
export class Favorite {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToMany(() => Item, (item) => item.favorite)
  items: Item[];
}
