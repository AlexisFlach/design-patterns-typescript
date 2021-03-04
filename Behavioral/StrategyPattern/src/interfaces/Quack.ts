export interface QuackBehavior {
  quack(): void;
}

export class Quack implements QuackBehavior {
  public quack(): void {
    return console.log("I'm quacking!!");
  }
}

export class Squeak implements QuackBehavior {
  public quack(): void {
    return console.log("I'm squeaking!!");
  }
}

export class MuteQuack implements QuackBehavior {
  public quack(): void {
    return console.log("I don't quack!!");
  }
}

export class QuackDevice implements QuackBehavior {
  public quack(): void {
    console.log("Quack! Quack!");
  }
}
