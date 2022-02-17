// Father class
class Car {
  model: String;
  brand: String;
  year: Number;

  constructor(model: String, brand: String, year: Number) {
    this.model = model;
    this.brand = brand;
    this.year = year;
  }

  public getModel(): void {
    console.log(this.model);
  }

  public brrrrFather(): String {
    return "brrrrr";
  }
}

// Child class
class Toyota extends Car {
  constructor(model: String, brand: String, year: Number) {
    super(model, brand, year);
  }

  public getModel(): void {
    console.log(`I'm a Toyota and mi model is: ${this.model}`);
  }

  // Override father's method
  public brrrr(): void {
    console.log(super.brrrrFather());
  }
}

// Child class
class Ford extends Car {
  constructor(model: String, brand: String, year: Number) {
    super(model, brand, year);
  }

  // Override father's method
  public getModel(): void {
    console.log(`I'm a ford and mi model is: ${this.model}`);
  }
}

const toyota = new Toyota("GR", "TOYOTA", 2020);
const ford = new Ford("GT", "FORD", 2016);

toyota.getModel();
toyota.brrrr();

ford.getModel();

// Subtitution Principle of S.O.L.I.D
// Se puede usar un objecto de una subclase siempre que el programa espere la clase padre

// En Español, Toyota y Ford son hijos de Car y por ende son Car y por eso
// los puedo usar en esta funcion
function getCarInfo(car: Car) {
  console.log(
    `I\'m a ${car.brand} car my model is ${car.model} my year is ${car.year}`
  );
}

getCarInfo(toyota);
getCarInfo(ford);
