import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CustomersModule } from './domains/customer/customer.module';
import { NumbersModule } from './domains/numbers/numbers.module';
import { TicketModule } from './domains/ticket/ticket.module';
import { DatabaseModule } from './infrastructure/database/database.module';

@Module({
  imports: [
    DatabaseModule,
    NumbersModule,
    TicketModule,
    CustomersModule,
    ConfigModule.forRoot({ isGlobal: true }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}