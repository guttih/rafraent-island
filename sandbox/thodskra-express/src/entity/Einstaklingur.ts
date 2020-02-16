import {Entity, Column, ManyToMany, JoinTable, OneToOne, PrimaryColumn, AfterLoad, BaseEntity} from "typeorm";
import { Heimilisfang } from "./Heimilisfang";

@Entity()
export class Einstaklingur extends BaseEntity {

    @PrimaryColumn({length:12})
    kennitala: string;

    @Column()
    nafn: string;

    @Column({type:"timestamp", nullable:true})
    faedingardagur: Date;

    @Column({nullable:true, length:12})
    maki: string; 

    @OneToOne(type => Einstaklingur, einst => einst.maki, { cascade: true })
    makiItem: Einstaklingur;
    
    @ManyToMany(type => Einstaklingur, { cascade: true })
    @JoinTable()
    born: Einstaklingur[];

    @ManyToMany(type => Heimilisfang, { cascade: true })
    @JoinTable()
    logheimili: Heimilisfang[];

}