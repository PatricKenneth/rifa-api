import { Column, Entity } from "typeorm";
import { BaseEntity } from '../../infrastructure/database/base.entity'
import { NumbersStatus } from "./numbers-status.enum";

@Entity('numbers')
export class Numbers extends BaseEntity {
    @Column()
    num: number;

    @Column({ type: 'float' })
    amount: number;

    @Column({ enum: NumbersStatus, length: 15 })
    status: NumbersStatus;
}