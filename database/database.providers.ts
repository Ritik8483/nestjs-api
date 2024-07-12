// import { Phone } from 'src/phones/phone.entity';
// import { DataSource } from 'typeorm';

// export const databaseProviders = [
//   {
//     provide: 'DATA_SOURCE',
//     useFactory: async () => {
//       const dataSource = new DataSource({
//         type: 'mysql',
//         host: 'localhost',
//         port: 3306,
//         username: 'root',
//         password: 'Ri8483@tik',
//         database: 'players',
//         entities: [Phone],    // make sure the entity is included here
//         synchronize: true,
//       });

//       return dataSource.initialize();
//     },
//   },
// ];

//mssql
// import { Sequelize } from 'sequelize-typescript';

// export const databaseProviders = [
//   {
//     provide: 'SEQUELIZE',
//     useFactory: async () => {
//       const sequelize = new Sequelize(
//         "4i_concept_api",
//         "sa",
//         'Web@Ligo$$$78',
//         {
//           host: '20.235.76.232',
//           port: 1433,
//           dialect: "mssql",
//           pool: {
//             max: 10,
//             min: 0,
//             idle: 25000,
//             acquire: 25000,
//           },
//           dialectOptions: {
//             options: {
//               encrypt: false,
//               trustServerCertificate: true,
//               requestTimeout: 300000,
//             },
//           },
//           logging: false,
//           define: {
//             timestamps: false,
//             underscored: true,
//           },
//         },
//       );
//     },
//   },
// ];

//mssql
// Connection String = Server=localhost\SQLEXPRESS;Database=master;Trusted_Connection=True;
import { Sequelize } from 'sequelize-typescript';
import { Phone } from 'src/phones/phone.entity';

export const databaseProviders = [
  {
    provide: 'SEQUELIZE', 
    useFactory: async () => {
      const sequelize:any = new Sequelize('players', 'sa', 'Web@Ligo$$$78', {
        host: '20.235.76.232',
        port: 1433,
        dialect: 'mssql',
        database: 'players',
        pool: {
          max: 10,
          min: 0,
          idle: 25000,
          acquire: 25000,
        },
        dialectOptions: {
          authentication: {
            options: {
              userName: 'sa', // Leave blank or set appropriately if needed
              password: 'Web@Ligo$$$78', // Leave blank or set appropriately if needed
            },
          },
          options: {
            encrypt: false,
            trustServerCertificate: true,
            requestTimeout: 300000,
            integratedSecurity: false, // Integrated Security (Windows Authentication)
          },
        },
        logging: false,
        define: {
          timestamps: false,
          underscored: true,
        },
      });

      sequelize.addModels([Phone]);
      // await sequelize.sync(); // Ensure the connection is established
      
      console.log('Connection has been established successfully.');
      return sequelize;
    },
  },
];
