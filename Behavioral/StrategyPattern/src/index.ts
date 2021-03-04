interface FlyBehavior {
  fly(): void;
}

interface QuackBehavior {
  quack(): void;
}

class FlyWithWings implements FlyBehavior {
  fly(): void {
    console.log("I am flying with wings");
  }
}
class Nofly implements FlyBehavior {
  fly(): void {
    console.log("I can't fly");
  }
}

class Quack implements QuackBehavior {
  quack(): void {
    console.log("Quack!!");
  }
}

class Squeak implements QuackBehavior {
  quack() {
    console.log("Squeak!!");
  }
}

abstract class Duck {
  public flyBehavior: FlyBehavior;
  public quackBehavior: QuackBehavior;

  abstract display(): void;

  get performFly() {
    return this.flyBehavior.fly;
  }
  get performQuack() {
    return this.quackBehavior.quack;
  }

  public setFlyBehavior(fb: FlyBehavior) {
    this.flyBehavior = fb;
  }
  public setQuackBehavior(qb: QuackBehavior) {
    this.quackBehavior = qb;
  }
}

class MallardDuck extends Duck {
  public flyBehavior: FlyBehavior = new FlyWithWings();
  public quackBehavior: QuackBehavior = new Quack();
  display(): void {
    console.log("I am a Mallard duck");
  }
}

const mallard = new MallardDuck();

class MiniDuckSimulator {
  static main(): void {
    const mallard = new MallardDuck();
    mallard.performQuack();
    mallard.performFly();
    mallard.performQuack();
  }
}

const sim = MiniDuckSimulator.main();
console.log(sim);
