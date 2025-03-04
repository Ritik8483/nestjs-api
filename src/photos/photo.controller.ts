import { 
    Controller, Get, Query, Post, Body, Put, Param, Delete 
  } from '@nestjs/common';
  import { PhotoService } from './photo.service';
  import { CreatePhotoDto, UpdatePhotoDto } from './photo.dto';
  
  @Controller('photo')
  export class PhotoController {
    constructor(private readonly photoService: PhotoService) {}
  
    @Post()
    async create(@Body() createPhotoDto: CreatePhotoDto) {
      return this.photoService.create(createPhotoDto);
    }
  
    @Get()
    async findAll() {
      return this.photoService.findAll();
    }
  
    @Get(':id')
    async findOne(@Param('id') id: number) {
      return this.photoService.findOne(id);
    }
  
    @Put(':id')
    async update(@Param('id') id: number, @Body() updatePhotoDto: UpdatePhotoDto) {
      return this.photoService.update(id, updatePhotoDto);
    }
  
    @Delete(':id')
    async remove(@Param('id') id: number) {
      return this.photoService.remove(id);
    }
  }
  