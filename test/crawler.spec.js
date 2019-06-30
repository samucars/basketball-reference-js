const assert = require('assert');
const cheerio = require('cheerio');

const mocks = require('./mocks');
const Crawler = require('../src/crawler');

describe('A crawler', () => {
  const mockSuccessAxios = { get: () => Promise.resolve({ data: mocks.games }) };
  const mockErrorAxios = { get: () => Promise.reject(new Error('aaaaa')) };
  const mockCheerio = { load: () => () => ({ html: () => mocks.games }) };

  it('should list page', async () => {
    const crawler = new Crawler(mockSuccessAxios, mockCheerio);
    const html = await crawler.request('boxscores/?month=12&day=13&year=2018', '.game_summary');
    const $ = cheerio.load(html);
    const loserTeam = $('.loser td a[href*="/teams/"]').text();
    const winnerTeam = $('.winner td a').text();

    assert.equal(loserTeam, 'LA Lakers');
    assert.equal(winnerTeam, 'Houston');
  }).timeout(5000);
  it('should return exception if error request', async () => {
    try {
      const crawler = new Crawler(mockErrorAxios, mockCheerio);
      await crawler.request('boxscores/?month=12&day=13&year=2018', '.game_summary');
    } catch (error) {
      assert.equal(error.message, 'aaaaa');
    }
  });
  it('should return a cheerio lib', () => {
    const crawler = new Crawler(null, mockCheerio);
    assert.equal(crawler.cheerio, mockCheerio);
  });
});
