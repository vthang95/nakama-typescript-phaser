/// <reference path="../libs/phaser.d.ts" />
/// <reference path="../libs/p2.d.ts" />

const GAME_WIDTH_MIN = 320;
const GAME_HEIGHT_MIN = 480;
const GAME_WIDTH_MAX = 640;
const GAME_HEIGHT_MAX = 960;
const SPACESHIP_SIZE_WIDTH = 78;
const SPACESHIP_SIZE_HEIGHT = 78;

class Nakama {
    public game: Phaser.Game;
    public keyboard: Phaser.Keyboard;
    public player1: Phaser.Sprite;

    constructor() {
        this.game = new Phaser.Game(GAME_WIDTH_MAX, GAME_HEIGHT_MAX, Phaser.AUTO,'content', {
            preload: this.preload,
            create: this.create,
            render: this.render,
            update: this.update
        });
    }
    preload() {
        this.game.scale.minWidth = GAME_WIDTH_MIN;
        this.game.scale.minHeight = GAME_HEIGHT_MIN;
        this.game.scale.maxWidth = GAME_WIDTH_MAX;
        this.game.scale.maxHeight = GAME_HEIGHT_MAX;
        this.game.scale.pageAlignHorizontally = true;
        this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        this.game.time.advancedTiming = true;

        this.game.load.atlasJSONHash('assets', 'Assets/assets.png', 'Assets/assets.json');
        this.game.load.image('background', 'Assets/Map1.png');
    }

    create() {
        const SPACESHIP_1_SPAWN_CORDINATE_X = 200;
        const SPACESHIP_1_SPAWN_CORDINATE_Y = 200;
        this.game.physics.startSystem(Phaser.Physics.ARCADE);
        this.keyboard = this.game.input.keyboard;

        this.game.add.sprite(0, 0, 'background');
        this.player1 = this.game.add.sprite(
            SPACESHIP_1_SPAWN_CORDINATE_X,
            SPACESHIP_1_SPAWN_CORDINATE_Y,
            'assets',
            'Spaceship1-Player.png'
        );
    }

    render() {

    }

    update() {
        if (this.keyboard.isDown(Phaser.Keyboard.UP)) {
            this.player1.position.y -= 10;
        }
    }
}

window.onload = function() {
    let nakama = new Nakama();

}
