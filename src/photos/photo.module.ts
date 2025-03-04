import { Module } from '@nestjs/common';
import { PhotoController } from './photo.controller';
import { PhotoService } from './photo.service';
import { photoProviders } from './photo.providers';
import { DatabaseModule } from 'database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [PhotoController],
  providers: [...photoProviders, PhotoService],
})
export class PhotoModule {}
