'use strict'

class RankingLogic {
  comparePlayersByRank(player1, player2){
    return player1.current_rank - player2.current_rank;
  }

  didHigherRankedPlayerWin(blackPlayer, whitePlayer, game){

    if((game.game_result === 'Black' &&
      blackPlayer.current_rank > whitePlayer.current_rank) ||
      (game.game_result === 'White' &&
      whitePlayer.current_rank > blackPlayer.current_rank)){
        return true;
      }

      return false;
  }

  rankPlayersByAge(playerArr){

    let newPlayerArr = playerArr.map(player => Object.assign({}, player));
    newPlayerArr.sort(comparePlayersByRank);
    for(let i = 0; i < newPlayerArr.length; i++){
        newPlayerArr[i].rank = i;
    }
    return newPlayerArr;
  }

  rankPlayersBasedOnGameResult(playerArr, game){

    let newPlayerArr = playerArr.map(player => Object.assign({}, player));

    let blackPlayer =
      playerArr.find(player => player.player_id ===    game.black_player_id);

    let whitePlayer =
      playerArr.find(player => player.player_id ===    game.white_player_id);

    if(didHigherRankedPlayerWin(blackPlayer, whitePlayer, game)){
      return newPlayerArr;
    }

    let highRankPlayer =
      blackPlayer.current_rank > whitePlayer.current_rank ?
      blackPlayer : whitePlayer;

    let lowRankPlayer =
      blackPlayer.current_rank < whitePlayer.current_rank ?
      blackPlayer : whitePlayer;

    if(game.game_result === 'Draw'){
      return adjustRanksForDraw(highRankPlayer, lowRankPlayer, playerArr)
        .sort(comparePlayersByRank);
    }

    return adjustRanksForLowerRankedPlayerWins(highRankPlayer, lowRankPlayer, newPlayerArr).sort(comparePlayersByRank);

  }

  adjustRanksForDraw(highRankPlayer, lowRankPlayer, playerArr)
  {
    lowRankPlayer.current_rank = highRankPlayer.current_rank + 1;

    bumpRanks(highRankPlayer.current_rank, lowRankPlayer.current_rank - 1, playerArr)

  }

  adjustRanksForLowerRankedPlayerWins(highRankPlayer, lowRankPlayer, playerArr)
  {
    lowRankPlayer.current_rank = highRankPlayer.currentRank;

    bumpRanks(highRankPlayer.currentRank - 1, lowRankPlayer.current_rank - 1, playerArray);
  }

  bumpRanks(fromElement, toElement, playerArr){
    for (let i = fromElement; i < toElement; i++){
      playerArr[i].current_rank++;
    }
  }
}

export default RankingLogic
