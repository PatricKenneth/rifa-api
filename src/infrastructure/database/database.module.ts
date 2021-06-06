import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrmConfigService } from './orm-config.service';

@Module({
  imports: [TypeOrmModule.forRootAsync({ useClass: OrmConfigService })],
})
export class DatabaseModule {}
