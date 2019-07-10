const assert = require('assert');
const { stub } = require('sinon');

const Crawler = require('../src/crawler');
const Games = require('../src/games');

const mocks = require('./mocks');

describe('A function that contains play-by-play of the game', () => {
  let stubRequest;
  beforeEach(() => {
    stubRequest = stub(Crawler, 'request');
  });
  afterEach(() => {
    stubRequest.restore();
  });
  describe('when execute a request successfully', () => {
    let playByPlay;
    beforeEach(async () => {
      stubRequest.callsFake(() => Promise.resolve(mocks.playByPlay));
      playByPlay = await Games.playByPlay('/boxscores/pbp/201812130HOU.html');
    });
    it('should return the data of the first quarter', () => {
      const [firstQuarter] = playByPlay;
      assert.equal(firstQuarter.quarter, 1);
      assert.equal(firstQuarter.plays[0].time, '11:35.0');
      assert.equal(firstQuarter.plays[0].team, 'LA Lakers');
      assert.equal(firstQuarter.plays[0].play, 'L. James makes 2-pt jump shot from 11 ft');
      assert.equal(firstQuarter.plays[0].scoring, 2);

      assert.equal(firstQuarter.plays[1].time, '11:17.0');
      assert.equal(firstQuarter.plays[1].team, 'Houston');
      assert.equal(firstQuarter.plays[1].play, 'C. Paul misses 2-pt jump shot from 16 ft');
      assert.equal(firstQuarter.plays[1].scoring, 0);
    });
    it('should return the data of the second quarter', () => {
      const secondQuarter = playByPlay[1];
      assert.equal(secondQuarter.quarter, 2);
      assert.equal(secondQuarter.plays[0].time, '11:44.0');
      assert.equal(secondQuarter.plays[0].team, 'Houston');
      assert.equal(secondQuarter.plays[0].play, 'G. Green misses 3-pt jump shot from 25 ft');
      assert.equal(secondQuarter.plays[0].scoring, 0);

      assert.equal(secondQuarter.plays[1].time, '11:43.0');
      assert.equal(secondQuarter.plays[1].team, 'LA Lakers');
      assert.equal(secondQuarter.plays[1].play, 'Defensive rebound by L. Stephenson');
      assert.equal(secondQuarter.plays[1].scoring, 0);
    });
    it('should return the data of the third quarter', () => {
      const thirdQuarter = playByPlay[2];
      assert.equal(thirdQuarter.quarter, 3);
      assert.equal(thirdQuarter.plays[0].time, '11:43.0');
      assert.equal(thirdQuarter.plays[0].team, 'Houston');
      assert.equal(thirdQuarter.plays[0].play, 'J. Harden makes 2-pt layup from 3 ft');
      assert.equal(thirdQuarter.plays[0].scoring, 2);

      assert.equal(thirdQuarter.plays[1].time, '11:21.0');
      assert.equal(thirdQuarter.plays[1].team, 'LA Lakers');
      assert.equal(thirdQuarter.plays[1].play, 'J. Hart makes 3-pt jump shot from 24 ft          (assist by L. James)');
      assert.equal(thirdQuarter.plays[1].scoring, 3);
    });
    it('should return the data of the fourth quarter', () => {
      const fourthQuarter = playByPlay[3];
      assert.equal(fourthQuarter.quarter, 4);
      assert.equal(fourthQuarter.plays[0].time, '11:48.0');
      assert.equal(fourthQuarter.plays[0].team, 'LA Lakers');
      assert.equal(fourthQuarter.plays[0].play, 'L. Ball misses 3-pt jump shot from 25 ft');
      assert.equal(fourthQuarter.plays[0].scoring, 0);

      assert.equal(fourthQuarter.plays[1].time, '11:46.0');
      assert.equal(fourthQuarter.plays[1].team, 'LA Lakers');
      assert.equal(fourthQuarter.plays[1].play, 'Offensive rebound by T. Chandler');
      assert.equal(fourthQuarter.plays[1].scoring, 0);
    });
  });
});
