//mysql
// import { DataSource } from 'typeorm';
// import { Phone } from './phone.entity';

// export const phoneProviders = [
//   {
//     provide: 'PHONE_REPOSITORY',
//     useFactory: (dataSource: DataSource) => dataSource.getRepository(Phone),
//     inject: ['DATA_SOURCE'],
//   },
// ];


//mssql
import { Phone } from './phone.entity';

export const phoneProviders = [
  {
    provide: 'PHONE_REPOSITORY',
    useValue: Phone,
  },
];