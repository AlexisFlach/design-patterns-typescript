/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};
/*!**************************************************!*\
  !*** ./Behavioral/DecoratorPattern/src/index.ts ***!
  \**************************************************/

class Beverage {
    constructor() {
        this.description = "Unknown beverage";
    }
    getDescription() {
        console.log("hello");
        return this.description;
    }
}
class CondimentDecorator extends Beverage {
}
class Espresso extends Beverage {
    constructor() {
        super();
        this.description = "Espresso";
    }
    cost() {
        return 1.99;
    }
}
class Mocha extends CondimentDecorator {
    constructor(bevarage) {
        super();
        this.bevarage = bevarage;
        this.bevarage = bevarage;
    }
    getDescription() {
        return `${this.bevarage.getDescription()} + 'Mocha'`;
    }
    cost() {
        return this.bevarage.cost() + 0.2;
    }
}
class StarBuzzCoffe {
    static main() {
        const beverage = new Espresso();
        console.log(beverage.getDescription() + " " + beverage.cost());
        const beverage2 = new Mocha(beverage);
        console.log(beverage2.getDescription() + " " + beverage2.cost());
    }
}
StarBuzzCoffe.main();

/******/ })()
;
//# sourceMappingURL=bundle.js.map