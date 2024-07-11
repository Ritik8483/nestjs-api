import { Module } from '@nestjs/common';
import { DatabaseModule } from 'database/database.module';
import { phoneProviders } from './phone.providers';
import { PhoneService } from './phone.service';
import { PhonesController } from './phone.controller';

@Module({
  imports:[DatabaseModule],
  controllers: [PhonesController],
  providers: [
    ...phoneProviders,
    PhoneService,
  ],
})
export class PhoneModule {}