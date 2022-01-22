"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.QuotesController = void 0;
var common_1 = require("@nestjs/common");
var swagger_1 = require("@nestjs/swagger");
var QuotesController = /** @class */ (function () {
    function QuotesController(quotesService) {
        this.quotesService = quotesService;
    }
    QuotesController.prototype.findAll = function () {
        return this.quotesService.findRandom();
    };
    __decorate([
        common_1.Get()
    ], QuotesController.prototype, "findAll");
    QuotesController = __decorate([
        swagger_1.ApiTags('Random Quote'),
        common_1.Controller('randomquote')
    ], QuotesController);
    return QuotesController;
}());
exports.QuotesController = QuotesController;