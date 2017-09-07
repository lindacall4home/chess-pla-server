import React, { Component } from 'react';
import { connect } from 'react-redux';
import Pairing from './Pairing';

class PairingList extends Component {

  render(){
    console.log('in pairing list ', this.props.meeting.allGames, this.props.meeting.allPlayers, this.props.meeting.showPlayers);
    if(this.props.meeting.showPlayers){
      return null;
    }
    return (
      <div id="meeting-pairings" className="chess-table">
        <h4 className="center-align chess-table-header">Games</h4>
        <table className="bordered highlight centered">
          <thead>
            <tr>
              <th>Board</th>
              <th>Black Player</th>
              <th>White Player</th>
              <th>Black Won</th>
              <th>White Won</th>
              <th>Draw</th>
            </tr>
          </thead>
          <tbody>
            {this.props.meeting.allGames
            .map(game =>
              <Pairing key={game.game_id} game={game}/>
            )}
          </tbody>
        </table>
      </div>
    );
  }
}


function mapStateToProps({ meeting }) {
  return { meeting };
}

export default connect(mapStateToProps)(PairingList);
