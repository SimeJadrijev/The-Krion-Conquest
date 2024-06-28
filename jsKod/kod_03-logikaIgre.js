//#region okvir
/// <reference path="../otter/lib-00-GameSettings.js"/>
/// <reference path="../otter/lib-01-tiled.js"/>
/// <reference path="../otter/lib-02-sensing.js"/>
/// <reference path="../otter/lib-03-display.js"/>
/// <reference path="../otter/lib-04-engine.js"/>
/// <reference path="../otter/lib-05-game.js"/>
/// <reference path="../otter/lib-06-main.js"/>
//#endregion

/// <reference path="kod_01-likovi.js"/>
/// <reference path="kod_02-postavke.js"/>

/**
 * Promjena stanja likova - interakcije
 */
function update_main() {
  if (GAME.activeWorldMap.name == "Level one") firstLevel();

  GAME.update();
}

const firstLevel = () => {
  handleInput();

  let enemies = GAME.activeWorldMap.sprites;
  enemies.forEach((sprite) => {
    collisionWithEnemy(sprite);
  });

  francescaShooting();

  Postavke.robots.forEach((robot) => {
    if (!robot.dead) robot.shoot();
  });

  collisionWithMissile();
  collectCoins(Postavke.coins);
};

const createCoin = (enemy) => {
  const coin = new Coin(GAME.getSpriteLayer("c1"));

  placeCoinOnDeadEnemyPosition(enemy, coin);

  GAME.addSprite(coin);
  Postavke.coins.push(coin);
};

const collisionWithMissile = () => {
  for (let i = 0; i < Postavke.missiles2.length; i++) {
    let missile = Postavke.missiles2[i];

    if (missile.touching(Postavke.francesca)) {
      missile.stop();
      Postavke.francesca.lives--;
      break;
    }
  }
};

const collisionWithEnemy = (sprite) => {
  if (sprite instanceof Robot && Postavke.francesca.touching(sprite)) {
    console.log("Diraš robota");
    Postavke.francesca.lives--;
  }
};

const francescaShooting = () => {
  const enemies = [...Postavke.robots];

  for (let i = 0; i < Postavke.missiles.length; i++) {
    let missile = Postavke.missiles[i];

    for (let j = 0; j < enemies.length; j++) {
      let enemy = enemies[j];

      if (missile.touching(enemy)) {
        missile.stop();
        enemy.lives--;

        if (enemy.dead === true) {
          Postavke.coins[j].visible = true;
          Postavke.coins[j].x = enemy.x;
          Postavke.coins[j].y = enemy.y - 50;
        }
      }
    }
  }
};

const collectCoins = (coins) => {
  for (let i = 0; i < coins.length; i++) {
    const thisCoin = coins[i];
    if (Postavke.francesca.touching(coins[i])) {
      thisCoin.collected = true;
      thisCoin.visible = false;
      Postavke.francesca.lives++;
    }
  }
};

const handleInput = () => {
  let activeInput = null;

  if (SENSING.left.active || SENSING.keyA.active) activeInput = "left";
  if (SENSING.right.active || SENSING.keyD.active) activeInput = "right";
  if (SENSING.up.active || SENSING.keyW.active) activeInput = "up";
  if (SENSING.space.active) activeInput = "space";

  switch (activeInput) {
    case "left":
      Postavke.francesca.moveLeft(2);
      break;
    case "right":
      Postavke.francesca.moveRight(2);
      break;
    case "up":
      Postavke.francesca.jump();
      break;
    case "space":
      if (!Postavke.francesca.shoots) {
        Postavke.francesca.shoots = true;
        Postavke.francesca.shoot();
      }
      break;

    default:
      Postavke.francesca.shoots = false;
      break;
  }
};
