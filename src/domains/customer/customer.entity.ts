import { BaseEntity } from "src/infrastructure/database/base.entity";
import { Column, Entity, OneToMany } from "typeorm";
import { Ticket } from "../ticket/ticket.entity";

@Entity('customers')
export class Customer extends BaseEntity {

    @Column()
    name: string;

    @Column()
    lastName: string;

    @Column({ length: 15 })
    mobilePhone: string;

    @OneToMany(
        () => Ticket,
        ticket => ticket.customer,
        { cascade: true }
    )
    ticket: Promise<Ticket[]>;
}