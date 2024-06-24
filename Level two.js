(function(name,data){
 if(typeof onTileMapLoaded === 'undefined') {
  if(typeof TileMaps === 'undefined') TileMaps = {};
  TileMaps[name] = data;
 } else {
  onTileMapLoaded(name,data);
 }
 if(typeof module === 'object' && module && module.exports) {
  module.exports = data;
 }})("Level two",
{ "compressionlevel":-1,
 "height":10,
 "infinite":false,
 "layers":[
        {
         "data":[311, 193, 303, 304, 305, 306, 307, 308, 309, 310, 311, 312, 313, 314, 315, 316, 317, 318, 319, 320, 321, 322, 323, 324, 325, 326, 327, 328, 329, 311,
            311, 193, 333, 334, 335, 336, 337, 338, 339, 340, 341, 342, 343, 344, 345, 346, 347, 348, 349, 350, 351, 352, 353, 354, 355, 356, 357, 358, 359, 311,
            311, 193, 363, 364, 365, 366, 367, 368, 369, 370, 371, 372, 373, 374, 375, 376, 377, 378, 379, 380, 381, 382, 383, 384, 385, 386, 387, 388, 389, 311,
            311, 193, 393, 394, 395, 396, 397, 398, 399, 400, 401, 402, 403, 404, 405, 406, 407, 408, 409, 410, 411, 412, 413, 414, 415, 416, 417, 418, 419, 311,
            311, 193, 460, 460, 460, 426, 427, 428, 429, 430, 431, 432, 433, 434, 435, 436, 437, 438, 439, 440, 441, 442, 443, 460, 460, 446, 447, 448, 449, 311,
            311, 193, 460, 460, 460, 460, 460, 458, 459, 460, 461, 462, 463, 460, 460, 460, 460, 460, 460, 470, 471, 472, 473, 460, 460, 476, 477, 478, 479, 311,
            311, 460, 460, 460, 460, 460, 460, 460, 460, 460, 491, 492, 493, 494, 460, 460, 497, 498, 460, 460, 460, 502, 460, 460, 460, 460, 507, 508, 193, 311,
            311, 460, 460, 460, 460, 516, 460, 460, 460, 460, 460, 460, 431, 431, 431, 431, 431, 431, 460, 460, 460, 532, 460, 460, 460, 460, 460, 538, 193, 311,
            311, 460, 460, 460, 545, 546, 547, 460, 460, 460, 460, 460, 553, 554, 555, 556, 557, 558, 559, 460, 460, 460, 460, 564, 460, 460, 460, 568, 193, 311,
            311, 572, 573, 574, 575, 576, 577, 578, 579, 580, 581, 582, 583, 584, 585, 586, 587, 588, 589, 590, 591, 592, 593, 594, 595, 596, 597, 598, 193, 311],
         "height":10,
         "id":1,
         "name":"Background",
         "opacity":1,
         "type":"tilelayer",
         "visible":true,
         "width":30,
         "x":0,
         "y":0
        }, 
        {
         "data":[598, 0, 375, 0, 0, 0, 0, 0, 338, 338, 338, 338, 338, 338, 0, 0, 0, 0, 0, 0, 0, 435, 0, 0, 0, 0, 0, 0, 0, 435,
            598, 0, 375, 375, 375, 375, 375, 375, 338, 0, 0, 0, 0, 375, 0, 375, 375, 375, 375, 375, 375, 435, 0, 0, 0, 0, 0, 0, 0, 435,
            598, 0, 375, 375, 338, 338, 338, 338, 338, 0, 0, 0, 0, 375, 0, 435, 435, 435, 435, 435, 435, 435, 0, 0, 0, 0, 0, 0, 0, 435,
            598, 0, 338, 338, 0, 0, 0, 0, 0, 0, 0, 0, 0, 375, 0, 375, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 435,
            598, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 375, 375, 375, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 435,
            598, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 530, 530, 0, 0, 0, 0, 435,
            598, 0, 0, 0, 530, 530, 530, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 435,
            598, 0, 0, 0, 0, 0, 0, 0, 0, 530, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 530, 530, 0, 0, 0, 0, 0, 314, 0, 435,
            598, 530, 530, 0, 471, 471, 471, 471, 0, 0, 0, 557, 557, 557, 557, 557, 557, 557, 471, 0, 0, 0, 0, 0, 0, 0, 0, 314, 0, 435,
            571, 572, 573, 574, 575, 576, 577, 578, 579, 580, 581, 554, 0, 0, 0, 0, 0, 556, 589, 590, 591, 592, 593, 594, 595, 596, 597, 314, 0, 435],
         "height":10,
         "id":2,
         "name":"Platform",
         "opacity":1,
         "type":"tilelayer",
         "visible":true,
         "width":30,
         "x":0,
         "y":0
        }, 
        {
         "data":[601, 602, 603, 604, 605, 606, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
         "height":10,
         "id":3,
         "name":"Witch",
         "opacity":1,
         "properties":[
                {
                 "name":"class",
                 "type":"string",
                 "value":"witch"
                }],
         "type":"tilelayer",
         "visible":true,
         "width":30,
         "x":0,
         "y":0
        }, 
        {
         "data":[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            609, 610, 611, 612, 613, 614, 615, 616, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
         "height":10,
         "id":4,
         "name":"StoneEnemy",
         "opacity":1,
         "properties":[
                {
                 "name":"class",
                 "type":"string",
                 "value":"stone"
                }],
         "type":"tilelayer",
         "visible":true,
         "width":30,
         "x":0,
         "y":0
        }, 
        {
         "data":[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            617, 618, 619, 620, 621, 622, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
         "height":10,
         "id":5,
         "name":"Robot",
         "opacity":1,
         "properties":[
                {
                 "name":"class",
                 "type":"string",
                 "value":"robot"
                }],
         "type":"tilelayer",
         "visible":true,
         "width":30,
         "x":0,
         "y":0
        }, 
        {
         "draworder":"topdown",
         "id":6,
         "name":"Items",
         "objects":[
                {
                 "gid":607,
                 "height":64,
                 "id":1,
                 "name":"projectil1",
                 "rotation":0,
                 "type":"",
                 "visible":true,
                 "width":64,
                 "x":384,
                 "y":0
                }, 
                {
                 "gid":608,
                 "height":64,
                 "id":2,
                 "name":"projectil2",
                 "rotation":0,
                 "type":"",
                 "visible":true,
                 "width":64,
                 "x":448,
                 "y":0
                }, 
                {
                 "gid":469,
                 "height":4,
                 "id":3,
                 "name":"spike1",
                 "rotation":0,
                 "type":"",
                 "visible":true,
                 "width":635,
                 "x":70.7273,
                 "y":580.394
                }, 
                {
                 "gid":472,
                 "height":2.66667,
                 "id":4,
                 "name":"spike2",
                 "rotation":0,
                 "type":"",
                 "visible":true,
                 "width":572,
                 "x":1152,
                 "y":578
                }, 
                {
                 "gid":1073742182,
                 "height":64,
                 "id":5,
                 "name":"endGame",
                 "rotation":0,
                 "type":"",
                 "visible":true,
                 "width":64,
                 "x":1792,
                 "y":576
                }],
         "opacity":1,
         "properties":[
                {
                 "name":"class",
                 "type":"string",
                 "value":"items"
                }],
         "type":"objectgroup",
         "visible":true,
         "x":0,
         "y":0
        }],
 "nextlayerid":7,
 "nextobjectid":6,
 "orientation":"orthogonal",
 "renderorder":"right-down",
 "tiledversion":"1.10.2",
 "tileheight":64,
 "tilesets":[
        {
         "columns":30,
         "firstgid":1,
         "image":"maps\/sime_mapaOOP\/razine.png",
         "imageheight":1280,
         "imagewidth":1920,
         "margin":0,
         "name":"razine",
         "objectalignment":"topleft",
         "spacing":0,
         "tilecount":600,
         "tileheight":64,
         "tilewidth":64
        }, 
        {
         "columns":8,
         "firstgid":601,
         "image":"maps\/sime_mapaOOP\/Assests.png",
         "imageheight":192,
         "imagewidth":512,
         "margin":0,
         "name":"Assests",
         "objectalignment":"topleft",
         "spacing":0,
         "tilecount":24,
         "tileheight":64,
         "tilewidth":64
        }],
 "tilewidth":64,
 "type":"map",
 "version":"1.10",
 "width":30
});