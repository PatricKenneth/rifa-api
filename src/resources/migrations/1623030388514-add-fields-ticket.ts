import {MigrationInterface, QueryRunner} from "typeorm";

export class addFieldsTicket1623030388514 implements MigrationInterface {
    name = 'addFieldsTicket1623030388514'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "tickets" DROP COLUMN "lastName"`);
        await queryRunner.query(`ALTER TABLE "tickets" ADD "lastName" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "tickets" DROP COLUMN "mobilePhone"`);
        await queryRunner.query(`ALTER TABLE "tickets" ADD "mobilePhone" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "tickets" DROP COLUMN "mobilePhone"`);
        await queryRunner.query(`ALTER TABLE "tickets" ADD "mobilePhone" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "tickets" DROP COLUMN "lastName"`);
        await queryRunner.query(`ALTER TABLE "tickets" ADD "lastName" integer NOT NULL`);
    }

}
