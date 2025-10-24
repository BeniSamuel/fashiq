import {
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Item } from "./item.model";

@Entity()
export class Cart {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: Date, default: Date.now() })
  created_at: Date;

  @OneToMany(() => Item, (item) => item.cart)
  items: Item[];
}
