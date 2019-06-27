const Axios = require('axios');
const Cheerio = require('cheerio');

class Crawler {
  constructor(axios = Axios, cheerio = Cheerio) {
    this.axios = axios;
    this.cheerio = cheerio;
    this.baseUrl = 'https://www.basketball-reference.com';
  }

  async request(resource, filter) {
    const response = await this.axios.get(`${this.baseUrl}/${resource}`);
    const html = response.data;
    const $ = this.cheerio.load(html);
    return $(filter).html();
  }

  cheerio() {
    return this.cheerio;
  }
}

module.exports = Crawler;
