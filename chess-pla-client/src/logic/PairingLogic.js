class PairingLogic{
  createPlayerPairings (meetingPlayers, allGames, meetingId) {
    console.log('in create pairings ', meetingPlayers, allGames, meetingId);
    let pairings = [];

    let gamesByBlackPlayer = this.getGamesByPlayer(allGames, "black_player_id");
    let gamesByWhitePlayer = this.getGamesByPlayer(allGames, "white_player_id");

    let gamePlayers = meetingPlayers.filter(player => player.challenge_game);

    while(gamePlayers.length > 1){
      let player = gamePlayers[0];

      let opponentCount = this.getOpponentCount(gamesByWhitePlayer[player.player_id] || [], gamesByBlackPlayer[player.player_id] || [])

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
        white_player_rank: opponent.current_rank,
        meeting_id: meetingId
      }

      pairings.push(newGame);
      gamePlayers.splice(opponentIndex, 1);
      gamePlayers.splice(0, 1);
    }
    console.log(' pairings ', pairings);

    return pairings;
  };

  getOpponentCount(whiteGames, blackGames) {
    console.log('in get opponent count ', whiteGames, blackGames);
    let opponents = whiteGames.reduce((acc, game) => {
      if(acc[game.black_player_id] === undefined){
        acc[game.black_player_id] = 1;
      }
      else {
        acc[game.black_player_id]++;
      }
    }, {});

    opponents = blackGames.reduce((acc, game) => {
      if(acc[game.white_player_id] === undefined){
        acc[game.white_player_id] = 1;
      }
      else {
        acc[game.white_player_id]++;
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
