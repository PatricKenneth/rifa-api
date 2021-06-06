import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';
import { join } from 'path';
import { ConnectionOptions } from 'typeorm';

export function getConnectionOptions(): ConnectionOptions {
  return {
    type: 'postgres',
    host: process.env.DB_HOST,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DATABASE,
    synchronize: false,
    entities: [join(__dirname, '../../', '/domains/**/*.entity{.ts,.js}')],
    migrations: [join(__dirname, '../../', '/resources/migrations/*{.ts,.js}')],
    cli: {
      migrationsDir: '/src/resources/migrations',
    },
    ssl: {
      rejectUnauthorized: false
    },
  };
}

export class OrmConfigService implements TypeOrmOptionsFactory {
  private options: ConnectionOptions;

  constructor() {
    this.options = getConnectionOptions();
  }
  createTypeOrmOptions(
    connectionName?: string,
  ): TypeOrmModuleOptions | Promise<TypeOrmModuleOptions> {
    return {
      ...this.options,
      autoLoadEntities: true,
    };
  }

  public getConnectionsOptions(): ConnectionOptions {
    return this.options;
  }
}
