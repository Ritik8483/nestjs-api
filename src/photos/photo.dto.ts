//(CreatePhotoDto, UpdatePhotoDto): Defines the structure of request data.

export class CreatePhotoDto {
    name: string;
    description: string;
    filename: string;
    views: number;
    isPublished: boolean;
  }
  
  export class UpdatePhotoDto {
    name?: string;
    description?: string;
    filename?: string;
    views?: number;
    isPublished?: boolean;
  }
  