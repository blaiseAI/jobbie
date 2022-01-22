"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.QuotesModule = void 0;
var axios_1 = require("@nestjs/axios");
var common_1 = require("@nestjs/common");
var quotes_service_1 = require("./quotes.service");
var quotes_controller_1 = require("./quotes.controller");
var QuotesModule = /** @class */ (function () {
    function QuotesModule() {
    }
    QuotesModule = __decorate([
        common_1.Module({
            imports: [axios_1.HttpModule],
            controllers: [quotes_controller_1.QuotesController],
            providers: [quotes_service_1.QuotesService]
        })
    ], QuotesModule);
    return QuotesModule;
}());
exports.QuotesModule = QuotesModule;
