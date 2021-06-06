import {MigrationInterface, QueryRunner} from "typeorm";

export class addFields1622762448771 implements MigrationInterface {
    name = 'addFields1622762448771'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "numbers" ADD "amount" double precision NOT NULL`);
        await queryRunner.query(`ALTER TABLE "customers" ADD "name" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "customers" ADD "lastName" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "customers" ADD "mobilePhone" character varying(15) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "tickets" DROP CONSTRAINT "FK_42e4343476d9c4a46fb565a5c46"`);
        await queryRunner.query(`ALTER TABLE "tickets" DROP CONSTRAINT "REL_42e4343476d9c4a46fb565a5c4"`);
        await queryRunner.query(`ALTER TABLE "tickets" ADD CONSTRAINT "FK_42e4343476d9c4a46fb565a5c46" FOREIGN KEY ("customer_id") REFERENCES "customers"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "tickets" DROP CONSTRAINT "FK_42e4343476d9c4a46fb565a5c46"`);
        await queryRunner.query(`ALTER TABLE "tickets" ADD CONSTRAINT "REL_42e4343476d9c4a46fb565a5c4" UNIQUE ("customer_id")`);
        await queryRunner.query(`ALTER TABLE "tickets" ADD CONSTRAINT "FK_42e4343476d9c4a46fb565a5c46" FOREIGN KEY ("customer_id") REFERENCES "customers"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "customers" DROP COLUMN "mobilePhone"`);
        await queryRunner.query(`ALTER TABLE "customers" DROP COLUMN "lastName"`);
        await queryRunner.query(`ALTER TABLE "customers" DROP COLUMN "name"`);
        await queryRunner.query(`ALTER TABLE "numbers" DROP COLUMN "amount"`);
    }

}
