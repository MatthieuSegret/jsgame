'use strict';

window.onload = function () {

  // Ruby
  var Ruby = function(game, x, y, image_name) {
    this.image_name = image_name || 'ruby';
    this.game = game;
    game.load.image(this.image_name, 'images/' + this.image_name + '.png');
    this._x = x;
    this._y = y;
  }

  Ruby.prototype = {
    draw: function() {
      this.image = this.game.add.sprite(this._x, this._y, this.image_name);
    },

    get x() { return this.image.x; },
    set x(newX) { this.image.x = newX; },
    get y() { return this.image.y; },
    set y(newY) { this.image.y = newY; }
  };


  // Player
  var Player = function(game, x, y, image_name) {
    this.image_name = image_name || 'player';
    this.game = game;
    game.load.image(this.image_name, 'images/' + this.image_name + '.png');
    this._x = x;
    this._y = y;
  }

  Player.prototype = {
    draw: function() {
      this.image = this.game.add.sprite(this._x, this._y, this.image_name);
    },

    moveUp: function() {
      this.y -= 3;
    },

    moveDown: function() {
      this.y += 3;
    },

    moveLeft: function() {
      this.x -= 3;
    },

    moveRight: function() {
      this.x += 3;
    },

    get x() { return this.image.x; },
    set x(newX) { this.image.x = newX; },
    get y() { return this.image.y; },
    set y(newY) { this.image.y = newY; }
  };


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

  game.state.add('load', Load);
  game.state.start('load');
};
