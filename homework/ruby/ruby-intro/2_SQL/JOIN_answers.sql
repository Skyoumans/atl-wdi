Number One:

  SELECT matchid, player FROM goal
  JOIN eteam ON teamid = eteam.id
  WHERE teamid = 'GER';

Number Two:

  SELECT id,stadium,team1,team2
  FROM game
  WHERE id = 1012

Number Three:

  SELECT player,teamid, stadium, mdate
  FROM game JOIN goal ON (id=matchid)
  WHERE teamid = 'GER';

Number Four:

  SELECT team1, team2, player
  FROM game JOIN goal ON (id=matchid)
  WHERE player LIKE 'Mario%';

NUMBER Five:

  SELECT player, teamid, coach, gtime
  FROM  goal JOIN eteam on teamid=id
  WHERE gtime<=10;

Number Six:

  SELECT mdate, teamname FROM 
  game JOIN eteam ON (team1=eteam.id)
  WHERE coach = 'Fernando Santos';

Number Seven:

  SELECT player FROM goal 
  JOIN game ON matchid = id
  WHERE stadium = 'National Stadium, Warsaw';

Number Eight:

  SELECT player
  FROM game JOIN goal ON matchid = id 
  WHERE (team1='GER' OR team2='GER') AND  teamid != 'GER'
  GROUP BY player;

Number Nine: 

  SELECT teamname, COUNT(player) goals_scored
  FROM eteam JOIN goal ON id = teamid
  GROUP BY teamname;

Number Ten:

  SELECT stadium,  COUNT(player) goals_scored
  FROM game JOIN goal ON id = matchid
  GROUP BY stadium;

Number Eleven: 

  SELECT matchid, mdate, COUNT(player) goals_scored
  FROM game JOIN goal ON id = matchid 
  WHERE (team1 = 'POL' OR team2 = 'POL')
  GROUP BY matchid, mdate;

Number Twelve: 

  SELECT matchid, mdate, COUNT(player)
  FROM game
  JOIN goal ON id = matchid
  WHERE teamid = 'GER'
  GROUP BY matchid, mdate;

Number Thirteen: 

