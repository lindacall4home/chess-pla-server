import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { bindActionCreators } from 'redux'

class Ladder extends Component {

  componentDidMount(){
    this.props.actions.fetchCurrentPlayers();
  }

  render(){
    return (
      <div className="container">
        <div className="row">
          <div className="col s6 offset-s3 chess-table">
            <h4 className="center-align chess-table-header">Ladder</h4>
            <div className="chess-table-inner">
              <table className="bordered highlight centered">
                <thead>
                  <tr>
                    <th>Rank</th>
                    <th>Name</th>
                  </tr>
                </thead>
                <tbody>
                {this.props.session.currentPlayers
                .map(player =>
                  <tr key={player.player_id}>
                  <td>
                    {player.current_rank}
                  </td>
                  <td>
                    {player.first_name + " " + player.last_name}
                  </td>
                  </tr>
                )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ session }) {
  return { session };
}

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Ladder);
