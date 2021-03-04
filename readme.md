# Head First Design Patterns

### Design Principles

Identify the aspects of your application that vary and seperate them from what stays the same.
- take the parts that vary and encapsulate them, so that later you can alter or extend the parts that vary without affecting those that don't.

Program to an interface, not an implementation.

Favor composition over inheritance.

Strive for loosely coupled designs between objects that interact.
- Loosely coupled designs allow us to build flexible OO systems that can handle change because they minimize the interdependency between objects.

Classes should be open for extension, but closed for modification.
- Our goal is to allow classes to be easily extended to incorporate new behaviour without modifying existing code.
Designs that are resilient to change and flexible enough to take on new functionality to meet changing requirements.

### Strategy Pattern

Defines a family of algorithms, encapsulates each one, and makes them interchangable. Strategy lets the algorithm vary independently from clients that use it.

### Observer Pattern

Defines a one-to-many dependency between objects so that when one object changes state, all of its dependents are notified and updated automatically.

### Decorator Pattern

Attaches additional responsibilities to an object dynamically. Decorators provide a flexible alternative to subclassing for extending functionality.
