class RankingLogic {

  comparePlayersByRank(player1, player2){
    return player1.current_rank - player2.current_rank;
  }

  comparePlayersByAge(player1, player2){
    return (player1.birthday.getTime() - player2.birthday.getTime());
  }



  didHigherRankedPlayerWin(blackPlayer, whitePlayer, result){
    console.log('black player/ white player ', blackPlayer, ' ', whitePlayer);
    if((result === 'Black' &&
      blackPlayer.current_rank < whitePlayer.current_rank) ||
      (result === 'White' &&
      whitePlayer.current_rank < blackPlayer.current_rank)){
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

  getGameDate(game, session){
    console.log('session ', session);
    console.log('meetingsById ', session.meetingsById);
    console.log('game.meeting_id ', game.meeting_id);
    return session.meetingsById[game.meeting_id].date;
  }

  rankPlayersBasedOnGameResult(playerArr, game, result, session){
    console.log('in rankPlayersBasedOnGameResult: ', playerArr, '  ', game, ' ', result, ' ', session.currentSession);

    let gameDate = this.getGameDate(game, session);

    let newPlayerArr = playerArr.map(player => Object.assign({}, player));

    console.log(newPlayerArr, game, gameDate);

    let blackPlayer =
      newPlayerArr.find(player => player.id === game.black_player_id);

    console.log('black player: ', blackPlayer);

    let whitePlayer =
      newPlayerArr.find(player => player.id === game.white_player_id);

    console.log('white player: ', whitePlayer);

    if(!this.didHigherRankedPlayerWin(blackPlayer, whitePlayer, result)){


      let highRankPlayer =
        blackPlayer.current_rank < whitePlayer.current_rank ?
        blackPlayer : whitePlayer;

      let lowRankPlayer =
        blackPlayer.current_rank > whitePlayer.current_rank ?
        blackPlayer : whitePlayer;

      if(result === 'Draw'){
        newPlayerArr = this.adjustRanksForDraw(highRankPlayer, lowRankPlayer, playerArr);
      }
      else{

        newPlayerArr = this.adjustRanksForLowerRankedPlayerWins(highRankPlayer.current_rank, lowRankPlayer.current_rank, newPlayerArr);
      }

    }
    return this.getRankHistory(newPlayerArr, session.currentSession.sessionId, gameDate).sort(this.comparePlayersByRank);
  }

  adjustRanksForDraw(highRankPlayer, lowRankPlayer, playerArr)
  {
    console.log('in adjustRanksForDraw high/low: ',  highRankPlayer, lowRankPlayer);
    playerArr[lowRankPlayer.current_rank - 1].current_rank = highRankPlayer.current_rank + 1;

    this.bumpRanks(highRankPlayer.current_rank, lowRankPlayer.current_rank - 1, playerArr)

    return playerArr;
  }

  adjustRanksForLowerRankedPlayerWins(highRankPlayerRank, lowRankPlayerRank, playerArr)
  {
    console.log('in adjustRanksForLowerRankedPlayerWins high/low: ',  highRankPlayerRank,
    lowRankPlayerRank);

    playerArr[highRankPlayerRank - 1].current_rank++;

    playerArr[lowRankPlayerRank - 1].current_rank = highRankPlayerRank;

    this.bumpRanks(highRankPlayerRank, lowRankPlayerRank- 1, playerArr);

    return playerArr;
  }

  bumpRanks(fromElement, toElement, playerArr){
    console.log('bump ranks from to ', fromElement, toElement)
    for (let i = fromElement; i < toElement; i++){
      playerArr[i].current_rank++;
    }

    console.log('playerArr after bump: playerArr', playerArr);
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

  getRankHistory(playerArr, sessionId, date){
    console.log('in getRankHistory sessionId ', sessionId);
    let newPlayerArr = [];
    for(let i = 0; i < playerArr.length; i++){
      newPlayerArr.push({ player_id: playerArr[i].id, date: date, session_id: sessionId , rank: playerArr[i].current_rank })
    }
    return newPlayerArr;
  }
}

export default RankingLogic
