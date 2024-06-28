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

  Postavke.robots = [];
  Postavke.missiles = [];
  Postavke.enemies = [];

  let chosen = GAME.activeWorldMap.name;
  GameSettings.output(chosen);

  switch (chosen) {
    case "Level one":
      setupLevelOne();
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
  let francesca = new Francesca(GAME.getSpriteLayer("Witch"));
  GAME.addSprite(francesca);
  Postavke.francesca = francesca;
  Postavke.francesca.x = 72;

  createRobot(450, 20);
  createRobot(750, 30);
  createRobot(1450, 30);
};

/* FUNCTIONS */

const createRobot = (x, y) => {
  let robot = new Robot(x, y, GAME.getSpriteLayer("Robot"));
  GAME.addSprite(robot);
  robot.visible = true;
  Postavke.robot = robot;
  Postavke.robots.push(robot);
};
