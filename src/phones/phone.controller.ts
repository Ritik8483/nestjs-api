//mysql
// import {
//   Body,
//   Controller,
//   Delete,
//   Get,
//   Param,
//   Patch,
//   Post,
//   Res,
// } from '@nestjs/common';
// import { PhoneService } from './phone.service';
// import { handleError, handleSuccess, phoneType } from './phones.dto';

// // https://docs.nestjs.com/controllers
// // https://docs.nestjs.com/techniques/database

// @Controller('phones') //routes name
// export class PhonesController {
//   constructor(private readonly phonesService: PhoneService) {} //PhoneService is importnat to import
//   // @Get()
//   // async getAllPhones(): Promise<any> {
//   //   //controller function to get all the phones list
//   //   return await this.phonesService.allPhonesList(); //using services function to findAll the phones
//   // }

//   // @Get('/:id')
//   // async getSinglePhone(@Param('id') id: number): Promise<any> {
//   //   return await this.phonesService.phoneDetail(id); //using services function to findAll the phones
//   // }

//   // @Post()
//   // async createNewPhone(@Body() phoneData: any) {
//   //   return await this.phonesService.addNewPhones(phoneData);
//   // }

//   // @Patch('/:id')
//   // async updatePhone(@Body() phoneData: any, @Param('id') id: number) {
//   //   console.log('phoneData ANd ID', id, phoneData);
//   //   return await this.phonesService.updatePatchPhone(id, phoneData);
//   // }

//   // @Delete('/:id')
//   // async deletePhone(@Param('id') id: number) {
//   //   return await this.phonesService.deletePhone(id);
//   // }

//   //ENHANCING API CALLS
//   // @Get()
//   // async getAllPhones(@Res() res: any): Promise<any> {
//   //   try {
//   //     const templates = await this.phonesService.allPhonesList();
//   //     console.log('templates', templates?.length);
//   //     if (templates?.length) {
//   //       return res.status(200).send({ success: true, data: templates });
//   //     } else {
//   //       return res
//   //         .status(404)
//   //         .send({ success: false, message: 'No phones found' });
//   //     }
//   //   } catch (error) {
//   //     return res
//   //       .status(400)
//   //       .send({ success: false, message: 'Error retrieving phones' });
//   //   }
//   // }

//   async getAllPhones(@Res() res: any): Promise<any> {
//     try {
//       const data = await this.phonesService.allPhonesList();
//       console.log('data', data?.length);
//       if (data?.length) {
//         return handleSuccess(res, 200, true, data);
//       } else {
//         return handleError(res, 404, 'No phones found');
//       }
//     } catch (error) {
//       return handleError(res, 404, 'Error retrieving phones');
//     }
//   }

//   @Get('/:id')
//   async getSinglePhone(@Res() res: any, @Param('id') id: number): Promise<any> {
//     try {
//       const data = await this.phonesService.phoneDetail(id);
//       if (Object.keys(data)?.length) {
//         return handleSuccess(res, 200, true, data);
//       } else {
//         return handleError(res, 404, 'No phones found');
//       }
//     } catch (error) {
//       return handleError(res, 404, 'Error retrieving phones');
//     }
//   }

//   @Post()
//   async createNewPhone(@Res() res: any, @Body() phoneData: any) {
//     try {
//       const data = await this.phonesService.addNewPhones(phoneData);
//       console.log('data', data);
//       if (Object.keys(data)?.length) {
//         return handleSuccess(res, 200, true, 'phone added successfully');
//       } else {
//         return handleError(res, 404, 'No phones found');
//       }
//     } catch (error) {
//       return handleError(res, 404, 'Error retrieving phones');
//     }
//   }

//   @Patch('/:id')
//   async updatePhone(
//     @Res() res: any,
//     @Body() phoneData: any,
//     @Param('id') id: number,
//   ) {
//     try {
//       const data = await this.phonesService.updatePatchPhone(id, phoneData);
//       console.log('data', data);
//       if (Object.keys(data)?.length) {
//         return handleSuccess(res, 200, true, 'phone updated successfully');
//       } else {
//         return handleError(res, 404, 'No phones found');
//       }
//     } catch (error) {
//       return handleError(res, 404, 'Error retrieving phones');
//     }
//   }

//   @Delete('/:id')
//   async deletePhone(@Res() res: any, @Param('id') id: number) {
//     try {
//       const data = await this.phonesService.deletePhone(id);
//       console.log('data', data);
//       if (Object.keys(data)?.length) {
//         return handleSuccess(res, 200, true, 'phone deleted successfully');
//       } else {
//         return handleError(res, 404, 'No phones found');
//       }
//     } catch (error) {
//       return handleError(res, 404, 'Error retrieving phones');
//     }
//   }
// }

//mssql
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Res,
} from '@nestjs/common';
import { PhoneService } from './phone.service';
import { handleError, handleSuccess, phoneType } from './phones.dto';

@Controller('phones') //routes name
export class PhonesController {
  constructor(private readonly phonesService: PhoneService) {}

  @Get()
  async getAllPhones(@Res() res: any): Promise<any> {
    try {
      const data = await this.phonesService.allPhonesList();
      console.log('data', data?.length);
      if (data?.length) {
        return handleSuccess(res, 200, true, data);
      } else {
        return handleError(res, 404, 'No phones found');
      }
    } catch (error) {
      return handleError(res, 404, 'Error retrieving phones');
    }
  }

  @Get('/:id')
  async getSinglePhone(@Res() res: any, @Param('id') id: number): Promise<any> {
    try {
      const data = await this.phonesService.phoneDetail(id);
      if (Object.keys(data)?.length) {
        return handleSuccess(res, 200, true, data);
      } else {
        return handleError(res, 404, 'No phones found');
      }
    } catch (error) {
      return handleError(res, 404, 'Error retrieving phones');
    }
  }

  @Post()
  async createNewPhone(@Res() res: any, @Body() phoneData: any) {
    try {
      const data = await this.phonesService.addNewPhones(phoneData);
      console.log('data', data);
      if (Object.keys(data)?.length) {
        return handleSuccess(res, 200, true, 'phone added successfully');
      } else {
        return handleError(res, 404, 'No phones found');
      }
    } catch (error) {
      return handleError(res, 404, 'Error retrieving phones');
    }
  }

  @Patch('/:id')
  async updatePhone(
    @Res() res: any,
    @Body() phoneData: any,
    @Param('id') id: number,
  ) {
    try {
      const data = await this.phonesService.updatePatchPhone(id, phoneData);
      console.log('data', data);
      if (Object.keys(data)?.length) {
        return handleSuccess(res, 200, true, 'phone updated successfully');
      } else {
        return handleError(res, 404, 'No phones found');
      }
    } catch (error) {
      return handleError(res, 404, 'Error retrieving phones');
    }
  }

  @Delete('/:id')
  async deletePhone(@Res() res: any, @Param('id') id: number) {
    try {
      const data = await this.phonesService.deletePhone(id);
      console.log('data', data);
      if (data === 1) {
        return handleSuccess(res, 200, true, 'phone deleted successfully');
      } else {
        return handleError(res, 404, 'No phones found');
      }
    } catch (error) {
      return handleError(res, 404, 'Error retrieving phones');
    }
  }
}
