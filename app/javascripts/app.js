'use strict';

window.onload = function () {
  game.state.add('load', Load);
  game.state.start('load');
};
