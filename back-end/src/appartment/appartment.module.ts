import { Module } from '@nestjs/common';
import { AppartmentController } from './appartment.controller';
import { AppartmentService } from './appartment.service';

@Module({
  controllers: [AppartmentController],
  providers: [AppartmentService],
})
export class AppartmentModule {}
