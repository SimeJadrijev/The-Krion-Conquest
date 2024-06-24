class Postavke {

  constructor() {
    if (this instanceof Postavke) {
      throw new Error("Statička klasa nema instance!");
    }
  }

  /** @type {Racoon} */
  static racoon = null;

  static random(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

}