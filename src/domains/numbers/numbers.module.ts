import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { NumbersController } from "./numbers.controller";
import { NumbersModuleInit } from "./numbers.init";
import { NumbersRepository } from "./numbers.repository";
import { NumbersService } from "./numbers.service";


@Module({
    imports: [TypeOrmModule.forFeature([NumbersRepository])],
    controllers: [NumbersController],
    providers: [NumbersService, NumbersModuleInit],
    exports: [NumbersService]
})
export class NumbersModule {}