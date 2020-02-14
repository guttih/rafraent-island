import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class Heimilisfong {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    postfang: string;
}
