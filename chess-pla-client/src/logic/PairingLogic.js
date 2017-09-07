'use strict'

class PairingLogic {

  createPlayerPairings(meetingPlayers, allGames, meetingId){
    let pairings = [];

    let gamesByBlackPlayer = getGamesByPlayer(allGames, "black_player_id");
    let gamesByWhitePlayer = getGamesByPlayer(allGames, "white_player_id");

    let gamePlayers = meetingPlayers.filter(player => player.challenge_game);

    while(gamePlayers.length > 1){
      let player = gamePlayers[0];

      opponentCount = getOpponentCount(gamesByWhitePlayer[player.player_id], gamesByBlackPlayer[player.player_id])

      let opponent = gamePlayers[1];
      let opponentIndex = 1;
      let playsAgainstOpp = opponentCount[opponent] || 0;
      let oppColorPref = (gamesByBlackPlayer[player.player_id] || 0 ) -    (gamesByWhitePlayer[player.player_id] || 0);

      let i = 2;
      while (i < 8 && i < gamePlayers.length){
        if((opponentCount[gamePlayers[i]] || 0) < playsAgainstOpp){
          opponent = gamePlayers[i];
          opponentIndex = i;
          playsAgainstOpp = opponentCount[opponent] || 0;
          oppColorPref = (gamesByBlackPlayer[player.player_id] || 0 ) -    (gamesByWhitePlayer[player.player_id] || 0);
        }
        else if ((opponentCount[gamePlayers[i]] || 0) === playsAgainstOpp){
          if(((gamesByBlackPlayer[player.player_id] || 0 ) -        (gamesByWhitePlayer[player.player_id] || 0)) > oppColorPref){
            opponent = gamePlayers[i];
            opponentIndex = i;
            playsAgainstOpp = opponentCount[opponent] || 0;
            oppColorPref = (gamesByBlackPlayer[player.player_id] || 0 ) -    (gamesByWhitePlayer[player.player_id] || 0);
          }
        }
        i++;
      }

      let newGame = {
        black_player_id: player.player_id,
        black_player_rank: player.current_rank,
        white_player_id: opponent.player_id,
        white_player_rank: opponent.rank,
        meeting_id: meetingId
      }

      pairings.push(newGame);
      gamePlayers.splice(opponentIndex, 1);
      gamePlayers.splice(0, 1);
    }

    return pairings;
  }

  getOpponentCount(whiteGames, blackGames){
    let opponents = games.reduce((acc, whiteGames) => {
      if(acc[black_player_id] === undefined){
        acc[black_player_id] = 1;
      }
      else {
        acc[black_player_id]++;
      }
    }, {});

    opponents = games.reduce((acc, blackGames) => {
      if(acc[white_player_id] === undefined){
        acc[white_player_id] = 1;
      }
      else {
        acc[white_player_id]++;
      }
    }, opponents);

    return opponents;
  }


  getGamesByPlayer(games, keyName){
    return games.reduce((acc, game) => {
      if(acc[keyName] === undefined){
        acc[keyName] = [];
      }
      acc[keyName].push(game);
    }, {})
  }
}

export default PairingLogic;
