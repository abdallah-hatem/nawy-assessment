import { Module } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';
import { PrismaModule } from './prisma/prisma.module';
import { AppartmentService } from './appartment/appartment.service';
import { AppartmentModule } from './appartment/appartment.module';

@Module({
  imports: [PrismaModule, AppartmentModule],
  providers: [PrismaService, AppartmentService],
  controllers: [],
})
export class AppModule {}
