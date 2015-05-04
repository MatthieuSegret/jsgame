'use strict';

// StaticOject
var StaticObject = function(game, x, y, image_name) {
  Phaser.Sprite.call(this, game, x, y, image_name);
  //this.anchor.setTo(1, 1);
  this.game.physics.enable(this, Phaser.Physics.ARCADE);
  this.body.collideWorldBounds = true;
  this.body.overlapX = 1;
  this.body.overlapY = 1;
}

StaticObject.prototype = Object.create(Phaser.Sprite.prototype);
StaticObject.prototype.constructor = StaticObject;

module.exports = StaticObject;
