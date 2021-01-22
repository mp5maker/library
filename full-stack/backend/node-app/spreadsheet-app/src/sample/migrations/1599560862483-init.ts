import { MigrationInterface, QueryRunner } from "typeorm";

export class init1599560862483 implements MigrationInterface {
  name = "init1599560862483";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "sample" ("id" SERIAL NOT NULL, "username" character varying NOT NULL, "firstName" character varying NOT NULL, "lastName" character varying NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "UQ_20bfb3c7755f0e1138a6331f56c" UNIQUE ("username"), CONSTRAINT "UQ_6b3d7db869f449d3bab8c89a0d6" UNIQUE ("email"), CONSTRAINT "PK_1e92238b098b5a4d13f6422cba7" PRIMARY KEY ("id"))`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "sample"`);
  }
}
