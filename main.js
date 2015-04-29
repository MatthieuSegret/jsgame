'use strict';

window.onload = function () {
  var game = new Phaser.Game(640, 480, Phaser.AUTO, 'jsgame');
  game.transparent = true;

  function Load() {}
  Load.prototype = {
    preload: function() {
      this.game.load.image('background', 'images/background.png');
      this.game.load.image('player', 'images/player.png');
    },

    create: function() {
      this.game.add.sprite(0, 0, 'background');
      this.player = this.game.add.sprite(570, 400, 'player');

      this.upKey = game.input.keyboard.addKey(Phaser.Keyboard.UP);
      this.downKey = game.input.keyboard.addKey(Phaser.Keyboard.DOWN);
      this.leftKey = game.input.keyboard.addKey(Phaser.Keyboard.LEFT);
      this.rightKey = game.input.keyboard.addKey(Phaser.Keyboard.RIGHT);
    },

    update: function() {
      if (this.upKey.isDown) {
        this.player.y -= 3;
      }
      else if (this.downKey.isDown) {
        this.player.y += 3;
      }
      if (this.leftKey.isDown) {
        this.player.x -= 3;
      }
      else if (this.rightKey.isDown) {
        this.player.x += 3;
      }
    }
  };

  game.state.add('load', Load);
  game.state.start('load');
};
