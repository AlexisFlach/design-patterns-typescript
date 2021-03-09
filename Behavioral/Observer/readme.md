# Observer Pattern

The observer pattern defines a one-to-many relationship between a set of objects. When the state of one object changes, all of its dependents are notified.

**The power of loose coupling**
When two objects are loosely coupled, they can intereact, but have very little knowledge of eachother.
**The Observer Pattern** provides an object design where subjects and observers are loosely coupled.

Think of the **Design Pattern: Program to an interface, not an implementation**. The Observer pattern very much takes this into account. Why? Both the Subject and the objects use interfaces and while the subject keeps tracks of objects that implements the Observer interface, the observers get register with, and get notified ny the Subject interface. This is what makes them **loosely coupled**. What do they know about eachother more than that? Nothing. And what does this tell us? At least it hints that if we make changes, or add, a concrete class based on that interface, we wont have to make changes to the Subject.

**Design Principle: Strive for loosely coupled designs between objects that interact**
Loosely coupled designs allow us to build flexible OO systems that can handle change because they minimize the interdependency between objects.

##### Class diagram

interface Subject
registerObserver(o Observer):void
removeObserver(o Observer):void
notifyObserver():void

And what has-a *Subject*?

A concrete class Subject!

class Subject
registerObserver(o Observer):void{}
removeObserver(o Observer):void{}
notifyObserver():void{}

interface Observer
update()

And what has-a *Observer*?

A concrete class Observer!

class Observer
update(){} 


##### Bullet Points
- The Observer Pattern defines a one-to-many relationship between objects.
- Subjects, also known as Observables, update Observers using a common interface.
- Observers are lossely coupled in that the Subject only knows that they implement the Observer interface, nothing else.
- You can push or pull data from the Subject.
- Don't depend on a specific order of notification for your observers.

#### Design Principle Challenge

For each design principle, describe how the Observer Pattern makes use of the principle.

**Design Principle: Identify the aspects of your code that vary and separate them from what stays the same**

What vary? The state inside the Subject and length and types of Observers, so we vary the objects that are dependent on the state of the subject.

**Design Principle: Program to an interface, not an implementation**

Both the subject and the observers makes use of interaces.  The subject keeps track of objects that implements the Observer interface and the observerves gets their news, and subscribes, from the Subject interface. Loooosely coupled!

**Design principle: Favor composition over inheritance**

Well, we don't use any inheritance. With the Observer Pattern we compose our observers with ther subject, and this is all set up at runtime by composition(constructor).
























