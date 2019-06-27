const assert = require('assert');

const Games = require('../src/games');

describe('A class that contains information about the game', () => {
  it.only('should list games', () => {
    const games = new Games();
    const nbaGames = games.get(new Date());
    assert.equal(nbaGames.constructor.name, 'Array');
    assert.equal(nbaGames[0].game, 'LA Lakers vs Houston');
    assert.equal(nbaGames[0].url, '201812130HOU.html');
  });

  // it('should list the play-by-play of the game', () => {
  //   const games = new Games(crawler);
  //   const [game] = games.get(new Date());
  //   const playByPlay = games.playByPlay(game.url);
  //   assert.equal(playByPlay, game.url);
  // });
});
