const Crawler = require('./crawler');

const getUrl = date => `boxscores/?month=${date.getMonth() + 1}&day=${date.getDate()}&year=${date.getFullYear()}`;

class Games extends Crawler {
  async get(date) {
    if (!date || date.constructor.name !== 'Date') {
      throw new Error('invalid date');
    }

    try {
      const resource = getUrl(date);
      const filter = '.game_summaries';
      const html = await this.request(resource, filter);
      if (!html) {
        return [];
      }
      const $ = this.cheerio.load(html);
      const games = [];
      // each games
      $('.game_summary')
        .each((index, element) => {
          const loser = $(element).find('.loser');
          const winer = $(element).find('.winner');
          const loserTeam = $(loser).find('td a[href*="/teams/"]').text();
          const loserScore = Number($(loser).find('.right').first().text());
          const winerTeam = $(winer).find('td a').text();
          const winerScore = Number($(winer).find('.right').first().text());
          const boxScores = $(element).find('.links a:nth-child(1)').attr('href');
          const playByPlay = $(element).find('.links a:nth-child(2)').attr('href');
          const shotChart = $(element).find('.links a:nth-child(3)').attr('href');
          games[index] = {
            game: `${loserTeam} vs ${winerTeam}`,
            score: [loserScore, winerScore],
            statistics: {
              boxScores, playByPlay, shotChart
            }
          };
        });
      return games;
    } catch (error) {
      throw error;
    }
  }

  playByPlay(url) {
    console.log(this.crawler);
    return url;
  }
}

module.exports = Games;
