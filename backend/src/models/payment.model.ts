import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Payment {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: Date, default: Date.now() })
  done_at: Date;

  @Column()
  paid_by: string;

  @Column()
  amount: number;

  @Column()
  card_number: number;

  constructor(
    paid_by: string,
    done_at: Date,
    amount: number,
    card_number: number
  ) {
    this.paid_by = paid_by;
    this.done_at = done_at;
    this.amount = amount;
    this.card_number = card_number;
  }
}
