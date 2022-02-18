/**
 * Singleton is a creational design pattern
 * It's useful when you want to take total control of one class and you want to
 * ONLY instance one instance of that class
 * 
 * Singleton is considere a anti design pattern
 * Because it's become with a lot of problems
 * One of them is that Singleton make harder unit testing
 * This is because by design, a Singleton class is private
 * So you have to find a way to this class
 * 
 * Singleton makes harder multi trhead apps
 * 
 * Singleton break One purpuse responsability principle of SOLID
 */

// Example source: https://www.youtube.com/watch?v=GGq6s7xhHzY
class Singleton {
  private static instance: Singleton;

  private constructor() {}

  public static getInstance(): Singleton {
    if (!Singleton.instance) {
      console.log("There is not any singleton instance, I'll create one");
      return Singleton.instance = new Singleton();
    }

    console.log("Sorry, there is already a singleton instance, I can not create another one");

    return Singleton.instance;
  }
}

const singleton1 = Singleton.getInstance();
// Output: There is not any singleton instance, I'll create one
const singleton2 = Singleton.getInstance();
// Output: there is already a singleton instance, I can not create another one
 
// Another example from refactoring.guru 
//source https://refactoring.guru/es/design-patterns/singleton/typescript/example

/**
 * The Singleton class defines the `getInstance` method that lets clients access
 * the unique singleton instance.
 */
 class Singleton2 {
  private static instance: Singleton2;

  /**
   * The Singleton's constructor should always be private to prevent direct
   * construction calls with the `new` operator.
   */
  private constructor() { }

  /**
   * The static method that controls the access to the singleton instance.
   *
   * This implementation let you subclass the Singleton class while keeping
   * just one instance of each subclass around.
   */
  public static getInstance(): Singleton2 {
      if (!Singleton2.instance) {
          Singleton2.instance = new Singleton2();
      }

      return Singleton2.instance;
  }

  /**
   * Finally, any singleton should define some business logic, which can be
   * executed on its instance.
   */
  public someBusinessLogic() {
      // ...
  }
}

/**
* The client code.
*/
function clientCode() {
  const s1 = Singleton2.getInstance();
  const s2 = Singleton2.getInstance();

  if (s1 === s2) {
      console.log('Singleton works, both variables contain the same instance.');
  } else {
      console.log('Singleton failed, variables contain different instances.');
  }
}

clientCode();