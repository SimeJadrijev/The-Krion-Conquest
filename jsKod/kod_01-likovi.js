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

class Racoon extends Sprite {
    constructor(x, y, layer) {
        super(x, y, 60, 60);
        this.frame_sets = {
            "up": [1],
            "walk-up": [1],
            "right": [1],
            "walk-right": [2, 3, 4, 5, 6, 7, 8],
            "down": [1],
            "walk-down": [1],
            "left": [11],
            "walk-left": [12, 13, 14, 15, 16, 17, 18]
        };

        this.layer = layer;
        this.visible = true; //tek kad se postavi layer

    }
}