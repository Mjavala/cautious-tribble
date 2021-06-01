import { Controller, Get, Body } from '@nestjs/common';
import {CreateSnipeDto} from './dto/create-snipe.dto'

@Controller('snipe')
export class SnipeController {
  @Get()
  turnOn(@Body() createSnipeDto: CreateSnipeDto): string {
    return 'This action returns all cats';
  }
}