class Postavke {
  constructor() {
    if (this instanceof Postavke) {
      throw new Error("Statička klasa nema instance!");
    }
  }

  static random(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  static missiles = [];
  static missiles2 = [];
  static robots = [];
  static francesca = null;
  static finalBoss = null;

  static removeMissiles(p) {
    for (let i = Postavke.missiles.length - 1; i >= 0; i--) {
      if (Postavke.missiles[i] === p) {
        Postavke.missiles.splice(i, 1);

        break;
      }
    }
  }

  static removeMissiles2(p) {
    for (let i = Postavke.missiles2.length - 1; i >= 0; i--) {
      if (Postavke.missiles2[i] === p) {
        Postavke.missiles2.splice(i, 1);

        break;
      }
    }
  }
}
