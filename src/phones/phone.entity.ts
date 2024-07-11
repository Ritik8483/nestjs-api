import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'phones' })   //tables name
export class Phone {    //table column and types
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 500 })
  phone_name: string;

  @Column('text')
  phone_description: string;

  @Column('int')
  price: number;
}