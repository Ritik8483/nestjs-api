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
import { Table, Column, Model, PrimaryKey, AutoIncrement, CreatedAt, UpdatedAt } from 'sequelize-typescript';
@Table({ timestamps: true })
export class Phone extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column
  // ({
  //   type: 'int',
  //   allowNull: false,
  //   autoIncrement: true,   //this property must match the db properties
  // })
  id: number;

  @Column
  phone_name: string;

  @Column('text')
  phone_description: string;

  @Column('int')
  price: number;

  @CreatedAt
  @Column
  created_at: Date; // ✅ Auto-generated timestamp

  @UpdatedAt
  @Column
  updated_at: Date;
}
