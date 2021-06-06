import {MigrationInterface, QueryRunner} from "typeorm";

export class addStatusNumbers1622763092998 implements MigrationInterface {
    name = 'addStatusNumbers1622763092998'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "numbers" ADD "status" character varying(15) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "numbers" DROP COLUMN "status"`);
    }

}
