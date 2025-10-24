import { Role } from "src/enums/role.enum";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Users {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column({ enum: Role, default: Role.BUYER })
  role: Role;

  @Column()
  phone: number;

  @Column()
  address: string;

  @Column({ type: Date, default: Date.now() })
  joined_at: Date;

  constructor(
    name: string,
    email: string,
    password: string,
    phone: number,
    address: string,
    joined_at: Date
  ) {
    this.name = name;
    this.email = email;
    this.password = password;
    this.phone = phone;
    this.address = address;
    this.joined_at = joined_at;
  }
}
