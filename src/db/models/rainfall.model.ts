import { BaseEntity, Column, Entity, PrimaryGeneratedColumn,} from "typeorm";

@Entity('rainfall')
export class Rainfall extends BaseEntity{

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    year: number

    @Column()
    month: string;

    @Column()
    rainfall: number;

}