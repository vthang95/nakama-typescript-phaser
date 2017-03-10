/// <reference path="../libs/phaser.d.ts" />
/// <reference path="../libs/p2.d.ts" />
var GAME_WIDTH_MIN = 320;
var GAME_HEIGHT_MIN = 480;
var GAME_WIDTH_MAX = 640;
var GAME_HEIGHT_MAX = 960;
var SPACESHIP_SIZE_WIDTH = 78;
var SPACESHIP_SIZE_HEIGHT = 78;
var Nakama = (function () {
    function Nakama() {
        this.game = new Phaser.Game(GAME_WIDTH_MAX, GAME_HEIGHT_MAX, Phaser.AUTO, 'content', {
            preload: this.preload,
            create: this.create,
            render: this.render,
            update: this.update
        });
    }
    Nakama.prototype.preload = function () {
        this.game.scale.minWidth = GAME_WIDTH_MIN;
        this.game.scale.minHeight = GAME_HEIGHT_MIN;
        this.game.scale.maxWidth = GAME_WIDTH_MAX;
        this.game.scale.maxHeight = GAME_HEIGHT_MAX;
        this.game.scale.pageAlignHorizontally = true;
        this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        this.game.time.advancedTiming = true;
        this.game.load.atlasJSONHash('assets', 'Assets/assets.png', 'Assets/assets.json');
        this.game.load.image('background', 'Assets/Map1.png');
    };
    Nakama.prototype.create = function () {
        var SPACESHIP_1_SPAWN_CORDINATE_X = 200;
        var SPACESHIP_1_SPAWN_CORDINATE_Y = 200;
        this.game.physics.startSystem(Phaser.Physics.ARCADE);
        this.keyboard = this.game.input.keyboard;
        this.game.add.sprite(0, 0, 'background');
        this.player1 = this.game.add.sprite(SPACESHIP_1_SPAWN_CORDINATE_X, SPACESHIP_1_SPAWN_CORDINATE_Y, 'assets', 'Spaceship1-Player.png');
    };
    Nakama.prototype.render = function () {
    };
    Nakama.prototype.update = function () {
        if (this.keyboard.isDown(Phaser.Keyboard.UP)) {
            this.player1.position.y -= 10;
        }
    };
    return Nakama;
}());
window.onload = function () {
    var nakama = new Nakama();
};
//# sourceMappingURL=app.js.map