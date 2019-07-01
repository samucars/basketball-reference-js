const cheerio = require('cheerio');

const Crawler = require('../crawler');

const getUrl = date => `boxscores/?month=${date.getMonth() + 1}&day=${date.getDate()}&year=${date.getFullYear()}`;

module.exports = async (date) => {
  if (!date || date.constructor.name !== 'Date') {
    throw new Error('invalid date');
  }
  const resource = getUrl(date);
  const filter = '.game_summaries';
  const html = await Crawler.request(resource, filter);
  console.log(html);
  if (!html) {
    return [];
  }
  const $ = cheerio.load(html);
  const games = [];
  // jquery forced me to this
  $('.game_summary')
    .each((index, element) => {
      const loserDiv = $(element).find('.loser');
      const winerDiv = $(element).find('.winner');
      const loserTeam = $(loserDiv).find('td a[href*="/teams/"]').text();
      const loserScore = Number($(loserDiv).find('.right').first().text());
      const winerTeam = $(winerDiv).find('td a').text();
      const winerScore = Number($(winerDiv).find('.right').first().text());
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
};
