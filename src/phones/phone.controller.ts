import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { PhoneService } from './phone.service';
import { phoneType } from './phones.dto';

// https://docs.nestjs.com/controllers
// https://docs.nestjs.com/techniques/database

@Controller('phones') //routes name
export class PhonesController {
  constructor(private readonly phonesService: PhoneService) {} //PhoneService is importnat to import
  @Get()
  async getAllPhones(): Promise<any> {
    //controller function to get all the phones list
    return await this.phonesService.allPhonesList(); //using services function to findAll the phones
  }

  @Get('/:id')
  async getSinglePhone(@Param('id') id: number): Promise<any> {
    return await this.phonesService.phoneDetail(id); //using services function to findAll the phones
  }

  @Post()
  async createNewPhone(@Body() phoneData: any) {
    return await this.phonesService.addNewPhones(phoneData);
  }

  @Patch('/:id')
  async updatePhone(@Body() phoneData: any, @Param('id') id: number) {
    console.log('phoneData ANd ID', id, phoneData);
    return await this.phonesService.updatePatchPhone(id, phoneData);
  }

  @Delete('/:id')
  async deletePhone(@Param('id') id: number) {
    return await this.phonesService.deletePhone(id);
  }
}
