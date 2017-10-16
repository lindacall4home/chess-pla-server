class RankingLogic {
  comparePlayersByRank(player1, player2){
    return player1.current_rank - player2.current_rank;
  }

  comparePlayersByAge(player1, player2){
    return (player1.birthday.getTime() - player2.birthday.getTime());
  }



  didHigherRankedPlayerWin(blackPlayer, whitePlayer, result){

    if((result === 'Black' &&
      blackPlayer.current_rank > whitePlayer.current_rank) ||
      (result === 'White' &&
      whitePlayer.current_rank > blackPlayer.current_rank)){
        console.log('higher ranked player won');
        return true;
      }

      return false;
  }

  rankPlayersByAge(playerArr){

    playerArr.sort(this.comparePlayersByAge);
    for(let i = 0; i < playerArr.length; i++){
        playerArr[i].current_rank = i;
    }
    return playerArr;
  }

  rankPlayersBasedOnGameResult(playerArr, game, result){
    console.log('in rankPlayersBasedOnGameResult: ', game, ' ', result);

    let newPlayerArr = playerArr.map(player => Object.assign({}, player));

    console.log(newPlayerArr);

    let blackPlayer =
      playerArr.find(player => player.player_id === game.black_player_id);

    console.log('black player: ', blackPlayer);

    let whitePlayer =
      playerArr.find(player => player.player_id === game.white_player_id);

    console.log('white player: ', whitePlayer);

    if(this.didHigherRankedPlayerWin(blackPlayer, whitePlayer, result)){
      return newPlayerArr;
    }

    let highRankPlayer =
      blackPlayer.current_rank > whitePlayer.current_rank ?
      blackPlayer : whitePlayer;

    let lowRankPlayer =
      blackPlayer.current_rank < whitePlayer.current_rank ?
      blackPlayer : whitePlayer;

    if(result === 'Draw'){
      return this.adjustRanksForDraw(highRankPlayer, lowRankPlayer, playerArr)
        .sort(this.comparePlayersByRank);
    }

    return this.adjustRanksForLowerRankedPlayerWins(highRankPlayer, lowRankPlayer, newPlayerArr).sort(this.comparePlayersByRank);

  }

  adjustRanksForDraw(highRankPlayer, lowRankPlayer, playerArr)
  {
    console.log('in adjustRanksForDraw high/low: ',  highRankPlayer, lowRankPlayer);
    lowRankPlayer.current_rank = highRankPlayer.current_rank + 1;

    this.bumpRanks(highRankPlayer.current_rank, lowRankPlayer.current_rank - 1, playerArr)

    return playerArr;
  }

  adjustRanksForLowerRankedPlayerWins(highRankPlayer, lowRankPlayer, playerArr)
  {
    console.log('in adjustRanksForLowerRankedPlayerWins high/low: ',  highRankPlayer,
    lowRankPlayer);

    lowRankPlayer.current_rank = highRankPlayer.current_rank;

    this.bumpRanks(highRankPlayer.current_rank - 1, lowRankPlayer.current_rank - 1, playerArr);

    return playerArr;
  }

  bumpRanks(fromElement, toElement, playerArr){
    for (let i = fromElement; i < toElement; i++){
      playerArr[i].current_rank++;
    }

    console.log('playerArr after bump: playerArr');
  }

  adjustRanksForNewPlayer(newPlayer, rankByAge, playerArr){
    let newPlayerArr = playerArr.map(player => Object.assign({}, player));

    if(rankByAge){
      newPlayerArr.push(newPlayer);
      return this.rankPlayersByAge(newPlayerArr);
    }

    let playerIdx = this.getLowestRankedPlayerForGrade(newPlayer.grade, newPlayerArr);
    newPlayer.current_rank = newPlayerArr[playerIdx].current_rank + 1;

    this.bumpRanks(playerIdx + 1, newPlayerArr.length, newPlayerArr);
    newPlayerArr.push(newPlayer);
    newPlayerArr.sort(this.comparePlayersByRank);
    return newPlayerArr;

  }

  getLowestRankedPlayerForGrade(grade, playerArr){
    for(let i = playerArr.length - 1; i >= 0; i-- ){
      if(playerArr[i].grade === grade){
        return i;
      }
      return 0;
    }
  }
}

export default RankingLogic
