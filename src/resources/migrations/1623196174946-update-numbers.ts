import {MigrationInterface, QueryRunner} from "typeorm";

export class updateNumbers1623196174946 implements MigrationInterface {
    name = 'updateNumbers1623196174946'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "numbers" DROP COLUMN "customer"`);
        await queryRunner.query(`ALTER TABLE "numbers" ADD "customer" jsonb`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "numbers" DROP COLUMN "customer"`);
        await queryRunner.query(`ALTER TABLE "numbers" ADD "customer" json`);
    }

}
