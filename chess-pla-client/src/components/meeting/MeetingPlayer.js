import React, { Component } from 'react';
import { connect } from 'react-redux';
import ChessClock from '../chessClock/ChessClock';
import { showChallengeModal } from '../../actions';

class MeetingPlayer extends Component {

  render(){
    return (
      <tr key={this.props.player.player_id}>
        <td>
          {this.props.player.first_name + " " + this.props.player.last_name + " (" + this.props.player.player_id + ")"}
        </td>
        <td>
          {this.props.player.current_rank}
        </td>
        <td>
          <div className="flex-horizontal">
            <ChessClock
              player={this.props.player}
              timeIn={this.props.player.time_in}
              timeOut={this.props.player.time_out}
            />
          </div>
        </td>
        <td>
          <a
            id="chess-board-btn"
            className="btn"
            onClick={() => this.props.onChallengeGameClick(this.props.player)}
          >
            <i
              id="challengeIcon"
              className="material-icons right"
            >
              {this.props.player.challenge_game === null ? "help" :
              this.props.player.challenge_game ? "check_circle" : "cancel"}</i>
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
    onChallengeGameClick: (player) => {
      dispatch(showChallengeModal(true, player))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MeetingPlayer);
