//Module groups related parts of the application — controllers, providers, services, and other modules.
//It ensures that all things related to photos (controller, service, repository) 
//are grouped together and easily imported into the main AppModule.

import { Module } from '@nestjs/common';
import { PhotoController } from './photo.controller';
import { PhotoService } from './photo.service';
import { photoProviders } from './photo.providers';
import { DatabaseModule } from 'database/database.module';

// Registers all dependencies for the Photo feature
@Module({
  imports: [DatabaseModule],
  controllers: [PhotoController],   //Classes that handle HTTP requests
  providers: [...photoProviders, PhotoService],   //factory-based providers for this module
})
export class PhotoModule {}
