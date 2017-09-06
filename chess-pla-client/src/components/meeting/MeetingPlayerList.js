import React, { Component } from 'react';
import { connect } from 'react-redux';
import MeetingPlayer from './MeetingPlayer';

class MeetingPlayerList extends Component {

  render(){
    console.log('in player list ', this.props.meeting.allPlayers, this.props.meeting.showPlayers);
    if(!this.props.meeting.showPlayers){
      return null;
    }
    return (
      <div id="meeting-players" className="chess-table">
        <h4 className="center-align">Players</h4>
        <table className="striped bordered">
          <thead>
            <tr>
              <th>Alias</th>
              <th>Name</th>
              <th>Rank</th>
              <th>In/Out</th>
              <th>Challenge Game</th>
            </tr>
          </thead>
          <tbody>
            {this.props.meeting.allPlayers
            .map(player =>
              <MeetingPlayer key={player.player_id} player={player}/>
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

export default connect(mapStateToProps)(MeetingPlayerList);
