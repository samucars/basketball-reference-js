const Crawler = require('./crawler');

class Games extends Crawler {
  async get() { // date
    try {
      const resource = 'boxscores/?month=12&day=13&year=2018';
      const filter = '.game_summaries';
      const html = await this.request(resource, filter);
      const $ = this.cheerio.load(html);
      const games = $('.game_summary');
      console.log(games);
    } catch (error) {
      console.log(error);
    }
  }

  playByPlay(url) {
    console.log(this.crawler);
    return url;
  }
}

module.exports = Games;
