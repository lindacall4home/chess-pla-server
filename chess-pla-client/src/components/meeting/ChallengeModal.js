import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setPlayChallengeGame, updateMeetingPlayer } from '../../actions';

class ChallengeModal extends Component {

  render(){
    if(this.props.meeting.showChallengeModal){
      return (
        <div className="chess-modal">
          <div className="chess-modal-content">
            <h4 className="center-align">Would you like to play a challenge game?</h4>
          </div>
          <div className="chess-modal-footer flex-horizontal">
            <button
              className="chess-btn chess-btn-yes btn-flat right white-text"
              onClick={() => this.props.onSetPlayChallengeGame(true, this.props.meeting.currentPlayer)}
            >
              Yes
              <i className="material-icons right">done</i>
            </button>
            <button
              className="chess-btn chess-btn-no btn-flat right  white black-text"
              style={{border: "1px solid black"}}
              onClick={() => this.props.onSetPlayChallengeGame(false, this.props.meeting.currentPlayer)}
            >
              Not today
            </button>
          </div>
        </div>
      );
    }
    return null;
  }
}

function mapStateToProps({meeting}) {
  return { meeting };
}

const mapDispatchToProps = dispatch => {
  return {
    onSetPlayChallengeGame: (play, player) => {
      console.log('in onSetPlayChallengeGame ' , play, player);
      dispatch(setPlayChallengeGame(play, player))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChallengeModal);
