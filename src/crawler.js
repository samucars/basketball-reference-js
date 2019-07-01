const axios = require('axios');
const cheerio = require('cheerio');

const baseUrl = 'https://www.basketball-reference.com';

const request = async (resource, filter) => {
  const response = await axios.get(`${baseUrl}/${resource}`);
  const $ = cheerio.load(response.data);
  return $(filter).html();
};

module.exports = {
  request
};
