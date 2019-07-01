const cheerio = require('cheerio');

const Crawler = require('../crawler');

module.exports = async (url) => {
  const html = await Crawler.request(url, '.table_outer_container');
  const $ = cheerio.load(html);
};
