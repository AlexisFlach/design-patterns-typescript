import { QuackBehavior } from "../interfaces/Quack";

// Pronunciation:  https://youtu.be/DoNLC1UALSI?t=23
export class Hunter {
  public name: string;
  protected device?: QuackBehavior | undefined;

  constructor(name: string, device: QuackBehavior) {
    this.name = name;
    this.device = device;
  }

  runDevice(): void {
    this.device?.quack();
  }
}
