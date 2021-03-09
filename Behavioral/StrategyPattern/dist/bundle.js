/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};
/*!*************************************************!*\
  !*** ./Behavioral/StrategyPattern/src/index.ts ***!
  \*************************************************/

class FlyWithWings {
    fly() {
        console.log("I am flying with wings");
    }
}
class Nofly {
    fly() {
        console.log("I can't fly");
    }
}
class Quack {
    quack() {
        console.log("Quack!!");
    }
}
class Squeak {
    quack() {
        console.log("Squeak!!");
    }
}
class Duck {
    get performFly() {
        return this.flyBehavior.fly;
    }
    get performQuack() {
        return this.quackBehavior.quack;
    }
    setFlyBehavior(fb) {
        this.flyBehavior = fb;
    }
    setQuackBehavior(qb) {
        this.quackBehavior = qb;
    }
}
class MallardDuck extends Duck {
    constructor() {
        super(...arguments);
        this.flyBehavior = new FlyWithWings();
        this.quackBehavior = new Quack();
    }
    display() {
        console.log("I am a Mallard duck");
    }
}
const mallard = new MallardDuck();
class MiniDuckSimulator {
    static main() {
        const mallard = new MallardDuck();
        mallard.performQuack();
        mallard.performFly();
        mallard.performQuack();
    }
}
const sim = MiniDuckSimulator.main();
console.log(sim);

/******/ })()
;
//# sourceMappingURL=bundle.js.map