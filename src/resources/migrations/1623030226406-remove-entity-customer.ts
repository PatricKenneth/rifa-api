import {MigrationInterface, QueryRunner} from "typeorm";

export class removeEntityCustomer1623030226406 implements MigrationInterface {
    name = 'removeEntityCustomer1623030226406'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "tickets" DROP CONSTRAINT "FK_42e4343476d9c4a46fb565a5c46"`);
        await queryRunner.query(`ALTER TABLE "tickets" DROP COLUMN "customer_id"`);
        await queryRunner.query(`ALTER TABLE "tickets" ADD "name" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "tickets" ADD "lastName" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "tickets" ADD "mobilePhone" integer NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "tickets" DROP COLUMN "mobilePhone"`);
        await queryRunner.query(`ALTER TABLE "tickets" DROP COLUMN "lastName"`);
        await queryRunner.query(`ALTER TABLE "tickets" DROP COLUMN "name"`);
        await queryRunner.query(`ALTER TABLE "tickets" ADD "customer_id" integer`);
        await queryRunner.query(`ALTER TABLE "tickets" ADD CONSTRAINT "FK_42e4343476d9c4a46fb565a5c46" FOREIGN KEY ("customer_id") REFERENCES "customers"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
