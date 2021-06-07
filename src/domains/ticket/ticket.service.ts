import { Injectable } from "@nestjs/common";
import { EntityManager } from "typeorm";
import { Numbers } from "../numbers/number.entity";
import { NumbersStatus } from "../numbers/numbers-status.enum";
import { NumbersService } from "../numbers/numbers.service";
import { CreateTicketDTO } from "./dto/create-ticket.dto";
import { Ticket } from "./ticket.entity";
import { TicketRepository } from "./ticket.repository";

@Injectable()
export class TicketService {
    private transactionManager: EntityManager;
    constructor(
        private readonly ticketRespostiry: TicketRepository,
        private readonly numbersService: NumbersService,
    ){}

    async create(ticketDTO: CreateTicketDTO, manager: EntityManager): Promise<Ticket> {
        this.transactionManager = manager;

        ticketDTO.numbers = await this.numbersService.updateStatus(ticketDTO.numbers, NumbersStatus.PAID);
        await this.numbersService.update(ticketDTO.numbers, this.transactionManager);

        return this.transactionManager.save(Ticket, {
            numbers: ticketDTO.numbers,
            amount: this.getTotalValueTicket(ticketDTO.numbers),
            name: ticketDTO.name,
            lastName: ticketDTO.lastname,
            mobilePhone: ticketDTO.mobilePhone,
        });
    }

    async find(): Promise<Ticket[]> {
        return this.ticketRespostiry.find();
    }

    private getTotalValueTicket(numbers: Numbers[]) {
        return numbers.map(number => parseFloat(number.amount.toString()))
                      .reduce((total, amount) => total + amount, 0);
    }
}