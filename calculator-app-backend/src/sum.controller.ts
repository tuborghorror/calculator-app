import { Controller, Post, Query, Res, } from '@nestjs/common';
import { SumService } from './sum.service';
import { Response } from 'express';

@Controller()
export class SumController {
  constructor(private readonly sumService: SumService) {}

  @Post('/count_sum')
  async countSum(@Res() response: Response, @Query('firstNumber') firstNumber: number, @Query('secondNumber') secondNumber: number) {
    const sum = await this.sumService.countSumOfNumbers(firstNumber, secondNumber, response);
    return response.json({ Sum: sum });
  }
}
