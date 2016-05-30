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
require('./rxjs-operators');
var heroes_service_1 = require('./heroes.service');
var AppComponent = (function () {
    function AppComponent(heroesService) {
        this.heroesService = heroesService;
    }
    AppComponent.prototype.ngOnInit = function () {
        this.showHero();
    };
    AppComponent.prototype.showHero = function () {
        var _this = this;
        this.heroesService.getHeroes()
            .subscribe(function (data) { return _this.hero = data.data.hero; }, function (err) { return _this.logError(err); }, function () { return console.log(_this.hero); });
    };
    AppComponent.prototype.logError = function (err) {
        console.error('There was an error: ' + err);
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: '<h1>HELLO WORLD</h1><p>{{hero}}</p><input [(ngModel)]="lol"><h3 (keyup)="0">{{lol}}</h3>',
            providers: [heroes_service_1.HeroesService]
        }), 
        __metadata('design:paramtypes', [heroes_service_1.HeroesService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map