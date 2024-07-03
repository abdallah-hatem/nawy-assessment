import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class AppartmentDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  location: string;

  @IsNotEmpty()
  @IsString()
  description: string;

  @IsNumber()
  @IsOptional()
  price: number;
}
