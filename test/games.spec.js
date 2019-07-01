const assert = require('assert');
const { stub } = require('sinon');

const Crawler = require('../src/crawler');
const Games = require('../src/games');

const mocks = require('./mocks');

describe('A class that contains information about the game', () => {
  let stubRequest;
  beforeEach(() => {
    stubRequest = stub(Crawler, 'request');
  });
  afterEach(() => {
    stubRequest.restore();
  });

  it('should return an exception if the date is invalid', async () => {
    try {
      await Games.get('tchanana');
    } catch (error) {
      assert.equal(error.message, 'invalid date');
    }
  });
  it('should return a empty array if not find games', async () => {
    const games = await Games.get(new Date(2019, 6, 6));
    assert.equal(games.length, 0);
  });
  it('should list games', async () => {
    stubRequest.callsFake(() => Promise.resolve(mocks.games));
    const games = await Games.get(new Date(2018, 11, 13));

    assert.equal(stubRequest.firstCall.args[0], 'boxscores/?month=12&day=13&year=2018');
    assert.equal(games.constructor.name, 'Array');
    assert.equal(games[0].game, 'LA Lakers vs Houston');
    assert.equal(games[0].score[0], 111);
    assert.equal(games[0].score[1], 126);
    assert.equal(games[0].statistics.boxScores, '/boxscores/201812130HOU.html');
    assert.equal(games[0].statistics.playByPlay, '/boxscores/pbp/201812130HOU.html');
    assert.equal(games[0].statistics.shotChart, '/boxscores/shot-chart/201812130HOU.html');
  }).timeout(5000);
});
