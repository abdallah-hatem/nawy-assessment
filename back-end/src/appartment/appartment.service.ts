import { HttpException, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { AppartmentDto } from './dto';

@Injectable()
export class AppartmentService {
  constructor(private prisma: PrismaService) {}

  async getAll() {
    try {
      const appartments = await this.prisma.appartment.findMany({});

      if (!appartments) throw new HttpException('Error in database', 500);

      return { result: appartments };
    } catch (error) {
      if (error) {
        const { message, statusCode } = error;
        throw new HttpException(message, statusCode);
      }
      return error;
    }
  }

  async getOne(id: number) {
    try {
      const appartment = await this.prisma.appartment.findUnique({
        where: { id },
      });

      if (!appartment) throw new NotFoundException('Appartment not found');

      return { result: appartment };
    } catch (error) {
      if (error) {
        const { message, statusCode } = error;
        throw new HttpException(message, statusCode);
      }
      return error;
    }
  }

  async create(body: AppartmentDto) {
    try {
      const appartment = await this.prisma.appartment.create({
        data: body,
      });

      if (!appartment) throw new HttpException('Error in database', 500);

      return { result: appartment };
    } catch (error) {
      if (error) {
        const { message, statusCode } = error;
        throw new HttpException(message, statusCode);
      }
      return error;
    }
  }
}
