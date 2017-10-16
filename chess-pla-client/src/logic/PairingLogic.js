class PairingLogic{
  createPlayerPairings (meetingPlayers, allGames, meetingId) {
    // console.log('in pairing-players: ', meetingPlayers);
    // console.log('games: ', allGames);
    let pairings = [];

    let gamesByBlackPlayer = this.getGamesByPlayer(allGames, "black_player_id");
    let gamesByWhitePlayer = this.getGamesByPlayer(allGames, "white_player_id");

    // console.log('games by black player: ', gamesByBlackPlayer);
    // console.log('games by white player: ', gamesByWhitePlayer);

    let gamePlayers = meetingPlayers
      .filter(player => player.challenge_game)
      .sort((player1, player2) => player1.current_rank - player2.current_rank);

    // console.log('game players: ', gamePlayers);

    let board = 1;
    while(gamePlayers.length > 1){
      let player = gamePlayers[0];

      // console.log('pairing player: ', player);

      let opponentCount = this.getOpponentCount(gamesByWhitePlayer[player.player_id] || [], gamesByBlackPlayer[player.player_id] || [])

      let opponent = null;
      let opponentIndex = 0;
      let playsAgainstOpp = 0;
      let oppColorPref = 0;

      let i = 1;
      while (i < 8 && i < gamePlayers.length){
        // console.log('evaluating opponent: ', gamePlayers[i]);
        if(opponent === null || (opponentCount[gamePlayers[i].player_id] === undefined ? 0 : opponentCount[gamePlayers[i]]) < playsAgainstOpp){
          opponent = gamePlayers[i];
          opponentIndex = i;

          playsAgainstOpp = opponentCount[opponent.player_id] === undefined ? 0 : opponentCount[opponent.player_id];

          oppColorPref = (gamesByBlackPlayer[player.player_id] === undefined ? 0 : gamesByBlackPlayer[player.player_id].length) -    (gamesByWhitePlayer[player.player_id]  === undefined ? 0 : gamesByWhitePlayer[player.player_id].length || 0);

          // console.log('player chosen based on plays');
          // console.log('plays against opponent: ', playsAgainstOpp);
          // console.log('opponent color pref: ', oppColorPref);
        }
        else if ((opponentCount[gamePlayers[i]] === undefined ? 0 : opponentCount[gamePlayers[i].player_id]) === playsAgainstOpp){
          // console.log('plays againt opponent same');
          if(((gamesByBlackPlayer[player.player_id] || 0 ) -        (gamesByWhitePlayer[player.player_id] || 0)) > oppColorPref){
            opponent = gamePlayers[i];
            opponentIndex = i;
            playsAgainstOpp = opponentCount[opponent.player_id] || 0;
            oppColorPref = (gamesByBlackPlayer[player.player_id] || 0 ) -    (gamesByWhitePlayer[player.player_id] || 0);
            // console.log('player chosen based on color pref');
            // console.log('plays against opponent: ', playsAgainstOpp);
            // console.log('opponent color pref: ', oppColorPref);

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
      // console.log('new game: ', newGame);
      gamePlayers.splice(opponentIndex, 1);
      gamePlayers.splice(0, 1);
      // console.log('remaining players: ', gamePlayers);
      board++;
    }

    return pairings;
  };

  getOpponentCount(whiteGames, blackGames) {
    // console.log('in get opponent count ', whiteGames, blackGames);
    let opponents = whiteGames.reduce((acc, game) => {
      if(acc[game.black_player_id] === undefined){
        acc[game.black_player_id] = 1;
      }
      else {
        acc[game.black_player_id]++;
      }
      return acc;
    }, {});

    // console.log('white opponents: ', opponents);

    opponents = blackGames.reduce((acc, game) => {
      if(acc[game.white_player_id] === undefined){
        acc[game.white_player_id] = 1;
      }
      else {
        acc[game.white_player_id]++;
      }
      return acc;
    }, opponents);

    // console.log('all opponents: ', opponents);

    return opponents;
  }


 getGamesByPlayer(games, keyName){
    return games.reduce((acc, game) => {
      if(acc[game[keyName]] === undefined){
        acc[game[keyName]] = [];
      }
      acc[game[keyName]].push(game);
      return acc;
    }, {})
  }
}

export default PairingLogic;
