/// <reference path="../libs/phaser.d.ts" />

type Config = {up: number, down: number, left: number, right: number}

class Player {
    private sprite: Phaser.Sprite;
    private game: Phaser.Game;
    private configs: Config;

    constructor(game, x, y, spriteName, configs) {
        this.game = game;
        this.sprite = game.add.sprite(
            x,
            y,
            'assets',
            spriteName
        );
        this.configs = configs;
    }

    public update(): void {
        if (Nakama.keyboard.isDown(this.configs.up) && this.sprite.position.y > 0) {
            this.sprite.position.y -= 10;
        } else if (Nakama.keyboard.isDown(this.configs.down)
                    && this.sprite.position.y < GAME_HEIGHT_MAX - SPACESHIP_SIZE_HEIGHT) {
            this.sprite.position.y += 10;
        }
        if (Nakama.keyboard.isDown(this.configs.left) && this.sprite.position.x > 0) {
            this.sprite.position.x -= 10;
        } else if (Nakama.keyboard.isDown(this.configs.right)
                    && this.sprite.position.x < GAME_WIDTH_MAX - SPACESHIP_SIZE_WIDTH) {
            this.sprite.position.x += 10;
        }
    }
}
