// Defines the database table structure using TypeORM like column name and type

import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
//Marks Photo as a database entity (i.e., a table).
export class Photo {
  // Defines id as the primary key with auto-increment.
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 500 })
  name: string;

  @Column('text')
  description: string;

  @Column()
  filename: string;

  @Column('int')
  views: number;

  @Column()
  isPublished: boolean;
}
