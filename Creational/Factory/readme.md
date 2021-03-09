# Factory Pattern

The factory Method pattern defines an interface for creating an object but lets subclasses decide which class to instantiate. Factory Method lets a class defer instantiation to subclasses.

**OO Design Principle: Dependency Inversion Principle** 

Depend upon abstractions, do not depend upon concrete classes.

Almost like *programm to an interface, not an implementation*, but makes an even stronger statement about abstraction. Our high-level components should not depend on our low-level components; they should *both* depend on abstractions.

What is a high-level component? A class with behvior defined in terms of other, "low-level" components?
PizzaStore is a high-level component because its behavior is defined in terms of pizzas, with the pizzas being low-level components.

That is one reason to why we make PizzaStore an abstract class because if createPizza would be a concrete method then we would be very dependent on our low-level components, so if we instead make PizzaStore depend on abstract Pizza, and concrete Pizzaz depend on Pizza then we are depending on abstractions.

So where is the inversion?

The name come from how we usually think, it inverts it.

A few guidelines to help you follow the principle:

- No variables should hold reference to a concrete class.
  If you use **new** then you are holding reference to another class. Use a factory to get around that.
- No class should derive from a concrete class
- If so, then you are depending on a concrete class. Derive from an abstraction, like an interface or an abstract class.