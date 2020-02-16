
import {Entity, Column, PrimaryColumn, ManyToMany, ManyToOne, JoinColumn, BaseEntity} from "typeorm";
import {Einstaklingar} from "../entity/Einstaklingar"

//see https://typeorm.io/#/entities/column-types-for-postgres
@Entity()
export class Bornforeldrar extends BaseEntity {

    @PrimaryColumn()
    barn: string;

    @PrimaryColumn()
    foreldri: string

    @ManyToOne(() => Einstaklingar, einstaklingar => einstaklingar.foreldrar)
    @JoinColumn({name: "barn"})
    barnItem: Einstaklingar;

    @ManyToOne(() => Einstaklingar, einstaklingar => einstaklingar.born)
    @JoinColumn({name: "foreldri"})
    foreldriItem: Einstaklingar;
}
