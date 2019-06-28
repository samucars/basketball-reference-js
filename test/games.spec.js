const assert = require('assert');

const Games = require('../src/games');

describe('A class that contains information about the game', () => {
  it('should return an exception if the date is invalid', async () => {
    try {
      await new Games().get('tchanana');
    } catch (error) {
      assert.equal(error.message, 'invalid date');
    }
  });

  it('should return a empty array if not find games', async () => {
    const games = new Games();
    const nbaGames = await games.get(new Date(2019, 6, 6));
    assert.equal(nbaGames.length, 0);
  }).timeout(5000);

  it('should list games', async () => {
    const games = new Games();
    const nbaGames = await games.get(new Date(2018, 11, 13));
    assert.equal(nbaGames.constructor.name, 'Array');
    assert.equal(nbaGames[0].game, 'LA Lakers vs Houston');
    assert.equal(nbaGames[0].score[0], 111);
    assert.equal(nbaGames[0].score[1], 126);
    assert.equal(nbaGames[0].statistics.boxScores, '/boxscores/201812130HOU.html');
    assert.equal(nbaGames[0].statistics.playByPlay, '/boxscores/pbp/201812130HOU.html');
    assert.equal(nbaGames[0].statistics.shotChart, '/boxscores/shot-chart/201812130HOU.html');
  }).timeout(5000);

  // it('should list the play-by-play of the game', () => {
  //   const games = new Games(crawler);
  //   const [game] = games.get(new Date());
  //   const playByPlay = games.playByPlay(game.url);
  //   assert.equal(playByPlay, game.url);
  // });
});
