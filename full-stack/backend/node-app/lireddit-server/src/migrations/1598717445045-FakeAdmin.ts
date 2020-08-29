import {MigrationInterface, QueryRunner} from "typeorm";

export class FakeAdmin1598717445045 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        queryRunner.query(`
            insert into public.user ("username", "email", "password")
            values ('ben', 'ben@gmail.com', 'ben');
        `)
    }

    public async down(_: QueryRunner): Promise<void> {
    }
}
