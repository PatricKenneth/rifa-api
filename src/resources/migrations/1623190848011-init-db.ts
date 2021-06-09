import {MigrationInterface, QueryRunner} from "typeorm";

export class initDb1623190848011 implements MigrationInterface {
    name = 'initDb1623190848011'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "numbers" ALTER COLUMN "customer" DROP NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "numbers" ALTER COLUMN "customer" SET NOT NULL`);
    }

}
