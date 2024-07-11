import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Phone } from './phone.entity';

@Injectable()
export class PhoneService {
  constructor(
    @Inject('PHONE_REPOSITORY')
    private phoneRepository: any,
  ) {}

  allPhonesList() {
    // return 'Hello World!';
    return this.phoneRepository.find();
  }
}
