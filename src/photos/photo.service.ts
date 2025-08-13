// PhotoService: Handles all database logic.

// import { Injectable, Inject } from '@nestjs/common';
// import { Repository } from 'typeorm';
// import { Photo } from './photo.entity';
// import { CreatePhotoDto, UpdatePhotoDto } from './photo.dto';

// @Injectable()
// export class PhotoService {
//   constructor(
//     @Inject('PHOTO_REPOSITORY')   //Injects the PHOTO_REPOSITORY (TypeORM Repository for Photo).
//     private photoRepository: Repository<Photo>,
//   ) {}

//   async createPhoto(createPhotoDto: CreatePhotoDto): Promise<Photo> {
//     const newPhoto = this.photoRepository.create(createPhotoDto);
//     return this.photoRepository.save(newPhoto);
//   }

//   async findAll(): Promise<Photo[]> {
//     return this.photoRepository.find();
//   }

//   async findOne(id: number): Promise<Photo | null> {
//     return this.photoRepository.findOne({ where: { id } });
//   }

//   async update(id: number, updatePhotoDto: UpdatePhotoDto): Promise<Photo> {
//     await this.photoRepository.update(id, updatePhotoDto);
//     return this.findOne(id);
//   }

//   async remove(id: number): Promise<void> {
//     await this.photoRepository.delete(id);
//   }
// }

// PhotoService: Handles all database logic.
//takes token PHOTO_REPOSITORY and  Photo as a database entity (i.e., a table) and 
//STORED PROCEDURE
import { Injectable, Inject } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { Photo } from './photo.entity';
import { CreatePhotoDto, UpdatePhotoDto } from './photo.dto';

@Injectable()
export class PhotoService {
  constructor(
    // @Inject('DATA_SOURCE') private readonly dataSource: DataSource,
    @Inject('PHOTO_REPOSITORY')   //Injects the PHOTO_REPOSITORY (TypeORM Repository for Photo).
    private photoRepository: Repository<Photo>,     //Repository interacts with the database (via TypeORM)
  ) {}        //Response goes back the same path → Service → Controller → HTTP Response.

  async createPhoto(createPhotoDto: CreatePhotoDto): Promise<Photo> {
    const { name, description, filename, views, isPublished } = createPhotoDto;
    const addPhotoQuery = `
    EXEC sp_photos
     @Mode = 3, 
        @Name = '${name}', 
        @Description = '${description}', 
        @Filename = '${filename}', 
        @Views = ${views}, 
        @isPublished = ${isPublished ? 1 : 0}
               `;
    // const response = this.dataSource.query(addPhotoQuery);
    const response = this.photoRepository.query(addPhotoQuery);
    console.log('response', response);
    return response;
  }

  async findAll(): Promise<Photo[]> {
    // return this.dataSource.query('EXEC sp_photos @Mode = 1');
    return this.photoRepository.query('EXEC sp_photos @Mode = 1');
  }

  async findOne(id: number): Promise<Photo | null> {
    // return this.dataSource.query(`EXEC sp_photos @Mode = 2, @ID = ${id}`);
    return this.photoRepository.query(`EXEC sp_photos @Mode = 2, @ID = ${id}`);
  }

  async update(id: number, updatePhotoDto: UpdatePhotoDto): Promise<Photo> {
    const { name, description, filename, views, isPublished } = updatePhotoDto;
    const updateQuery = `EXEC sp_photos 
    @Mode = 4, 
    @ID = ${id}, 
    @Name = '${name}', 
    @Description = '${description}', 
    @Filename = '${filename}', 
    @Views = ${views}, 
    @isPublished = ${isPublished ? 1 : 0}`;
    return await this.photoRepository.query(updateQuery);
    // return this.dataSource.query(updateQuery);
  }

  async remove(id: number): Promise<void> {
    // return this.dataSource.query(`EXEC sp_photos @Mode = 5, @ID = ${id}`);
    await this.photoRepository.query(`EXEC sp_photos @Mode = 5, @ID = ${id}`);
  }
}
