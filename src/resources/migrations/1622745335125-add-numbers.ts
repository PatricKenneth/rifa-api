import {MigrationInterface, QueryRunner} from "typeorm";

export class addNumbers1622745335125 implements MigrationInterface {
    name = 'addNumbers1622745335125'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "numbers" ("id" SERIAL NOT NULL, "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "num" integer NOT NULL, CONSTRAINT "PK_9d74c17d679ae3b50f5251ef762" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "numbers"`);
    }

}
