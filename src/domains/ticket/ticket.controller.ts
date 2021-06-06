import { Body, Controller, Get, Post } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { CreateTicketDTO } from "./dto/create-ticket.dto";
import { Ticket } from "./ticket.entity";
import { TicketService } from "./ticket.service";

@ApiTags('Tickets')
@Controller('tickets')
export class TicketController {
    constructor(
        private readonly ticketService: TicketService,
    ){}

    @Get()
    async find(): Promise<Ticket[]> {
        return this.ticketService.find();
    }

    @Post()
    async create(
        @Body() createTicketDTO: CreateTicketDTO,
    ): Promise<Ticket> {
        return this.ticketService.create(createTicketDTO);
    }
}