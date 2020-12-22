"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SumController = void 0;
const common_1 = require("@nestjs/common");
const sum_service_1 = require("./sum.service");
let SumController = class SumController {
    constructor(sumService) {
        this.sumService = sumService;
    }
    async countSum(response, firstNumber, secondNumber) {
        const sum = await this.sumService.countSumOfNumbers(firstNumber, secondNumber, response);
        return response.json({ Sum: sum });
    }
};
__decorate([
    common_1.Post('/count_sum'),
    __param(0, common_1.Res()), __param(1, common_1.Query('firstNumber')), __param(2, common_1.Query('secondNumber')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Number, Number]),
    __metadata("design:returntype", Promise)
], SumController.prototype, "countSum", null);
SumController = __decorate([
    common_1.Controller(),
    __metadata("design:paramtypes", [sum_service_1.SumService])
], SumController);
exports.SumController = SumController;
//# sourceMappingURL=sum.controller.js.map