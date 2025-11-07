import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Payment {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  paid_by: string;

  @Column()
  amount: number;

  @Column()
  card_number: number;

  constructor(
    paid_by: string,
    amount: number,
    card_number: number
  ) {
    this.paid_by = paid_by;
    this.amount = amount;
    this.card_number = card_number;
  }
}
