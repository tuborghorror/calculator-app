import { AppService } from './app.service';
import { Response } from 'express';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    countSum(response: Response, firstNumber: number, secondNumber: number): Promise<number>;
}
