interface Pizza {
  type: string | null;
  done: () => void;
}

interface Pizza {
  type?: string | null;
  done(): void;
}

// 1. order pizza
abstract class PizzaStore {
  orderPizza(type: string): Pizza {
    console.log("ordered pizza");
    let pizza = null;
    pizza = this.createPizza(type);
    return pizza;
  }
  protected abstract createPizza(type: string): Pizza;
}

class NYStylePizza extends PizzaStore {
  createPizza(): Pizza {
    const cheesePizza = new CheesePizza();
    cheesePizza.done();
    return cheesePizza;
  }
}

class CheesePizza implements Pizza {
  public type: string = "Cheese";
  done(): void {
    console.log(`I am ${this.type} and I am done`);
  }
}

const pizzeria = new NYStylePizza();

pizzeria.orderPizza("cheese");
