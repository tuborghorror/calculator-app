import { SumService } from './sum.service';
import { Response } from 'express';
export declare class SumController {
    private readonly sumService;
    constructor(sumService: SumService);
    countSum(response: Response, firstNumber: number, secondNumber: number): Promise<Response<any>>;
}
