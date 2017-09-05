import React, { Component } from 'react';
import { connect } from 'react-redux';
import ChessClock from '../chessClock/ChessClock';

class MeetingPlayers extends Component {
  render(){
    console.log('in meeting players ', this.props.meeting);
    return (
      <div>
        <div id="modal1" className="modal" style={{display: 'none'}}>
          <div className="modal-content">
            <h4>Modal Header</h4>
            <p>A bunch of text</p>
          </div>
          <div className="modal-footer">
            <a href="#!" className="modal-action modal-close waves-effect waves-green btn-flat">Agree</a>
          </div>
        </div>

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
                <tr key={player.player_id}>
                  <td>
                    {player.alias}
                  </td>
                  <td>
                    {player.first_name + " " + player.last_name}
                  </td>
                  <td>
                    {player.current_rank}
                  </td>
                  <td>
                    <ChessClock
                      id={player.player_id}
                      timeIn={player.time_in}
                      timeOut={player.time_out}/>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}


function mapStateToProps(state, ownProps) {
  return {
    showModal: false,
    meeting: state.meeting
   };
}

export default connect(mapStateToProps)(MeetingPlayers);
