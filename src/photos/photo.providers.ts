//Registers the Photo entity with TypeORM

import { DataSource } from 'typeorm';
import { Photo } from './photo.entity';

export const photoProviders = [
  {
    provide: 'PHOTO_REPOSITORY',      //A unique token used by NestJS to identify the dependency
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Photo),    //A function that returns the actual object to be injected
    inject: ['DATA_SOURCE'],    //Dependencies that the factory needs — here, the 'DATA_SOURCE' (which is configured in DatabaseModule
  },
];
