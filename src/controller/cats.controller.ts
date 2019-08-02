import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { CreateCatDto} from '../dto/create-cat.dto';

@Controller('cats')
export class CatsController {
  @Post()
  create(@Body() createCatDto: CreateCatDto) {
    console.log(createCatDto)
    return 'This action adds a new cat';
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `This action returns a #${id} cat`;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return `This action removes a #${id} cat`;
  }
}
