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
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var HeroesService = (function () {
    function HeroesService(http) {
        this.http = http;
        this.heroesUrl = "http://localhost:9393/";
    }
    HeroesService.prototype.getHeroes = function () {
        return this.http.get(this.heroesUrl)
            .map(function (res) { return res.json(); });
        // .toPromise()
        // .then(response => response.json().data)
        // .catch(this.logError)
    };
    HeroesService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], HeroesService);
    return HeroesService;
}());
exports.HeroesService = HeroesService;
//# sourceMappingURL=heroes.service.js.map