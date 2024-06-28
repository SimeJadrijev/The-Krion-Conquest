//#region okvir
/// <reference path="../otter/lib-00-GameSettings.js"/>
/// <reference path="../otter/lib-01-tiled.js"/>
/// <reference path="../otter/lib-02-sensing.js"/>
/// <reference path="../otter/lib-03-display.js"/>
/// <reference path="../otter/lib-04-engine.js"/>
/// <reference path="../otter/lib-05-game.js"/>
/// <reference path="../otter/lib-06-main.js"/>
//#endregion

// ovdje pišete svoje klase

class Character extends Sprite {
  constructor(x, y, layer) {
    super(x + 4, y + 4, 64 - 16, 64 - 16);

    this.frame_sets = {};

    this.layer = layer;
    this.visible = true;
  }

  jump(h = 50) {
    if (!this.jumping) {
      this.jumping = true;
      this.velocity_y -= h;
    }
  }
}

class Francesca extends Character {
  #lives;
  constructor(layer) {
    super(0, 0, layer);
    this.frame_sets = {
      up: [1],
      "walk-up": [1],
      right: [1],
      "walk-right": [1, 2, 3],
      down: [1],
      "walk-down": [1],
      left: [4],
      "walk-left": [6, 5, 4],
    };

    this.shoots = false;
    this.points = 0;
    this.#lives = 1;
    this.boxTouch = false;
    this.activeMissiles = 0;
    this.kills = 0;

    this.direction = 90;
  }

  get lives() {
    return this.#lives;
  }

  set lives(v) {
    if (v <= 0) {
      btnStop_click();
      alert("Umrli ste! Više sreće drugi put!");
    } else {
      this.#lives = v;
    }
  }

  moveRight() {
    let a = arguments.length;
    switch (a) {
      case 0:
        super.moveRight();
        break;
      case 1:
        this.direction = 90;
        this.velocity_x += arguments[0];
      default:
        break;
    }
  }

  moveLeft() {
    let a = arguments.length;
    switch (a) {
      case 0:
        super.moveLeft();

        break;
      case 1:
        this.direction = 270;
        this.velocity_x -= arguments[0];
      default:
        break;
    }
  }

  shoot() {
    if (this.activeMissiles < 3) {
      const missile = this.shootNewMissile();
      this.setMissileProperties(missile);
      this.activeMissiles++;
    }
  }

  shootNewMissile() {
    const missile = new Missile(GAME.getSpriteLayer("projectil1"));
    GAME.addSprite(missile);
    Postavke.missiles.push(missile);
    return missile;
  }

  setMissileProperties(missile) {
    missile.x = this.x;
    missile.y = this.y;
    missile.direction = this.direction;

    missile.distance = 0;
    missile.visible = true;
    missile.move = true;
  }
}

class Robot extends Character {
  #lives;
  constructor(x, y, layer) {
    super(x, y, layer);
    this.frame_sets = {
      up: [61],
      "walk-up": [61],
      right: [61],
      "walk-right": [61, 62, 63],
      down: [61],
      "walk-down": [61],
      left: [64],
      "walk-left": [66, 65, 64],
    };

    this.#lives = 1;
    this.dead = false;
    this.direction = 270;
    this.shoots = false;
  }

  get lives() {
    return this.#lives;
  }
  set lives(v) {
    if (v <= 0) {
      this.killRobot();
    } else {
      this.#lives = v;
    }
  }

  shoot() {
    if (!this.shoots) {
      const missile = this.shootNewMissile();
      this.setMissileProperties(missile);

      this.shoots = true;

      this.setPeriodicShooting(1500);
    }
  }

  shootNewMissile() {
    const missile = new Missile(GAME.getSpriteLayer("projectil2"));
    GAME.addSprite(missile);
    Postavke.missiles2.push(missile);
    return missile;
  }

  killRobot() {
    this._visible = false;
    this.height = 0;
    this.dead = true;
  }

  setMissileProperties(missile) {
    missile.x = this.x;
    missile.y = this.y;
    missile.direction = this.direction;

    missile.distance = 0;
    missile.visible = true;
    missile.move = true;
  }

  setPeriodicShooting(time) {
    setTimeout(() => {
      this.shoots = false;
    }, time);
  }
}

class FinalBoss extends Character {
  #lives;
  constructor(x, y, layer) {
    super(x, y, layer);
    this.frame_sets = {
      up: [31],
      "walk-up": [31],
      right: [31],
      "walk-right": [31, 32, 33],
      down: [31],
      "walk-down": [31],
      left: [35],
      "walk-left": [37, 36, 35],
    };
    this.#lives = 4;
    this.dead = false;
  }

  moveRight() {
    this.direction = 90;
    this.velocity_x += 1.7;
  }

  moveLeft() {
    this.direction = 270;
    this.velocity_x -= 1.7;
  }

  get lives() {
    return this.#lives;
  }

  set lives(v) {
    if (v <= 0) {
      this.killFinalBoss();
    } else {
      this.#lives = v;
    }
  }

  shoot() {
    if (!this.shoots) {
      const missile = this.shootNewMissile();
      this.setMissileProperties(missile);

      this.shoots = true;

      this.setPeriodicShooting(1500);
    }
  }

  shootNewMissile() {
    const missile = new Missile(GAME.getSpriteLayer("projectil2"));
    GAME.addSprite(missile);
    Postavke.missiles2.push(missile);
    return missile;
  }

  killFinalBoss() {
    this._visible = false;
    this.height = 0;
    this.dead = true;
  }

  setMissileProperties(missile) {
    missile.x = this.x;
    missile.y = this.y;
    missile.direction = this.direction;

    missile.distance = 0;
    missile.visible = true;
    missile.move = true;
  }

  setPeriodicShooting(time) {
    setTimeout(() => {
      this.shoots = false;
    }, time);
  }
}

class Missile extends Item {
  #distance;
  constructor(layer) {
    super(layer);
    this.visible = false;
    this.distance = 0;
    this.move = true;
    this.height = 40;
    this._collidedPlatform = "";
  }

  get collidedPlatform() {
    return this._collidedPlatform;
  }
  set collidedPlatform(v) {
    if (v != "") this.stop();

    this._collidedPlatform = v;
  }

  get distance() {
    return this.#distance;
  }
  set distance(v) {
    if (v >= 250) {
      this.#distance = 0;
      this.stop();
    } else this.#distance = v;
  }

  updatePosition() {
    if (this.move) {
      if (this.direction == 90) {
        this.x += 10;
      } else {
        this.x -= 10;
      }

      this.distance += 10;
    }
  }

  stop() {
    this.visible = false;
    this.move = false;

    let sprites = GAME.activeWorldMap.sprites;

    for (let i = sprites.length - 1; i >= 0; i--) {
      if (sprites[i] === this) {
        sprites.splice(i, 1);

        if (this.layer.name === "projectil1") {
          Postavke.removeMissiles(this);
          Postavke.francesca.activeMissiles--;
        } else if (this.layer.name === "projectil2") {
          Postavke.removeMissiles2(this);
        }
        break;
      }
    }
  }
}

class Collectable extends Item {
  constructor(x, y, layer) {
    super(x, y, layer);

    if (this.constructor == Collectable)
      throw new Error("Collectable se ne može instancirati");
  }
}

class Coin extends Collectable {
  constructor(layer) {
    super(layer);
    this.setDeafultCoinValues();
  }

  setDeafultCoinValues() {
    this.points = 10;
    this.visible = true;
    this.collected = false;
  }
}

// class Spike extends Collectable {
//   constructor(layer) {
//     super(layer);
//     this.damage = 1;
//     this.shown = true;
//     this.toggleVisibility();
//   }

//   toggleVisibility() {
//     setInterval(() => {
//       this.shown = !this.shown;
//     }, 1000);
//   }

//   update() {
//     this.visible = this.shown;
//   }
// }
