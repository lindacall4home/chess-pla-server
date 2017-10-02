class PairingLogic{
  createPlayerPairings (meetingPlayers, allGames, meetingId) {
    let pairings = [];

    let gamesByBlackPlayer = this.getGamesByPlayer(allGames, "black_player_id");
    let gamesByWhitePlayer = this.getGamesByPlayer(allGames, "white_player_id");

    let gamePlayers = meetingPlayers
      .filter(player => player.challenge_game)
      .sort((player1, player2) => player1.current_rank - player2.current_rank);

    let board = 1;
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
        // black_first_name: player.first_name,
        // black_last_name: player.last_name,
        white_player_id: opponent.player_id,
        white_player_rank: opponent.current_rank,
        // white_first_name: opponent.first_name,
        // white_last_name: opponent.last_name,
        meeting_id: meetingId,
        board_num: board
      }

      pairings.push(newGame);
      gamePlayers.splice(opponentIndex, 1);
      gamePlayers.splice(0, 1);
      board++;
    }

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
      return acc;
    }, {});

    opponents = blackGames.reduce((acc, game) => {
      if(acc[game.white_player_id] === undefined){
        acc[game.white_player_id] = 1;
      }
      else {
        acc[game.white_player_id]++;
      }
      return acc;
    }, opponents);

    return opponents;
  }


 getGamesByPlayer(games, keyName){
    return games.reduce((acc, game) => {
      if(acc[keyName] === undefined){
        acc[keyName] = [];
      }
      acc[keyName].push(game);
      return acc;
    }, {})
  }
}

export default PairingLogic;
