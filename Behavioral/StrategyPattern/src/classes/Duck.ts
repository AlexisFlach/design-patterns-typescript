import { FlyBehavior } from "../interfaces/Fly";
import { QuackBehavior } from "../interfaces/Quack";

export abstract class Duck {
  private flyBehaviour: FlyBehavior;
  private quackBehaviour: QuackBehavior;

  abstract display(): void;

  public setFlyBeaviour(flyBehaviour: FlyBehavior): void {
    this.flyBehaviour = flyBehaviour;
  }

  public setQuackBehaviour(quackBehaviour: QuackBehavior): void {
    this.quackBehaviour = quackBehaviour;
  }

  public performFly(): void {
    this.flyBehaviour?.fly();
  }
  public performQuack(): void {
    this.quackBehaviour?.quack();
  }
  public swim(): void {
    console.log("All ducks float, even decoys!");
  }
}
