import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}

//handling the data access and adding the buisness logic
//when getHello service is called it will give data or perform function

//FIRST
// import { Injectable } from '@nestjs/common';
// import { Book, books } from './FakeDatabase';

// @Injectable()
// export class BooksService {
//   getAllBooks(): Book[] {
//     return books; //sql or mdb will come here
//   }

//   findSingleBookById(bookId: number): Book | undefined {
//     //receiving argument here
//     return books.find((book) => book.id === bookId); //sql or mdb will come here
//   }

//   createBook(bookPayload: any): Book | undefined {
//     books.push(bookPayload);
//     return bookPayload;
//     // return books.push(bookPayload);
//   }

// }
