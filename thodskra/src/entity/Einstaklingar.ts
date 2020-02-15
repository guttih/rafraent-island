import {Entity, PrimaryGeneratedColumn, Column, PrimaryColumn, ManyToMany, JoinTable} from "typeorm";
//see https://typeorm.io/#/entities/column-types-for-postgres
@Entity()
export class Einstaklingar {

    @PrimaryColumn({length:12})
    kennitala: string;

    @Column()
    nafn: string;

    @Column({type:"timestamp", nullable:true})
    faedingardagur: Date;

    @Column({nullable:true, length:12})
    maki: string; 
/*
    @ManyToMany(type => Einstaklingar, item => item.born)
    @JoinTable()
    foreldrar: Einstaklingar[];
  
    @ManyToMany(type => Einstaklingar, item => item.foreldrar)
    born: Einstaklingar[];*/
}
