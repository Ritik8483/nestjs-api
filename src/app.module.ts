// import { Module } from '@nestjs/common';
// // import { BooksController } from './app.controller';
// // import { BooksService } from './app.service';
// import { PhoneModule } from './phones/phone.module';
// import { PhonesController } from './phones/phone.controller';
// import { PhoneService } from './phones/phone.service';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';
// import { appProviders } from './app.providers';
// import { databaseProviders } from 'database/database.providers';

// @Module({
//   imports: [PhoneModule],
//   controllers: [AppController],
//   providers: [AppService],
//   // providers: [
//   //   AppService,
//   //   ...appProviders,
//   //   ...databaseProviders,
//   // ],
//   // controllers: [PhonesController],
//   // providers: [PhoneService],
// })
// export class AppModule {}

// //organise the code by grouping the related components together and then this module is passed to main.ts



//CRUD APIS
import { Module } from '@nestjs/common';
import { PhoneModule } from './phones/phone.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [PhoneModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}