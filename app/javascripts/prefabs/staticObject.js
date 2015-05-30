'use strict';

// StaticOject
var StaticObject = function(game, x, y, image_name) {
  Phaser.Sprite.call(this, game, x, y, image_name);
  this.game.physics.enable(this, Phaser.Physics.ARCADE);
  this.body.collideWorldBounds = true;
  this.body.setSize(this.body.sourceWidth - 14, this.body.sourceHeight - 14, 8, 8);
}

StaticObject.prototype = Object.create(Phaser.Sprite.prototype);
StaticObject.prototype.constructor = StaticObject;

module.exports = StaticObject;
