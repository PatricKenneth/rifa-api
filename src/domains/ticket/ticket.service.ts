import { Injectable } from "@nestjs/common";
import { CreateTicketDTO } from "./dto/create-ticket.dto";
import { Ticket } from "./ticket.entity";
import { TicketRepository } from "./ticket.repository";

@Injectable()
export class TicketService {
    constructor(
        private readonly ticketRespostiry: TicketRepository,
    ){}

    async create(ticketDTO: CreateTicketDTO): Promise<Ticket> {
        return this.ticketRespostiry.save({
            num: { id: ticketDTO.numbersId },
        })
    }

    async find(): Promise<Ticket[]> {
        return this.ticketRespostiry.find();
    }
}