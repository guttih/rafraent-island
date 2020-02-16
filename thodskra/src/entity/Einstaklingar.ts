import {Entity, PrimaryGeneratedColumn, Column, PrimaryColumn, JoinTable, OneToMany, BaseEntity} from "typeorm";
//import { Bornforeldrar } from "./Bornforeldrar";
import { Z_FILTERED } from "zlib";
import { EinstaklingarController } from "../controllers/EinstaklingarController";
//see https://typeorm.io/#/entities/column-types-for-postgres
@Entity()
export class Einstaklingar extends BaseEntity{

    @PrimaryColumn({length:12})
    kennitala: string;

    @Column()
    nafn: string;

    @Column({type:"timestamp", nullable:true})
    faedingardagur: Date;

    @Column({nullable:true, length:12})
    maki: string; 

    @OneToMany(() => Einstaklingar, e => e.foreldrar)
    born: Einstaklingar[];

    @OneToMany(() => Einstaklingar, e => e.born)
    foreldrar: Einstaklingar[];
    
    /*@OneToMany(() => Bornforeldrar, bf => bf.barnItem)
    foreldrar: Einstaklingar[];
  
    @OneToMany(() => Bornforeldrar, bf => bf.foreldriItem)
    born: Einstaklingar[];*/

    

    
}
