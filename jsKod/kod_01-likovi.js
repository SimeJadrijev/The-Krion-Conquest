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
      up: [31],
      "walk-up": [31],
      right: [31],
      "walk-right": [32, 33, 34],
      down: [31],
      "walk-down": [31],
      left: [38],
      "walk-left": [37, 36, 35],
    };

    this.shoots = false;
    this.points = 0;
    this.#lives = 1;
    this.boxTouch = false;
    this.activeMissiles = 0;

    this.direction = 90;
  }

  get lives() {
    return this.#lives;
  }

  set lives(v) {
    if (v <= 0) {
      btnStop_click();
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
}

class Robot extends Character {
  constructor(x, y, layer) {
    super(x, y, layer);
    this.frame_sets = {
      up: [91],
      "walk-up": [91],
      right: [91],
      "walk-right": [92, 93, 94],
      down: [91],
      "walk-down": [91],
      left: [98],
      "walk-left": [97, 96, 95],
    };

    this.dead = false;
    this.direction = 270;
  }
}
