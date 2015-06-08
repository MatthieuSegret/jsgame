'use strict';

var Ruby = require('../prefabs/ruby');
var Player = require('../prefabs/player');
var Monster = require('../prefabs/monster');
var monstersData = require('../../datas/monsters.json');

// Play
function Play() {};

Play.prototype = {
  preload: function() {
    this.initKey();
  },

  create: function() {
    this.game.add.sprite(0, 0, 'background');

    this.player = new Player(this.game, 570, 400);
    this.ruby = new Ruby(this.game, 45, 95);
    this.monsters = Monster.build(this.game, monstersData);

    // Ajoute les objets sur la scene de jeu
    this.game.add.existing(this.player);
    this.game.add.existing(this.ruby);
    _.each(this.monsters, _.bind(function(monster) {
      monster.target = this.player; // Le monstre suit par défaut le joueur
      this.game.add.existing(monster);
    }, this));
  },

  update: function() {
    _.each(this.monsters, _.bind(function(monster) {
      monster.execute(this.player);
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
    //var dark = _(this.monsters).last();
    //this.game.debug.body(dark);
  },

  initKey: function() {
    this.upKey = this.game.input.keyboard.addKey(Phaser.Keyboard.UP);
    this.downKey = this.game.input.keyboard.addKey(Phaser.Keyboard.DOWN);
    this.leftKey = this.game.input.keyboard.addKey(Phaser.Keyboard.LEFT);
    this.rightKey = this.game.input.keyboard.addKey(Phaser.Keyboard.RIGHT);
  }
};

module.exports = Play;
