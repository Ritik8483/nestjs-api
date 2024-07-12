//mysql
// import { Injectable, Inject, Body, Res } from '@nestjs/common';

// @Injectable()
// export class PhoneService {
//   constructor(
//     @Inject('PHONE_REPOSITORY')
//     private phoneRepository: any,
//   ) {}

//   async allPhonesList() {
//     return await this.phoneRepository.find();
//   }

//   async phoneDetail(phoneId: number) {
//     console.log('phoneId', phoneId);
//     return await this.phoneRepository.findOne({ where: { id: phoneId } });
//   }

//   async addNewPhones(payload: any) {
//     console.log('pay', payload);
//     const newPhone = this.phoneRepository.create(payload);
//     console.log('newPhone', newPhone);
//     return await this.phoneRepository.save(newPhone);
//   }

//   async updatePatchPhone(phoneId: number, phonePayload: any) {
//     console.log('phoneId', phoneId, phonePayload);
//     const updatePhone = await this.phoneRepository.update(
//       phoneId,
//       phonePayload,
//     );
//     return this.phoneRepository.findOneBy({ id: phoneId });
//   }

//   async deletePhone(phoneId: number) {
//     await this.phoneRepository.delete(phoneId);
//     return 'Deleted Successfully';
//   }
// }

//mssql
import { Injectable, Inject, Body, Res } from '@nestjs/common';

@Injectable()
export class PhoneService {
  constructor(
    @Inject('PHONE_REPOSITORY')
    private phoneRepository: any,
  ) {}

  async allPhonesList() {
    try {
      const resp = await this.phoneRepository.findAll();
      console.log('resp', resp);
      return resp;
    } catch (error) {
      console.log('error', error);
    }
  }

  async phoneDetail(phoneId: number) {
    console.log('phoneId', phoneId);
    try {
      const resp = await this.phoneRepository.findOne({
        where: { id: phoneId },
      });
      return resp;
    } catch (error) {
      console.log('error', error);
    }
  }

  async addNewPhones(payload: any) {
    try {
      console.log('pay', payload);
      const newPhone = await this.phoneRepository.create(payload);
      console.log('newPhone', newPhone);
      return newPhone;
    } catch (error) {
      console.log('error', error);
    }
  }

  async updatePatchPhone(phoneId: number, phonePayload: any) {
    console.log('phoneId', phoneId, phonePayload);
    const updatePhone = await this.phoneRepository.update(phonePayload, {
      where: { id: phoneId },
    });
    return updatePhone;
  }

  async deletePhone(phoneId: number) {
    try {
      const resp = await this.phoneRepository.destroy({
        where: { id: phoneId },
      });
      return resp;
    } catch (error) {
      console.log('error', error);
    }
  }
}
