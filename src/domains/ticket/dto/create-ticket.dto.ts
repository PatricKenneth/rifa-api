import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";
import { Numbers } from "src/domains/numbers/number.entity";

export class CreateTicketDTO {
    
    @IsNotEmpty()
    numbers: Array<Numbers>;

    @ApiProperty({ example: 'João Marcos' })
    @IsNotEmpty()
    name: string;

    @ApiProperty({ example: 'Ferreira Silva' })
    @IsNotEmpty()
    lastname: string;

    @ApiProperty({ example: '88988888888' })
    @IsNotEmpty()
    mobilePhone: string;
}