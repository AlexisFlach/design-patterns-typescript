import { Duck } from "./classes/Duck";
import { Hunter } from "./classes/Hunter";
import { FlyWithWings, NoFly, TryThis } from "./interfaces/Fly";
import { Quack, QuackDevice, Squeak } from "./interfaces/Quack";

class ModelDuck extends Duck {
  flybehavior = new NoFly();
  quackBehavior = new Quack();

  public display(): void {
    console.log("I am just a model duck");
  }
}

class Mallard extends Duck {
  flyBehavior = new FlyWithWings();
  quackBehavior = new Quack();

  public display(): void {
    console.log(`I'm a mallard`);
  }
}

export class MiniDuckSimulator {
  public run(): void {
    const mallard = new Mallard();
    mallard.performFly();
    mallard.performQuack();
    mallard.display();

    const modelDuck = new ModelDuck();
    modelDuck.performFly();
    modelDuck.setFlyBeaviour(new TryThis());
    modelDuck.performFly();
    modelDuck.display();

    const hunter = new Hunter("hünter", new QuackDevice());
    hunter.runDevice();
  }
}

new MiniDuckSimulator().run();
