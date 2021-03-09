abstract class Beverage {
  description: string = "Unknown beverage";
  getDescription() {
    console.log("hello");

    return this.description;
  }
  abstract cost(): number;
}

abstract class CondimentDecorator extends Beverage {
  abstract getDescription(): string;
}

class Espresso extends Beverage {
  constructor() {
    super();
    this.description = "Espresso";
  }
  cost(): number {
    return 1.99;
  }
}

class Mocha extends CondimentDecorator {
  constructor(public bevarage: Beverage) {
    super();
    this.bevarage = bevarage;
  }
  getDescription(): string {
    return `${this.bevarage.getDescription()} + 'Mocha'`;
  }
  cost(): number {
    return this.bevarage.cost() + 0.2;
  }
}

class StarBuzzCoffe {
  static main(): void {
    const beverage = new Espresso();
    console.log(beverage.getDescription() + " " + beverage.cost());
    const beverage2 = new Mocha(beverage);
    console.log(beverage2.getDescription() + " " + beverage2.cost());
  }
}

StarBuzzCoffe.main();
