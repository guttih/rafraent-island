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
    maki_kennitala: string; 

    @OneToOne(type => Einstaklingur, einst => einst.maki_kennitala, { cascade: true })
    maki: Einstaklingur;
    
    @ManyToMany(type => Einstaklingur, { cascade: true })
    @JoinTable({ name:"foreldri_barn", joinColumn:{name:"foreldri_kennitala"}, inverseJoinColumn:{name:"barn_kennitala"} })
    born: Einstaklingur[];

    @ManyToMany(type => Heimilisfang, { cascade: true })
    @JoinTable({ name:"einstaklingur_heimilisfang", joinColumn:{name:"kennitala"}, inverseJoinColumn:{name:"heimilisfang_id"} })
    logheimili: Heimilisfang[];

}