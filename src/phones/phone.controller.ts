import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { PhoneService } from './phone.service';

@Controller('phones') //routes name
export class PhonesController {
  constructor(private readonly phonesService: PhoneService) {}      //PhoneService is importnat to import
  @Get()
  getAllPhones(): any {
    return this.phonesService.allPhonesList();
  }
}
