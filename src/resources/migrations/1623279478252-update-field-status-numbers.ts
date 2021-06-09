import {MigrationInterface, QueryRunner} from "typeorm";

export class updateFieldStatusNumbers1623279478252 implements MigrationInterface {
    name = 'updateFieldStatusNumbers1623279478252'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "numbers" DROP COLUMN "status"`);
        await queryRunner.query(`ALTER TABLE "numbers" ADD "status" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "numbers" DROP COLUMN "status"`);
        await queryRunner.query(`ALTER TABLE "numbers" ADD "status" character varying(15) NOT NULL`);
    }

}
