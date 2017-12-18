class RankingLogic {

  comparePlayersByRank(player1, player2){
    return player1.current_rank - player2.current_rank;
  }

  compareRankingsByRank(rank1, rank2){
    return rank1.rank - rank2.rank;
  }

  comparePlayersByAge(player1, player2){
    return (player1.birthday.getTime() - player2.birthday.getTime());
  }



  didHigherRankedPlayerWin(blackPlayer, whitePlayer, result){
    if((result === 'Black' &&
      blackPlayer.current_rank < whitePlayer.current_rank) ||
      (result === 'White' &&
      whitePlayer.current_rank < blackPlayer.current_rank)){
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
    return session.meetingsById[game.meeting_id].date;
  }

  rankPlayersBasedOnGameResult(playerArr, game, result, session){
    let gameDate = this.getGameDate(game, session);

    let newPlayerArr = playerArr.map(player => Object.assign({}, player));
    newPlayerArr.sort(this.comparePlayersByRank);

    console.log ('in rank player ', newPlayerArr);

    let blackPlayer =
      newPlayerArr.find(player => player.player_id === game.black_player_id);

    let whitePlayer =
      newPlayerArr.find(player => player.player_id === game.white_player_id);

    if(!this.didHigherRankedPlayerWin(blackPlayer, whitePlayer, result)){


      let highRankPlayer =
        blackPlayer.current_rank < whitePlayer.current_rank ?
        blackPlayer : whitePlayer;

      let lowRankPlayer =
        blackPlayer.current_rank > whitePlayer.current_rank ?
        blackPlayer : whitePlayer;

      if(result === 'Draw'){
        newPlayerArr = this.adjustRanksForDraw(highRankPlayer, lowRankPlayer, newPlayerArr);
      }
      else{

        newPlayerArr = this.adjustRanksForLowerRankedPlayerWins(highRankPlayer.current_rank, lowRankPlayer.current_rank, newPlayerArr);
      }

    }
    let newlyRankedPlayers = this.getRankHistory(newPlayerArr, session.currentSession.sessionId, gameDate);

    console.log('newly ranked players before sort', newlyRankedPlayers);

    newlyRankedPlayers.sort(this.compareRankingsByRank)

    console.log('newly ranked players after sort', newlyRankedPlayers);

    return newlyRankedPlayers;

  }

  adjustRanksForDraw(highRankPlayer, lowRankPlayer, playerArr)
  {
    console.log ('in adjustRanksForDraw ', playerArr);

    let saveRank = playerArr[lowRankPlayer.current_rank - 1].current_rank;

    playerArr[lowRankPlayer.current_rank - 1].current_rank = highRankPlayer.current_rank + 1;

    console.log('draw before bump ranks ', playerArr);


    this.bumpRanks(highRankPlayer.current_rank, saveRank - 1, playerArr)

    playerArr.sort(this.comparePlayersByRank);
    console.log('draw after bump ranks ', playerArr);

    return playerArr;
  }

  adjustRanksForLowerRankedPlayerWins(highRankPlayerRank, lowRankPlayerRank, playerArr)
  {
    console.log('adjust for lower ranked player wins ', playerArr);


    playerArr[highRankPlayerRank - 1].current_rank++;

    playerArr[lowRankPlayerRank - 1].current_rank = highRankPlayerRank;

    console.log('before bump ranks ', playerArr);

    this.bumpRanks(highRankPlayerRank, lowRankPlayerRank- 1, playerArr);

    playerArr.sort(this.comparePlayersByRank);

    console.log('after bump ranks ', playerArr);

    return playerArr;
  }

  bumpRanks(fromElement, toElement, playerArr){
    console.log('in bump from ', fromElement, ' to ', toElement, ' arr ', playerArr);
    for (let i = fromElement; i < toElement; i++){
      playerArr[i].current_rank++;
      console.log('rank bumped ', playerArr[i]);
    }

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
    let newPlayerArr = [];
    for(let i = 0; i < playerArr.length; i++){
      newPlayerArr.push({ player_id: playerArr[i].player_id, date: date, session_id: sessionId , rank: playerArr[i].current_rank })
    }
    return newPlayerArr;
  }
}

export default RankingLogic
