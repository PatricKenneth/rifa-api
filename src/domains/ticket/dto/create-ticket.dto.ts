import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

export class CreateTicketDTO {
    @ApiProperty({ example: 7 })
    @IsNotEmpty()
    numbersId: number;
}