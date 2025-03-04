import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Photo } from './photo.entity';
import { CreatePhotoDto, UpdatePhotoDto } from './photo.dto';

@Injectable()
export class PhotoService {
  constructor(
    @Inject('PHOTO_REPOSITORY')
    private photoRepository: Repository<Photo>,
  ) {}

  async create(createPhotoDto: CreatePhotoDto): Promise<Photo> {
    const newPhoto = this.photoRepository.create(createPhotoDto);
    return this.photoRepository.save(newPhoto);
  }

  async findAll(): Promise<Photo[]> {
    return this.photoRepository.find();
  }

  async findOne(id: number): Promise<Photo | null> {
    return this.photoRepository.findOne({ where: { id } });
  }

  async update(id: number, updatePhotoDto: UpdatePhotoDto): Promise<Photo> {
    await this.photoRepository.update(id, updatePhotoDto);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.photoRepository.delete(id);
  }
}
