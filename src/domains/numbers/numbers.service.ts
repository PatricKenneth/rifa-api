import { Injectable } from "@nestjs/common";
import { getDate } from "src/utils/gen-date";
import { EntityManager } from "typeorm";
import { TicketDTO } from "./dto/create-ticket.dto";
import { Numbers } from "./number.entity";
import { NumbersStatus } from "./numbers-status.enum";
import { NumbersRepository } from "./numbers.repository";

@Injectable()
export class NumbersService {
    constructor(private readonly numbersRepository: NumbersRepository){}

    async createInit(): Promise<void> {
        if (!(await this.numbersRepository.count())) {
            const toSave: Numbers[] = [];
            for (let i = 0; i < 300; i++) {
                toSave.push({
                    num: i,
                    amount: 100,
                    status: NumbersStatus.AVAILABLE,
                })
            }
        
            await this.numbersRepository.save(toSave);
        }
    };

    async create(ticketDTO: TicketDTO): Promise<Numbers[]> {
        const { name, lastName, mobilePhone } = ticketDTO;
        ticketDTO.numbers = await this.updateStatus(ticketDTO.numbers, NumbersStatus[ticketDTO.status]);
        const toSave = [];
        ticketDTO.numbers.forEach( ( number, index ) => {
            ticketDTO.numbers[index] = {
                ...number,
                customer: {
                    lastName,
                    mobilePhone,
                    name,
                },
                chargeDate: getDate(),
            }
        });
        return this.numbersRepository.save(ticketDTO.numbers);
    }

    async find(status: string): Promise<Numbers[]> {
        return this.numbersRepository.findByStatus(NumbersStatus[status]);
    };

    async findBy(mobilePhone: string): Promise<Numbers[]> {
        return this.numbersRepository.findBy(mobilePhone);
    };

    async updateStatus(numbers: Numbers[], status: NumbersStatus) {
        numbers.forEach((element, index) => {
            element = {
                ...element,
                status,
            }
        numbers[index] = element;
        });
        return numbers;
    };
}