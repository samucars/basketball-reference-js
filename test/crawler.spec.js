const assert = require('assert');
const axios = require('axios');
const cheerio = require('cheerio');
const { stub } = require('sinon');

const Crawler = require('../src/crawler');

const mocks = require('./mocks');

describe('A crawler', () => {
  let stubAxios;
  let stubCheerio;
  beforeEach(() => {
    stubAxios = stub(axios, 'get');
    stubCheerio = stub(cheerio, 'load').callsFake(() => () => ({ html: () => mocks.games }));
  });

  afterEach(() => {
    stubAxios.restore();
    stubCheerio.restore();
  });

  it('should list page', async () => {
    stubAxios.callsFake(() => Promise.resolve({ data: mocks.games }));
    const html = await Crawler.request('boxscores/?month=12&day=13&year=2018', '.game_summary');

    assert.equal(stubAxios.firstCall.args[0], 'https://www.basketball-reference.com/boxscores/?month=12&day=13&year=2018');
    assert.equal(stubCheerio.firstCall.args[0], mocks.games);
    stubCheerio.restore();

    const $ = cheerio.load(html);
    const loserTeam = $('.loser td a[href*="/teams/"]').text();
    const winnerTeam = $('.winner td a').text();

    assert.equal(loserTeam, 'LA Lakers');
    assert.equal(winnerTeam, 'Houston');
  });
});
