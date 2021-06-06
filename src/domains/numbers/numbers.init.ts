import { Injectable, OnModuleInit } from "@nestjs/common";
import { NumbersService } from "./numbers.service";

@Injectable()
export class NumbersModuleInit implements OnModuleInit {
    constructor(private readonly numbersService: NumbersService){}

    async onModuleInit(): Promise<void> {
        await this.numbersService.create();
    }
}