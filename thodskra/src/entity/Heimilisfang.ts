import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class Heimilisfang {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    postfang: string;

}