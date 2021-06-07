import { Injectable } from "@nestjs/common";
import { EntityManager } from "typeorm";
import { Numbers } from "./number.entity";
import { NumbersStatus } from "./numbers-status.enum";
import { NumbersRepository } from "./numbers.repository";

@Injectable()
export class NumbersService {
    constructor(private readonly numbersRepository: NumbersRepository){}

    async createInit(): Promise<void> {
        if (!(await this.numbersRepository.count())) {
            const toSave: Numbers[] = [];
            for (let i = 1; i <= 300; i++) {
                toSave.push({
                    num: i,
                    amount: 100,
                    status: NumbersStatus.AVAILABLE,
                })
            }
        
            await this.numbersRepository.save(toSave);
        }
    };

    async update(numbers: Numbers[], manager: EntityManager): Promise<Numbers[]> {
        return manager.save(Numbers, numbers);
    };

    async find(status: string): Promise<Numbers[]> {
        return this.numbersRepository.findByStatus(NumbersStatus[status]);
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