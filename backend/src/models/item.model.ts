import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

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

    @Column()
    price: number;

    constructor (name: string, description: string, rating: number, price: number) {
        this.name = name;
        this.description = description;
        this.rating = rating;
        this.price = price;
    }
}