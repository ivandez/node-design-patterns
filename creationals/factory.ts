/**
 * Factory method is a creation design pattern
 * Factory describes a way to create an object without specific their exact class
 * Use the Factory Method when you want to save system resources 
 * by reusing existing objects instead of rebuilding them each time.
 */

// Examples with minecraft cubes
// source https://www.youtube.com/watch?v=R6Ef64hDwGo&list=PLvimn1Ins-41Uiugt1WbpyFo1XT1WOquL&index=3

// Al products must implement this interface
interface Cube {
  dropItem(): void;
}

// This is product
class DiamondCube implements Cube {
  dropItem(): void {
    console.log("I'm a diamond Cube, I drop diamonds");
  }
}

// This is product
class CoalCube implements Cube {
  dropItem(): void {
    console.log("I'm a coal Cube, I drop coal");
  }
}

// this is the factory
class CubeFactory {
  /**
   * Remember, despite its name, the primay responsability of the factory
   * is contains some bussines logic, not create the product objects
   */
  public factoryDiamondCube(): DiamondCube {
    return new DiamondCube();
  }
  public factoryCoalCube(): CoalCube {
    return new CoalCube();
  }
}

const cubeFactory = new CubeFactory();

const diamondCube = cubeFactory.factoryDiamondCube();

const coalCube = cubeFactory.factoryCoalCube();

diamondCube.dropItem();

coalCube.dropItem();

// Example from refactoring.guru
// source https://refactoring.guru/es/design-patterns/factory-method/typescript/example
/**
 * The Creator class declares the factory method that is supposed to return an
 * object of a Product class. The Creator's subclasses usually provide the
 * implementation of this method.
 */
abstract class Creator {
  /**
   * Note that the Creator may also provide some default implementation of the
   * factory method.
   */
  public abstract factoryMethod(): Product;

  /**
   * Also note that, despite its name, the Creator's primary responsibility is
   * not creating products. Usually, it contains some core business logic that
   * relies on Product objects, returned by the factory method. Subclasses can
   * indirectly change that business logic by overriding the factory method
   * and returning a different type of product from it.
   */
  public someOperation(): string {
    // Call the factory method to create a Product object.
    const product = this.factoryMethod();
    // Now, use the product.
    return `Creator: The same creator's code has just worked with ${product.operation()}`;
  }
}

/**
 * Concrete Creators override the factory method in order to change the
 * resulting product's type.
 */
class ConcreteCreator1 extends Creator {
  /**
   * Note that the signature of the method still uses the abstract product
   * type, even though the concrete product is actually returned from the
   * method. This way the Creator can stay independent of concrete product
   * classes.
   */
  public factoryMethod(): Product {
    return new ConcreteProduct1();
  }
}

class ConcreteCreator2 extends Creator {
  public factoryMethod(): Product {
    return new ConcreteProduct2();
  }
}

/**
 * The Product interface declares the operations that all concrete products must
 * implement.
 */
interface Product {
  operation(): string;
}

/**
 * Concrete Products provide various implementations of the Product interface.
 */
class ConcreteProduct1 implements Product {
  public operation(): string {
    return "{Result of the ConcreteProduct1}";
  }
}

class ConcreteProduct2 implements Product {
  public operation(): string {
    return "{Result of the ConcreteProduct2}";
  }
}

/**
 * The client code works with an instance of a concrete creator, albeit through
 * its base interface. As long as the client keeps working with the creator via
 * the base interface, you can pass it any creator's subclass.
 */
function clientCode(creator: Creator) {
  // ...
  console.log(
    "Client: I'm not aware of the creator's class, but it still works."
  );
  console.log(creator.someOperation());
  // ...
}

/**
 * The Application picks a creator's type depending on the configuration or
 * environment.
 */
// console.log("App: Launched with the ConcreteCreator1.");
// clientCode(new ConcreteCreator1());
// console.log("");

// console.log("App: Launched with the ConcreteCreator2.");
// clientCode(new ConcreteCreator2());
