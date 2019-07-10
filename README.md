# basketball-reference-js

[![Build Status](https://travis-ci.org/samucars/basketball-reference-js.svg?branch=master)](https://travis-ci.org/samucars/basketball-reference-js)
[![Coverage Status](https://coveralls.io/repos/github/samucars/basketball-reference-js/badge.svg?branch=master)](https://coveralls.io/github/samucars/basketball-reference-js?branch=master)

A lib to receive data from the [Basketball Reference](https://www.basketball-reference.com) site by json.

## Installation

```
npm install basketball-reference-js
```

## How to use?

``` javascript
const Nba = require('basketball-reference-js');

const games = await Nba.games.get(new Date(2019, 2, 15));

[ { game: 'LA Lakers vs Detroit',
    score: [ 97, 111 ],
    statistics:
     { boxScores: '/boxscores/201903150DET.html',
       playByPlay: '/boxscores/pbp/201903150DET.html',
       shotChart: '/boxscores/shot-chart/201903150DET.html' } },
  { game: 'Phoenix vs Houston',
    score: [ 102, 108 ],
    statistics:
     { boxScores: '/boxscores/201903150HOU.html',
       playByPlay: '/boxscores/pbp/201903150HOU.html',
       shotChart: '/boxscores/shot-chart/201903150HOU.html' } },
  { game: 'Chicago vs LA Clippers',
    score: [ 121, 128 ],
    statistics:
     { boxScores: '/boxscores/201903150LAC.html',
       playByPlay: '/boxscores/pbp/201903150LAC.html',
       shotChart: '/boxscores/shot-chart/201903150LAC.html' } },
       ....
```

## Future implementations

* Add more features to the game object
* Create a team object for interaction with the times
* Improve test coverage
