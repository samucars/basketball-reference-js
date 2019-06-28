const assert = require('assert');
const cheerio = require('cheerio');

const Crawler = require('../src/crawler');

describe('A crawler', () => {
  it('should list page', async () => {
    const crawler = new Crawler();
    const page = await crawler.request('boxscores/?month=12&day=13&year=2018', '.game_summary');
    const $ = cheerio.load(page);
    const loserTeam = $('.loser td a[href*="/teams/"]').text();
    const winnerTeam = $('.winner td a').text();

    assert.equal(loserTeam, 'LA Lakers');
    assert.equal(winnerTeam, 'Houston');
  }).timeout(5000);
});
