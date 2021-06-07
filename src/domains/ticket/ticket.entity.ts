import { BaseEntity } from "src/infrastructure/database/base.entity";
import { Column, Entity, OneToMany } from "typeorm";
import { Numbers } from "../numbers/number.entity";

@Entity('tickets')
export class Ticket extends BaseEntity {

    @Column({ type: 'float' })
    amount: number;

    @Column()
    name: string;

    @Column()
    lastName: string;

    @Column()
    mobilePhone: string;

    @OneToMany(() => Numbers, numbers => numbers.ticket)
    numbers: Numbers[];

}