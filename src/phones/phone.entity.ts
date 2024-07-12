// mysql
// import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

// @Entity({ name: 'phones' })   //tables name
// export class Phone {    //table column and types
//   @PrimaryGeneratedColumn()
//   id: number;

//   @Column({ length: 500 })
//   phone_name: string;

//   @Column('text')
//   phone_description: string;

//   @Column('int')
//   price: number;
// }

//mssql
import { Table, Column, Model, PrimaryKey } from 'sequelize-typescript';
@Table
export class Phone extends Model {
  @PrimaryKey
  @Column({
    type: 'int',
    allowNull: false,
    // autoIncrement: true,   //this property must match the db properties
  })
  id: number;

  @Column
  phone_name: string;

  @Column('text')
  phone_description: string;

  @Column('int')
  price: number;
}
