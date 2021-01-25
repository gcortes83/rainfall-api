import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class rainfalls1611542258320 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        return await queryRunner.createTable(new Table({
            name: "rainfall",
            columns: [
                {
                    name: "id",
                    type: "integer",
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: 'increment'
                },
                {
                    name: "year",
                    type: "integer",
                    isNullable: false,
                },
                {
                    name: "month",
                    type: "text",
                    isNullable: false
                },
                {
                    name: "rainfall",
                    type: "integer",
                    isNullable: false
                }
            ]
        }), true);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
