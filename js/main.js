var Nakama = Nakama || {};

Nakama.configs = {};

const GAME_WIDTH_MIN = 320;
const GAME_HEIGHT_MIN = 480;
const GAME_WIDTH_MAX = 640;
const GAME_HEIGHT_MAX = 960;
const SPACESHIP_SIZE_WIDTH = 78;
const SPACESHIP_SIZE_HEIGHT = 78;

window.onload = function() {
    Nakama.game = new Phaser.Game(GAME_WIDTH_MAX, GAME_HEIGHT_MAX, Phaser.CANVAS, '', {
        preload: preload,
        create: create,
        update: update,
        render: render
    }, false, false);
}

// preparations before game starts
var preload = function() {
    Nakama.game.scale.minWidth = GAME_WIDTH_MIN;
    Nakama.game.scale.minHeight = GAME_HEIGHT_MIN;
    Nakama.game.scale.maxWidth = GAME_WIDTH_MAX;
    Nakama.game.scale.maxHeight = GAME_HEIGHT_MAX;
    Nakama.game.scale.pageAlignHorizontally = true;
    Nakama.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;

    Nakama.game.time.advancedTiming = true;

    Nakama.game.load.atlasJSONHash('assets', 'Assets/assets.png', 'Assets/assets.json');
    Nakama.game.load.image('background', 'Assets/Map1.png');
}

// initialize the game
var create = function() {
    const SPACESHIP_1_SPAWN_CORDINATE_X = 200;
    const SPACESHIP_1_SPAWN_CORDINATE_Y = 200;
    Nakama.game.physics.startSystem(Phaser.Physics.ARCADE);
    Nakama.keyboard = Nakama.game.input.keyboard;

    Nakama.game.add.sprite(0, 0, 'background');
    Nakama.player = Nakama.game.add.sprite(
        SPACESHIP_1_SPAWN_CORDINATE_X,
        SPACESHIP_1_SPAWN_CORDINATE_Y,
        'assets',
        'Spaceship1-Player.png'
    );
}

// update game state each frame
var update = function() {
    if (Nakama.keyboard.isDown(Phaser.Keyboard.UP) && Nakama.player.position.y > 0) {
        Nakama.player.position.y -= 10;
    } else if (Nakama.keyboard.isDown(Phaser.Keyboard.DOWN)
                && Nakama.player.position.y < GAME_HEIGHT_MAX - SPACESHIP_SIZE_HEIGHT) {
        Nakama.player.position.y += 10;
    }
    if (Nakama.keyboard.isDown(Phaser.Keyboard.LEFT) && Nakama.player.position.x > 0) {
        Nakama.player.position.x -= 10;
    } else if (Nakama.keyboard.isDown(Phaser.Keyboard.RIGHT)
                && Nakama.player.position.x < GAME_WIDTH_MAX - SPACESHIP_SIZE_WIDTH) {
        Nakama.player.position.x += 10;
    }
}

// before camera render (mostly for debug)
var render = function() {}
