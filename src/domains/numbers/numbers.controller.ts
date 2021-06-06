import { Controller, Get, Query } from "@nestjs/common"
import { ApiTags } from "@nestjs/swagger";
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
}