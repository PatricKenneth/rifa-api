import {MigrationInterface, QueryRunner} from "typeorm";

export class addFieldChargeDateNumbers1623192629752 implements MigrationInterface {
    name = 'addFieldChargeDateNumbers1623192629752'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "numbers" ADD "chargeDate" TIMESTAMP`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "numbers" DROP COLUMN "chargeDate"`);
    }

}
