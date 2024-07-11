import { Phone } from 'src/phones/phone.entity';
import { DataSource } from 'typeorm';

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: 'Ri8483@tik',
        database: 'players',
        entities: [Phone],    // make sure the entity is included here
        synchronize: true,
      });

      return dataSource.initialize();
    },
  },
];
