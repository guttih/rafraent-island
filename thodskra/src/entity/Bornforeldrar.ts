import {Entity, Column, PrimaryColumn, OneToMany, TreeParent} from "typeorm";
import {Einstaklingar} from "../entity/Einstaklingar"

//see https://typeorm.io/#/entities/column-types-for-postgres
@Entity()
export class Bornforeldrar {

    @PrimaryColumn({nullable:false, length:12})
    barn: string;

    @OneToMany(type => Einstaklingar, parent => parent.kennitala)
    parent: Einstaklingar;
}
