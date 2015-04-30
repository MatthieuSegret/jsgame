'use strict';

// Game
var game = new Phaser.Game(640, 480, Phaser.AUTO, 'jsgame');
game.transparent = true;

function Load() {}
Load.prototype = {
  preload: function() {
    this.game.load.image('background', 'images/background.png');
    this.player = new Player(this.game, 570, 400);
    this.ruby = new Ruby(this.game, 45, 95);
  },

  create: function() {
    this.initKey();
    this.game.add.sprite(0, 0, 'background');
    this.player.draw();
    this.ruby.draw();
  },

  update: function() {
    if (this.upKey.isDown) { this.player.moveUp(); }
    if (this.downKey.isDown) { this.player.moveDown(); }
    if (this.leftKey.isDown) { this.player.moveLeft(); }
    if (this.rightKey.isDown) { this.player.moveRight(); }
  },

  initKey: function() {
    this.upKey = game.input.keyboard.addKey(Phaser.Keyboard.UP);
    this.downKey = game.input.keyboard.addKey(Phaser.Keyboard.DOWN);
    this.leftKey = game.input.keyboard.addKey(Phaser.Keyboard.LEFT);
    this.rightKey = game.input.keyboard.addKey(Phaser.Keyboard.RIGHT);
  }
};
