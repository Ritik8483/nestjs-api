// import { Controller, Get } from '@nestjs/common';
// import { AppService } from './app.service';

// @Controller()
// export class AppController {
//   constructor(private readonly appService: AppService) {}

//   @Get()     //http request type
//   getHello(): string {
//     return this.appService.getHello();
//   }
// }

// //handle incoming HTTP requests
// //here this.appService.getHello(); (CONTROLLER) is calling the service

//FIRST
import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { BooksService } from './app.service';
import { Book } from './FakeDatabase';

@Controller('books') //routes name
export class BooksController {
  constructor(private readonly booksService: BooksService) {}
  @Get()
  getAllBooks(): Book[] {
    ///function Name
    return this.booksService.getAllBooks();
  }

  // @Get('/getById/:id')     //if we want to make /getById/1
  @Get('/:id')
  getSingleBook(@Param('id') id: string): Book | undefined {
    console.log('id', id);

    const bookId = +id;
    return this.booksService.findSingleBookById(bookId);
  }

  @Post()
  addBook(@Body() bookData: any): Book {
    console.log('book', bookData);
    return this.booksService.createBook(bookData);
  }

  @Post()
  addBook(@Body() bookData: any): Book {
    console.log('book', bookData);
    return this.booksService.createBook(bookData);
  }
}
