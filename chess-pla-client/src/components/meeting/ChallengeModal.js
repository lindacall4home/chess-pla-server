import React, { Component } from 'react';
import { connect } from 'react-redux';

class ChallengeModal extends Component {

  render(){
    console.log('in challengeModal show = ', this.props.meeting.showChallengeModal);
    if(this.props.meeting.showChallengeModal){
      return (
        <div className="chess-modal">
          <div className="chess-modal-content">
            <h4>Would you like to play a challenge game?</h4>
          </div>
          <div className="chess-modal-footer">
            <button className="chess-waves-effect waves-green btn-flat">Yes!</button>
            <button className="chess-waves-effect waves-red btn-flat">Not today</button>
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

export default connect(mapStateToProps)(ChallengeModal);
