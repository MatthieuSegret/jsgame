'use strict';

var Ruby = require('./ruby');
var Player = require('./player');
var Monster = require('./monster');

// Load
function Load() {};

Load.prototype = {
  preload: function() {
    this.game.load.image('background', 'images/background.png');
    this.player = new Player(this.game, 570, 400);
    this.ruby = new Ruby(this.game, 45, 95);
    this.monster = new Monster(this.game, 100, 140);
  },

  create: function() {
    this.initKey();
    this.game.add.sprite(0, 0, 'background');
    this.player.draw();
    this.ruby.draw();
    this.monster.draw();
  },

  update: function() {
    if (this.upKey.isDown) { this.player.moveUp(); }
    if (this.downKey.isDown) { this.player.moveDown(); }
    if (this.leftKey.isDown) { this.player.moveLeft(); }
    if (this.rightKey.isDown) { this.player.moveRight(); }

    this.monster.follow(this.player);
  },

  initKey: function() {
    this.upKey = this.game.input.keyboard.addKey(Phaser.Keyboard.UP);
    this.downKey = this.game.input.keyboard.addKey(Phaser.Keyboard.DOWN);
    this.leftKey = this.game.input.keyboard.addKey(Phaser.Keyboard.LEFT);
    this.rightKey = this.game.input.keyboard.addKey(Phaser.Keyboard.RIGHT);
  }
};

module.exports = Load;
