import React, { Component } from 'react';
import { connect } from 'react-redux';
import ChessClock from '../ChessClock';

class MeetingPlayers extends Component {
  render(){
    console.log('in meeting players ', this.props.meeting);
    return (
      <div className="chess-table">
        <h4 className="center-align">Players</h4>
        <table className="striped bordered">
          <thead>
            <tr>
              <th>Alias</th>
              <th>Name</th>
              <th>Rank</th>
              <th>In/Out</th>
            </tr>
          </thead>
          <tbody>
            {this.props.meeting.allPlayers
            .map(player =>
              <tr key={player.id}>
                <td>
                  {player.alias}
                </td>
                <td>
                  {player.first_name.trim() + " " + player.last_name.trim()}
                </td>
                <td>
                  {player.current_rank}
                </td>
                <td>
                  <ChessClock/>
                </td>
              </tr>
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

export default connect(mapStateToProps)(MeetingPlayers);
