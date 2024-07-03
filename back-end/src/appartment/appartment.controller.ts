import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { AppartmentService } from './appartment.service';
import { AppartmentDto } from './dto';

@Controller('appartment')
export class AppartmentController {
  constructor(private appartnemtService: AppartmentService) {}

  @Get()
  getAll() {
    return this.appartnemtService.getAll();
  }

  @Get('/:id')
  getOne(@Param('id') id: string) {
    return this.appartnemtService.getOne(Number(id));
  }

  @Post()
  create(@Body() data: AppartmentDto) {
    return this.appartnemtService.create(data);
  }
}
