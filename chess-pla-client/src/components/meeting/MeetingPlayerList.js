import React, { Component } from 'react';
import { connect } from 'react-redux';
import MeetingPlayer from './MeetingPlayer';
import { setShowPlayers } from '../../actions';

class MeetingPlayerList extends Component {

  render(){
    if(!this.props.meeting.showPlayers){
      return null;
    }
    return (
      <div className="container">
        <div className="row">
          <div className="col s10 offset-s1 chess-table">
            <div className="row">
              <div className="col s12 chess-table-header">
                <div className="row">
                  <div className="col s2 offset-s5">
                    <h4 className="center-align">Players</h4>
                  </div>
                  <div className="col s1 offset-s11">
                    <a
                      className="chess-table-header-link waves-effect waves-light"
                      onClick={() => this.props.onShowPlayers(false)}
                    >
                      Games
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="chess-table-inner" style={{marginTop: "-20px"}}>
                <table className="bordered highlight centered">
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
            </div>
          </div>
        </div>
      </div>
    );
  }
}


function mapStateToProps({ meeting }) {
  return { meeting };
}

const mapDispatchToProps = dispatch => {
  return {
    onShowPlayers: show => {
      dispatch(setShowPlayers(show))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MeetingPlayerList);
