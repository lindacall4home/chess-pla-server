import React, { Component } from 'react';
import { connect } from 'react-redux';

class Ladder extends Component {
  render(){
    console.log('in ladder', this.props.session);
    return (
      <div className="chess-table">
        <h4 className="center-align">Ladder</h4>
        <table className="striped bordered">
          <thead>
            <tr>
              <th>Rank</th>
              <th>Alias</th>
            </tr>
          </thead>
          <tbody>
          {this.props.session.currentPlayers
          .map(player =>
            <tr key={player.id}>
            <td>
              {player.current_rank}
            </td>
            <td>
              {player.alias}
            </td>
            </tr>
          )}
          </tbody>
        </table>
      </div>
    );
  }
}

function mapStateToProps({ session }) {
  return { session };
}

export default connect(mapStateToProps)(Ladder);
