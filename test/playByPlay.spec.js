const assert = require('assert');
const { stub } = require('sinon');

const Crawler = require('../src/crawler');
const Games = require('../src/games');

const mocks = require('./mocks');

describe('A function that contains play-by-play of the game', () => {
  let stubRequest;
  beforeEach(() => {
    stubRequest = stub(Crawler, 'request');
  });
  afterEach(() => {
    stubRequest.restore();
  });
  it('should', async () => {
    stubRequest.callsFake(() => Promise.resolve(mocks.playByPlay));
    const playByPlay = await Games.playByPlay('/boxscores/pbp/201812130HOU.html');
  });
});
