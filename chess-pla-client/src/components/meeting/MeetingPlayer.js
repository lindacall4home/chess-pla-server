import React, { Component } from 'react';
import { connect } from 'react-redux';
import ChessClock from '../chessClock/ChessClock';
import { showChallengeModal } from '../../actions';

class MeetingPlayerList extends Component {

  render(){
    return (
      <tr key={this.props.player.player_id}>
        <td>
          {this.props.player.alias}
        </td>
        <td>
          {this.props.player.first_name + " " + this.props.player.last_name}
        </td>
        <td>
          {this.props.player.current_rank}
        </td>
        <td>
          <ChessClock
            id={this.props.player.player_id}
            timeIn={this.props.player.time_in}
            timeOut={this.props.player.time_out}/>
        </td>
        <td>
          <a
            className="chess-waves-effect waves-light btn" onClick={this.props.onChallengeGameClick}
          >
            Game?
          </a>
        </td>
      </tr>
    );
  }
}


function mapStateToProps(state, { player }) {
  return { player };
}

const mapDispatchToProps = dispatch => {
  return {
    onChallengeGameClick: () => {
      dispatch(showChallengeModal(true))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MeetingPlayerList);
