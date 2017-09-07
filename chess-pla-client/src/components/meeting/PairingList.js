import React, { Component } from 'react';
import { connect } from 'react-redux';
import Pairing from './Pairing';
import { setShowPlayers } from '../../actions';

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
                <div className="col s2 offset-s5">
                  <h4 className="center-align">Games</h4>
                </div>
                <div className="col s1 offset-s11">
                  <a
                    className="chess-table-header-link waves-effect waves-light"
                    onClick={() => this.props.onShowPlayers(true)}
                  >
                    Players
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

export default connect(mapStateToProps, mapDispatchToProps)(PairingList);
