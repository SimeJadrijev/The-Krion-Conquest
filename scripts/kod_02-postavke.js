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

// što će se pokrenuti kad se klikne button Setup:
let btnSetupGame = document.getElementById("btnSetupGame");
btnSetupGame.addEventListener("click", setup);

function setup() {
  GAME.clearSprites();

  initializeDefaultArrays();

  let chosen = GAME.activeWorldMap.name;
  GameSettings.output(chosen);

  switch (chosen) {
    case "Level one":
      setupLevelOne();
      break;
    case "Level two":
      setupLevelTwo();
      break;

    default:
      throw "Ne postoji setup za " + GAME.activeWorldMap.name;
      break;
  }

  render_main();
}

/* LEVELS */

const setupLevelOne = () => {
  GAME.activeWorldMap.setCollisions("Platform");

  const francesca = createFrancesca();

  createRobot(320, 20);
  createRobot(750, 30);
  createRobot(1450, 30);

  createCoins(3);
};

const setupLevelTwo = () => {
  GAME.clearSprites();
  GAME.activeWorldMap.setCollisions("Platform");
  const francesca = createFrancesca();
  const finalBoss = createFinalBoss(1300, 150);

  createRobot(320, 80);
  createRobot(900, 250);

  // createSpikesPlatform("spike", 2);
};
/* FUNCTIONS */

const createRobot = (x, y) => {
  let robot = new Robot(x, y, GAME.getSpriteLayer("Robot"));
  GAME.addSprite(robot);
  robot.visible = true;
  Postavke.robot = robot;
  Postavke.robots.push(robot);
};

const createCoins = (amount) => {
  for (let i = 1; i <= 3; i++) {
    const layerName = "c" + i;
    const newCoin = new Coin(GAME.getSpriteLayer(layerName));
    newCoin.visible = false;
    GAME.addSprite(newCoin);
    Postavke.coins.push(newCoin);
  }
};

const initializeDefaultArrays = () => {
  Postavke.robots = [];
  Postavke.missiles = [];
  Postavke.enemies = [];
  Postavke.coins = [];
  Postavke.finalBosses = [];
  Postavke.spikes = [];
};

const createFrancesca = () => {
  const francesca = new Francesca(GAME.getSpriteLayer("Witch"));
  GAME.addSprite(francesca);
  Postavke.francesca = francesca;
  Postavke.francesca.x = 72;
  return francesca;
};

const createFinalBoss = (x, y) => {
  const finalBoss = new FinalBoss(x, y, GAME.getSpriteLayer("StoneEnemy"));
  GAME.addSprite(finalBoss);
  finalBoss.visible = true;
  Postavke.finalBoss = finalBoss;
  Postavke.finalBosses.push(finalBoss);
  return finalBoss;
};

// const createSpikesPlatform = (layer, amount) => {
//   for (let i = 1; i <= amount; i++) {
//     const layerName = layer + i;
//     const spikesPlatform = new Spike(GAME.getSpriteLayer(layerName));
//     spikesPlatform.visible = true;
//     GAME.addSprite(spikesPlatform);
//     Postavke.spikes.push(spikesPlatform);
//   }
// };
