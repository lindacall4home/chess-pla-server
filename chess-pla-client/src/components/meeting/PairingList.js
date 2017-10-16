import React, { Component } from 'react';
import { connect } from 'react-redux';
import Pairing from './Pairing';
import { setShowPlayers } from '../../actions';
import { pairPlayers } from '../../actions';

class PairingList extends Component {

  render(){
    if(this.props.meeting.showPlayers){
      return null;
    }
    return (
      <div className="container">
        <div className="row">
          <div className="col s10 offset-s1 chess-table">
            <div className="row">
              <div className="col s12 chess-table-header">
                <div className="row">
                  <div className="col s1">
                    <i className="material-icons left header-icon-left">    navigate_before
                    </i>
                    <a
                      className="chess-table-header-link waves-effect waves-light header-link-left"
                      onClick={() => this.props.onShowPlayers(true)}
                    >
                      Players
                    </a>
                  </div>
                  <div className="col s2 offset-s4">
                    <h4 className="center-align">Games</h4>
                  </div>
                  <div className="col s1 offset-s11">
                    <a
                      className="chess-table-header-link header-link-right waves-effect waves-light disabled"
                    >
                      Games
                    </a>
                    <i className="material-icons right header-icon-right">navigate_next</i>
                  </div>
                </div>
              </div>
            </div>
            <div className="row" style={{height: "435px"}}>
              <div className="chess-table-inner" style={{marginTop: "-20px"}}>
                <table className="bordered highlight centered">
                  <thead>
                    <tr>
                      <th>Board</th>
                      <th>Black Player</th>
                      <th>Black Rank</th>
                      <th>White Player</th>
                      <th>White Rank</th>
                      <th>Winner</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.props.meeting.allGames
                    .map(game =>
                      <Pairing key={game.game_id} game={game}/>
                    )}
                  </tbody>
                </table>
                  <a className="btn-floating btn-large waves-effect waves-light purple right"
                  style={this.props.meeting.allowPairing ? {} : {display: "none"}}
                  onClick={() => this.props.onPairPlayers(this.props.meeting, this.props.session )}><i className="material-icons">people</i></a>

              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}


function mapStateToProps({ meeting, session }) {
  return { meeting, session };
}

const mapDispatchToProps = dispatch => {
  return {
    onShowPlayers: show => {
      dispatch(setShowPlayers(show))
    },
    onPairPlayers: (meeting, session) => {
      console.log('in pair dispatch ', meeting, session);
      dispatch(pairPlayers(meeting, session))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PairingList);
