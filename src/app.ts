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
    public static keyboard: Phaser.Keyboard;
    private player1: Player;
    private player2: Player;

    constructor() {
        this.game = new Phaser.Game(GAME_WIDTH_MAX, GAME_HEIGHT_MAX, Phaser.CANVAS, 'content', {
            preload: this.preload,
            create: this.create,
            render: this.render,
            update: this.update
        });
    }
    public preload(): void {
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

    public create(): void {
        const SPACESHIP_1_SPAWN_CORDINATE_X = GAME_WIDTH_MAX / 2 - SPACESHIP_SIZE_WIDTH / 2;
        const SPACESHIP_1_SPAWN_CORDINATE_Y = GAME_HEIGHT_MAX / 2 - SPACESHIP_SIZE_HEIGHT / 2;
        this.game.physics.startSystem(Phaser.Physics.ARCADE);
        Nakama.keyboard = this.game.input.keyboard;

        this.game.add.sprite(0, 0, 'background');

        this.player1 = new Player(this.game, SPACESHIP_1_SPAWN_CORDINATE_X, SPACESHIP_1_SPAWN_CORDINATE_Y, 'Spaceship1-Player.png', {
            up: Phaser.Keyboard.UP,
            down: Phaser.Keyboard.DOWN,
            left: Phaser.Keyboard.LEFT,
            right: Phaser.Keyboard.RIGHT
        });

        this.player2 = new Player(this.game, SPACESHIP_1_SPAWN_CORDINATE_X, SPACESHIP_1_SPAWN_CORDINATE_Y, 'Spaceship2-Player.png', {
            up: Phaser.Keyboard.W,
            down: Phaser.Keyboard.S,
            left: Phaser.Keyboard.A,
            right: Phaser.Keyboard.D
        });

    }

    public render(): void {

    }

    public update(): void {
        let listPlayers = [this.player1, this.player2];
        for (let i = 0; i < listPlayers.length; i++) {
            listPlayers[i].update();
        }
    }
}

window.onload = function() {
    let nakama = new Nakama();
}
