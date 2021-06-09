import { ApiProperty } from "@nestjs/swagger";
import { Numbers } from "../number.entity";

export class TicketDTO {
  @ApiProperty()
  name: string

  @ApiProperty()
  lastName: string

  @ApiProperty()
  mobilePhone: string

  @ApiProperty()
  numbers: Numbers[]

  @ApiProperty()
  status: string
}
