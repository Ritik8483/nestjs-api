//SEQUELIZE CONNECTION
// import { databaseProviders } from "database/database.providers";

// export const appProviders = [
//   {
//     provide: 'SEQUELIZE',
//     useValue: databaseProviders,
//   },
// ];



//TYPE-ORM CONNECTION
import { databaseProviders } from 'database/database.providers';

export const appProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = await databaseProviders[0].useFactory();
      return dataSource;
    },
  },
];
