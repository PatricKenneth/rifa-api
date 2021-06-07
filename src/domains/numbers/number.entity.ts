import { Column, Entity, ManyToOne } from "typeorm";
import { BaseEntity } from '../../infrastructure/database/base.entity'
import { Ticket } from "../ticket/ticket.entity";
import { NumbersStatus } from "./numbers-status.enum";

@Entity('numbers')
export class Numbers extends BaseEntity {
    @Column()
    num: number;

    @Column({ type: 'float' })
    amount: number;

    @Column({ enum: NumbersStatus, length: 15 })
    status: NumbersStatus;

    @ManyToOne(() => Ticket, ticket => ticket.numbers)
    ticket?: Ticket;
}