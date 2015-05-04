'use strict';

var Ruby = require('../prefabs/ruby');
var Player = require('../prefabs/player');
var Monster = require('../prefabs/monster');

// Play
function Play() {};

Play.prototype = {
  preload: function() {
    this.initKey();
  },

  create: function() {
    this.game.add.sprite(0, 0, 'background');

    this.player = new Player(this.game, 570, 400);
    this.game.add.existing(this.player);

    this.ruby = new Ruby(this.game, 45, 95);
    this.game.add.existing(this.ruby);

    this.monsters = [];
    var m;
    _(4).times(_.bind(function(n){
      m = new Monster(this.game, _.random(10, 450), _.random(10, 450));
      this.monsters.push(m);
      this.game.add.existing(m);
    }, this));
  },

  update: function() {
    _.each(this.monsters, _.bind(function(monster) {
      monster.follow(this.player);
      if(monster.touch(this.player)) {
        this.game.state.start('gameover', false);
      }
    }, this));

    if(this.player.touch(this.ruby)) {
      this.game.state.start('win', false);
    }

    if (this.upKey.isDown) { this.player.moveUp(); }
    if (this.downKey.isDown) { this.player.moveDown(); }
    if (this.leftKey.isDown) { this.player.moveLeft(); }
    if (this.rightKey.isDown) { this.player.moveRight(); }
  },

  render: function() {
    //this.game.debug.bodyInfo(this.player, 16, 24);
    //this.game.debug.spriteInfo(this.player);
    //this.game.debug.body(this.player);
    //this.game.debug.body(this.ruby);
  },

  initKey: function() {
    this.upKey = this.game.input.keyboard.addKey(Phaser.Keyboard.UP);
    this.downKey = this.game.input.keyboard.addKey(Phaser.Keyboard.DOWN);
    this.leftKey = this.game.input.keyboard.addKey(Phaser.Keyboard.LEFT);
    this.rightKey = this.game.input.keyboard.addKey(Phaser.Keyboard.RIGHT);
  }
};

module.exports = Play;
