import {MigrationInterface, QueryRunner} from "typeorm";

export class addRelationsTicketAndNumbers1623029530231 implements MigrationInterface {
    name = 'addRelationsTicketAndNumbers1623029530231'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "tickets" DROP CONSTRAINT "FK_a7d0e06cc3275fe963ab0ee3054"`);
        await queryRunner.query(`ALTER TABLE "tickets" DROP CONSTRAINT "REL_a7d0e06cc3275fe963ab0ee305"`);
        await queryRunner.query(`ALTER TABLE "tickets" DROP COLUMN "number_id"`);
        await queryRunner.query(`ALTER TABLE "numbers" ADD "ticketId" integer`);
        await queryRunner.query(`ALTER TABLE "numbers" ADD CONSTRAINT "FK_c39b1a059a3b9177885e3d92a5f" FOREIGN KEY ("ticketId") REFERENCES "tickets"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "numbers" DROP CONSTRAINT "FK_c39b1a059a3b9177885e3d92a5f"`);
        await queryRunner.query(`ALTER TABLE "numbers" DROP COLUMN "ticketId"`);
        await queryRunner.query(`ALTER TABLE "tickets" ADD "number_id" integer`);
        await queryRunner.query(`ALTER TABLE "tickets" ADD CONSTRAINT "REL_a7d0e06cc3275fe963ab0ee305" UNIQUE ("number_id")`);
        await queryRunner.query(`ALTER TABLE "tickets" ADD CONSTRAINT "FK_a7d0e06cc3275fe963ab0ee3054" FOREIGN KEY ("number_id") REFERENCES "numbers"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
