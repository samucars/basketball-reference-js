const games = `
<div class="game_summary expanded nohover">
<table class="teams">
<tbody>
  <tr class="loser">
    <td><a href="/teams/LAL/2019.html">LA Lakers</a></td>
    <td class="right">111</td>
    <td class="right gamelink"><a href="/boxscores/201812130HOU.html">Final</a></td>
  </tr>
  <tr class="winner">
    <td><a href="/teams/HOU/2019.html">Houston</a></td>
    <td class="right">126</td>
    <td class="right">&#xA0;</td>
  </tr>
</tbody>
</table>

<table>
<thead>
  <tr>
    <th></th>
    <th>1</th><th>2</th><th>3</th><th>4</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td><a href="/teams/LAL/2019.html">LA Lakers</a>&#xA0;</td>
    <td class="center">24</td><td class="center">32</td><td class="center">32</td><td class="center">23</td>
  </tr>
  <tr>
    <td><a href="/teams/HOU/2019.html">Houston</a>&#xA0;</td>
    <td class="center">29</td><td class="center">33</td><td class="center">28</td><td class="center">36</td>
  </tr>
</tbody>
</table>

<p class="links"><a href="/boxscores/201812130HOU.html">Box Score</a> | <a href="/boxscores/pbp/201812130HOU.html">Play-By-Play</a> | <a href="/boxscores/shot-chart/201812130HOU.html">Shot Chart</a></p>

<table class="stats">
<tbody>
  <tr>
    <td><strong>PTS</strong></td>
    <td><a href="/players/h/hardeja01.html">J. Harden</a>-HOU</td>
    <td class="right">50</td>
  </tr>
  <tr>
    <td><strong>TRB</strong></td>
    <td><a href="/players/c/capelca01.html">C. Capela</a>-HOU</td>
    <td class="right">14</td>
  </tr>
</tbody>
</table>
</div>`;

const playByPlay = `
<div class="overthrow table_container" id="div_pbp">
  <table class="suppress_all sortable stats_table" id="pbp" data-cols-to-freeze="1">
    <caption>Play-By-Play Table</caption>
    <tbody>
      <tr class="thead" id="q1">
        <th colspan="6">1st Q</th>
      </tr>
      <tr class="thead">
        <th aria-label="Time" data-stat="Time" class=" center">Time</th>
        <th aria-label="LA Lakers" data-stat="LA Lakers" class=" center">LA Lakers</th>
        <th aria-label data-stat class=" center"></th>
        <th aria-label="Score" data-stat="Score" class=" center">Score</th>
        <th aria-label data-stat class=" center"></th>
        <th aria-label="Houston" data-stat="Houston" class=" center">Houston</th>
      </tr>
      <tr>
        <td>12:00.0</td>
        <td colspan="5" class="center">Jump ball: <a href="/players/m/mcgeeja01.html">J. McGee</a> vs. <a
            href="/players/c/capelca01.html">C. Capela</a> (<a href="/players/h/hartjo01.html">J. Hart</a> gains
          possession)</td>
      </tr>
      <tr>
        <td>11:35.0</td>
        <td class="bbr-play-score"><a href="/players/j/jamesle01.html">L. James</a> makes 2-pt jump shot from 11 ft</td>
        <td class="bbr-play-score">+2</td>
        <td class=" center">2-0</td>
        <td>&#xA0;</td>
        <td>&#xA0;</td>
      </tr>
      <tr>
        <td>11:17.0</td>
        <td>&#xA0;</td>
        <td>&#xA0;</td>
        <td class=" center">2-0</td>
        <td class>&#xA0;</td>
        <td class><a href="/players/p/paulch01.html">C. Paul</a> misses 2-pt jump shot from 16 ft</td>
      </tr>
      <tr>
        <td>0:00.0</td>
        <td colspan="5" class="center">End of 1st quarter</td>
      </tr>
      <tr class="thead" id="q2">
        <th colspan="6">2nd Q</th>
      </tr>
      <tr class="thead">
        <th aria-label="Time" data-stat="Time" class=" center">Time</th>
        <th aria-label="LA Lakers" data-stat="LA Lakers" class=" center">LA Lakers</th>
        <th aria-label data-stat class=" center"></th>
        <th aria-label="Score" data-stat="Score" class=" center">Score</th>
        <th aria-label data-stat class=" center"></th>
        <th aria-label="Houston" data-stat="Houston" class=" center">Houston</th>
      </tr>
      <tr>
        <td>12:00.0</td>
        <td colspan="5" class="center">Start of 2nd quarter</td>
      </tr>
      <tr>
        <td>11:44.0</td>
        <td>&#xA0;</td>
        <td>&#xA0;</td>
        <td class=" center">24-29</td>
        <td class>&#xA0;</td>
        <td class><a href="/players/g/greenge01.html">G. Green</a> misses 3-pt jump shot from 25 ft</td>
      </tr>
      <tr>
        <td>11:43.0</td>
        <td class>Defensive rebound by <a href="/players/s/stephla01.html">L. Stephenson</a></td>
        <td class>&#xA0;</td>
        <td class=" center">24-29</td>
        <td>&#xA0;</td>
        <td>&#xA0;</td>
      </tr>
      <tr>
        <td>0:00.0</td>
        <td colspan="5" class="center">End of 2nd quarter</td>
      </tr>
      <tr class="thead" id="q3">
        <th colspan="6">3rd Q</th>
      </tr>
      <tr class="thead">
        <th aria-label="Time" data-stat="Time" class=" center">Time</th>
        <th aria-label="LA Lakers" data-stat="LA Lakers" class=" center">LA Lakers</th>
        <th aria-label data-stat class=" center"></th>
        <th aria-label="Score" data-stat="Score" class=" center">Score</th>
        <th aria-label data-stat class=" center"></th>
        <th aria-label="Houston" data-stat="Houston" class=" center">Houston</th>
      </tr>
      <tr>
        <td>12:00.0</td>
        <td colspan="5" class="center">Start of 3rd quarter</td>
      </tr>
      <tr>
        <td>11:43.0</td>
        <td>&#xA0;</td>
        <td>&#xA0;</td>
        <td class=" center">56-64</td>
        <td class="bbr-play-score">+2</td>
        <td class="bbr-play-score"><a href="/players/h/hardeja01.html">J. Harden</a> makes 2-pt layup from 3 ft</td>
      </tr>
      <tr>
        <td>11:21.0</td>
        <td class="bbr-play-score"><a href="/players/h/hartjo01.html">J. Hart</a> makes 3-pt jump shot from 24 ft
          (assist by <a href="/players/j/jamesle01.html">L. James</a>)</td>
        <td class="bbr-play-score">+3</td>
        <td class=" center">59-64</td>
        <td>&#xA0;</td>
        <td>&#xA0;</td>
      </tr>
      <tr>
        <td>0:00.0</td>
        <td colspan="5" class="center">End of 3rd quarter</td>
      </tr>
      <tr class="thead" id="q4">
        <th colspan="6">4th Q</th>
      </tr>
      <tr class="thead">
        <th aria-label="Time" data-stat="Time" class=" center">Time</th>
        <th aria-label="LA Lakers" data-stat="LA Lakers" class=" center">LA Lakers</th>
        <th aria-label data-stat class=" center"></th>
        <th aria-label="Score" data-stat="Score" class=" center">Score</th>
        <th aria-label data-stat class=" center"></th>
        <th aria-label="Houston" data-stat="Houston" class=" center">Houston</th>
      </tr>
      <tr>
        <td>12:00.0</td>
        <td colspan="5" class="center">Start of 4th quarter</td>
      </tr>
      <tr>
        <td>11:48.0</td>
        <td class><a href="/players/b/balllo01.html">L. Ball</a> misses 3-pt jump shot from 25 ft</td>
        <td class>&#xA0;</td>
        <td class=" center">88-90</td>
        <td>&#xA0;</td>
        <td>&#xA0;</td>
      </tr>
      <tr>
        <td>11:46.0</td>
        <td class>Offensive rebound by <a href="/players/c/chandty01.html">T. Chandler</a></td>
        <td class>&#xA0;</td>
        <td class=" center">88-90</td>
        <td>&#xA0;</td>
        <td>&#xA0;</td>
      </tr>
      <tr>
        <td>0:00.0</td>
        <td colspan="5" class="center">End of 4th quarter</td>
      </tr>
    </tbody>
  </table>
</div>
`;

module.exports = {
  games,
  playByPlay
};
