import { Injectable } from '@nestjs/common';

@Injectable()
export class SumService {
  async countSumOfNumbers(firstNumber, secondNumber, response) {
    firstNumber = parseInt(firstNumber);
    secondNumber = parseInt(secondNumber);

    if (isNaN(firstNumber) || isNaN(secondNumber)) {
      response.json({ error: 'It is not a numbers!' })
    }
    else return firstNumber + secondNumber;
  }
}
