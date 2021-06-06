import {MigrationInterface, QueryRunner} from "typeorm";

export class addTicketCustomer1622755884791 implements MigrationInterface {
    name = 'addTicketCustomer1622755884791'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "customers" ("id" SERIAL NOT NULL, "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), CONSTRAINT "PK_133ec679a801fab5e070f73d3ea" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "tickets" ("id" SERIAL NOT NULL, "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "amount" double precision NOT NULL, "customer_id" integer, "number_id" integer, CONSTRAINT "REL_42e4343476d9c4a46fb565a5c4" UNIQUE ("customer_id"), CONSTRAINT "REL_a7d0e06cc3275fe963ab0ee305" UNIQUE ("number_id"), CONSTRAINT "PK_343bc942ae261cf7a1377f48fd0" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "tickets" ADD CONSTRAINT "FK_42e4343476d9c4a46fb565a5c46" FOREIGN KEY ("customer_id") REFERENCES "customers"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "tickets" ADD CONSTRAINT "FK_a7d0e06cc3275fe963ab0ee3054" FOREIGN KEY ("number_id") REFERENCES "numbers"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "tickets" DROP CONSTRAINT "FK_a7d0e06cc3275fe963ab0ee3054"`);
        await queryRunner.query(`ALTER TABLE "tickets" DROP CONSTRAINT "FK_42e4343476d9c4a46fb565a5c46"`);
        await queryRunner.query(`DROP TABLE "tickets"`);
        await queryRunner.query(`DROP TABLE "customers"`);
    }

}
