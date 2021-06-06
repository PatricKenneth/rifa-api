import { Injectable } from "@nestjs/common";
import { Numbers } from "./number.entity";
import { NumbersStatus } from "./numbers-status.enum";
import { NumbersRepository } from "./numbers.repository";

@Injectable()
export class NumbersService {
    constructor(private readonly numbersRepository: NumbersRepository){}

    async create(): Promise<void> {
        if (!(await this.numbersRepository.count())) {
            const toSave: Numbers[] = [];
            for (let i = 1; i <= 300; i++) {
                toSave.push({
                    num: i,
                    amount: 150,
                    status: NumbersStatus.AVAILABLE,
                })
            }
        
            await this.numbersRepository.save(toSave);
        }
    }

    async find(status: string): Promise<Numbers[]> {
        return this.numbersRepository.findByStatus(NumbersStatus[status]);
    }
}