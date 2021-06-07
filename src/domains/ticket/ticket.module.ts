import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { NumbersModule } from "../numbers/numbers.module";
import { TicketController } from "./ticket.controller";
import { TicketRepository } from "./ticket.repository";
import { TicketService } from "./ticket.service";

@Module({
    imports: [TypeOrmModule.forFeature([TicketRepository]), NumbersModule],
    controllers: [TicketController],
    providers: [TicketService],
    exports: [TicketService]
})
export class TicketModule{}