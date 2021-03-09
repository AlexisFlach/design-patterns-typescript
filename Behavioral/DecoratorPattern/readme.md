# Decorator Pattern

Attach additional responsibilities to an object dynamically. Decorators provide a flexible alternative to subclassing for extending functionality.

**Design Principle: Classes should be open for extension, but closed for modification**

The open-closed principle.

##### class diagram of the Decorator Pattern

abstract Component
*MethodA();*
*MethodB();*

ConcreteComponent extends Component
MethodA()
MethodB();

Abstract Class Decorator
*MethodA()*
*MethodB*

ConcreteDecoretor extends Beverage
Component = wrappedObj

MethodA()
MethodB()

In our StarBuzz:

*Beverage*
description;
*getDescription()*
*cost()*

DarkRoast extends Beverage
cost()

*CondimentDecorator extends Beverage*
*getDescription()*

Milk
beverage: Beverage
cost()
getDescription()

The question is: how does this follow the open-closed principle?

We extend the beverage with our decorators, but the beverage class is closed?

Why did we use inheritance?

i.e. the CondimentDecorator extends Beverage. The point is that it is vital for the decorator to have the same type as the object they are going to decorate; type matching.
But when we compose a decorator with a component:

```typescript
constructor(public bevarage: Beverage) {
    super();
    this.bevarage = bevarage;
  }
  ```

So we are subclassing the abstract class Beverage in order to have the correct type NOT to inherit it's behavior. The behavior comes through composition. This gives us alot of flexibility when it comes to mix and match condiments and bevarages.

##### Bullet Points

- Inheritance is one form of extension, but not necesseraly the best way to achieve flexibility in our designs.
- In our designs we should allow behavior to be extended without the need to modify existing code.
- Composition and delegation can often be used to add new behaviors at runtime.
- The decorator pattern provides an alternative to subclassing for extending behavior.
- The decorator pattern involves a set of decorator classes that are used to wrap concrete components.
- Decorator classes mirror the type of components the decorate. In fact, they are the same type as the components they decorate, either through inheritance or interface implementation.
- Decorators change the behavior of their components by adding new functionality before and/or after method calls to the component.
- You can wrap a component with any numbers of decorators.
- Decorators are typically transparent to the client of the component, that is, unless the client is relying on the components concrete type.
- Decorators can result in many small objects in our design, and overuse can be complex.