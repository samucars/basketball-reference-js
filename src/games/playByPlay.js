const cheerio = require('cheerio');

const Crawler = require('../crawler');

const quarters = ['q1', 'q2', 'q3', 'q4'];

const normalizeQuarter = quarter => Number(quarter.replace('q', ''));
const getTeamPositionTable = element => (
  element.find('td:nth-child(2)').text().trim() !== ''
    ? 2
    : 6
);

module.exports = async (url) => {
  const html = await Crawler.request(url, '.table_outer_container');
  const $ = cheerio.load(html);
  const playByPlay = [];
  let firstTeam = null;
  let secondTeam = null;
  let quarterIndex = -1;
  $('table tr').each((index, element) => {
    const quarter = $(element).attr('id');
    const isQuarter = quarters.indexOf(quarter) >= 0;
    if (isQuarter) {
      quarterIndex += 1;
      return playByPlay.push({ quarter: normalizeQuarter(quarter), plays: [] });
    }

    const tableHead = $(element).attr('class');
    if (tableHead) {
      firstTeam = $(element).find('th:nth-child(2)').attr('aria-label');
      secondTeam = $(element).find('th:nth-child(6)').attr('aria-label');
      return null;
    }

    const text = $(element).find('td:nth-child(2)').text().trim();
    const isNotTeam = text.includes('Jump ball') || text.includes('quarter');
    if (isNotTeam) return null;

    const teamPositionTable = getTeamPositionTable($(element));
    const play = {
      time: $(element).find('td:nth-child(1)').text().trim(),
      team: teamPositionTable === 2 ? firstTeam : secondTeam,
      play: $(element).find(`td:nth-child(${teamPositionTable})`).text().trim(),
      scoring: Number($(element)
        .find('.bbr-play-score:nth-child(3)').text().trim()
        .replace('+', '')),
    };
    return playByPlay[quarterIndex].plays.push(play);
  });
  return playByPlay;
};
