// const assert = require('assert');

const Crawler = require('../src/crawler');

describe('A crawler', () => {
  it('should list page', async () => {
    const crawler = new Crawler();
    const page = await crawler.request('boxscores/?month=12&day=13&year=2018', '.game_summary');
    console.log(page);
  });
});
