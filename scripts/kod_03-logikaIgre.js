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
  else if (GAME.activeWorldMap.name == "Level two") secondLevel();

  GAME.update();
}

const firstLevel = () => {
  handleInput();

  const enemies = GAME.activeWorldMap.sprites;
  enemies.forEach((sprite) => {
    collisionWithEnemy(sprite);
  });

  francescaShooting(1);

  Postavke.robots.forEach((robot) => {
    if (!robot.dead) robot.shoot();
  });

  collisionWithMissile();
  collectCoins(Postavke.coins);
  updateGameOutput(1);
};

const secondLevel = () => {
  handleInput();
  const enemies = GAME.activeWorldMap.sprites;
  enemies.forEach((sprite) => {
    collisionWithEnemy(sprite);
  });

  francescaShooting(2);
  Postavke.robots.forEach((robot) => {
    if (!robot.dead) robot.shoot();
  });

  if (!Postavke.finalBoss.dead) Postavke.finalBoss.shoot();
  collisionWithMissile();

  robotsMovement(0, 270, 350);
  robotsMovement(1, 850, 950);

  // dieFromSpikesPlatform(Postavke.spikes);
  updateGameOutput(2);
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
  if (sprite instanceof Robot && Postavke.francesca.touching(sprite))
    Postavke.francesca.lives--;
};

const francescaShooting = (level) => {
  const enemies = [...Postavke.robots];

  for (let i = 0; i < Postavke.missiles.length; i++) {
    let missile = Postavke.missiles[i];

    if (level === 2) {
      if (missile.touching(Postavke.finalBoss)) {
        missile.stop();
        Postavke.finalBoss.lives--;
        Postavke.francesca.kills++;

        if (Postavke.francesca.kills === 6)
          alert("Čestitke! Uspješno ste porazili final bossa!");
      }
    }

    for (let j = 0; j < enemies.length; j++) {
      let enemy = enemies[j];

      if (missile.touching(enemy)) {
        missile.stop();
        enemy.lives--;

        if (enemy.dead === true) {
          Postavke.francesca.kills++;

          if (level === 1) createCoinAfterDeath(j, enemy);

          if (Postavke.francesca.kills === 3) {
            alert(
              "Bravo! Uspješno ste prešli razinu! Pripremite novu na setup!"
            );
          }
        }
      }
    }
  }
};

const createCoinAfterDeath = (j, enemy) => {
  Postavke.coins[j].visible = true;
  Postavke.coins[j].x = enemy.x;
  Postavke.coins[j].y = enemy.y - 50;
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

const updateGameOutput = (level) => {
  if (level === 1) {
    const instructions = `Upute: da biste prešli razinu, morate upucati sve robote bez da budete pogođeni, a skupljanjem novčića dobijate dodatan život.`;
    GameSettings.output(
      `
    ${instructions} \n
    Životi: ${Postavke.francesca.lives}
    `,
      true
    );
  } else if (level === 2) {
    const instructions = `Upute: da biste prešli igricu, morate upucati sve robote bez da budete pogođeni, i na kraju četiri puta pogoditi final bossa. Nema novčića za dodatne živote.`;
    GameSettings.output(
      `
    ${instructions} \n
    Tvoji životi: ${Postavke.francesca.lives}
    Final boss životi: ${Postavke.finalBoss.lives}
    `,
      true
    );
  }
};

const robotsMovement = (i, leftBorder, rightBorder) => {
  const robot = Postavke.robots[i];
  if (robot.direction === 270) {
    robot.moveLeft();

    if (robot.x <= leftBorder) robot.direction = 90;
  } else if (robot.direction === 90) {
    robot.moveRight();

    if (robot.x >= rightBorder) robot.direction = 270;
  }
};

// const dieFromSpikesPlatform = (spikesPlatforms) => {
//   for (let i = 0; i < spikesPlatforms.length; i++) {
//     const spikePlatform = spikesPlatforms[i];

//     if (Postavke.francesca.touching(spikePlatform)) {
//       Postavke.francesca.lives--;
//     }
//   }
// };
