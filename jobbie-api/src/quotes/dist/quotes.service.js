"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.QuotesService = void 0;
var rxjs_1 = require("rxjs");
var common_1 = require("@nestjs/common");
var QuotesService = /** @class */ (function () {
    function QuotesService(httpService) {
        this.httpService = httpService;
    }
    // Get a random quote
    QuotesService.prototype.findRandom = function () {
        return this.httpService
            .get('https://programming-quotes-api.herokuapp.com/Quotes/random')
            .pipe(rxjs_1.map(function (response) { return response.data; }), rxjs_1.catchError(function (err) { return rxjs_1.of([{ err: err }]); }));
    };
    QuotesService = __decorate([
        common_1.Injectable()
    ], QuotesService);
    return QuotesService;
}());
exports.QuotesService = QuotesService;