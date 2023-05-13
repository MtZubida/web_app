import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

@Entity()
export class CustomerEntity{
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column()
    name: string;
  
    @Column()
    email: string;
  
    @Column()
    phn: number;
    @Column()
    gender: string; 
    @Column()
    religion: string;
    @Column()
    address: string;

 

}