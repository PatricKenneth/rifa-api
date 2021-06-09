import { Column, Entity, ManyToOne } from "typeorm";
import { BaseEntity } from '../../infrastructure/database/base.entity'
import Customer from "./interfaces/customer.interface";
import { NumbersStatus } from "./numbers-status.enum";

@Entity('numbers')
export class Numbers extends BaseEntity {
    @Column()
    num: number;

    @Column({ type: 'float' })
    amount: number;

    @Column({ enum: NumbersStatus })
    status: NumbersStatus;

    @Column({ nullable: true, type: 'jsonb' })
    customer?: Customer;

    @Column({ nullable: true })
    chargeDate?: Date;
}