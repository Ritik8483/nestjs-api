import { databaseProviders } from "database/database.providers";

export const appProviders = [
  {
    provide: 'SEQUELIZE',
    useValue: databaseProviders,
  },
];
