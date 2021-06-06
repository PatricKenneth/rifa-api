import { BaseEntity } from "src/infrastructure/database/base.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne } from "typeorm";
import { Customer } from "../customer/customer.entity";
import { Numbers } from "../numbers/number.entity";

@Entity('tickets')
export class Ticket extends BaseEntity {

    @Column({ type: 'float' })
    amount: number;

    @ManyToOne(
        () => Customer,
        customer => customer.ticket,
    )
    @JoinColumn({ name: 'customer_id' })
    customer: Customer;

    @OneToOne(() => Numbers)
    @JoinColumn({ name: 'number_id' })
    num: Numbers;

}