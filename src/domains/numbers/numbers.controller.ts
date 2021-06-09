import { Body, Controller, Get, Post, Query } from "@nestjs/common"
import { ApiTags } from "@nestjs/swagger";
import { TicketDTO } from "./dto/create-ticket.dto";
import { Numbers } from "./number.entity";
import { NumbersService } from "./numbers.service";

@ApiTags('Numbers')
@Controller('numbers')
export class NumbersController {
    constructor(private readonly numbersService: NumbersService){}

    @Get()
    async find(
        @Query('status') status: string,
    ): Promise<Numbers[]> {
        return this.numbersService.find(status);
    }

    @Post()
    async create(
        @Body() createTicketDTO: TicketDTO,
    ): Promise<Numbers[]> {
        return this.numbersService.create(createTicketDTO);
    }

    @Get('search')
    async findBy(
        @Query('mobilePhone') mobilePhone: string,
    ): Promise<Numbers[]> {
        return this.numbersService.findBy(mobilePhone);
    }
}