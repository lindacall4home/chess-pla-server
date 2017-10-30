import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setGameResult, showResultModal } from '../../actions';

class GameResultModal extends Component {
  render(){
    console.log('in GameResultModal ', this.props.meeting.showResultModal);
    if(this.props.meeting.showResultModal){
      return (
        <div className="chess-modal">
          <div>
            <button
              className="btn-flat right black-text"
              onClick={() => this.props.onCloseResultModal()}
            >
              <i className="material-icons right">clear</i>
            </button>
          </div>
          <div className="chess-modal-content">
            <h4 className="center-align">Who won?</h4>
          </div>
          <div className="chess-modal-footer flex-horizontal">
            <button
              className="chess-btn btn-flat left black white-text"
              onClick={() => this.props.onSetGameResult( this.props.meeting.currentGame, 'Black', this.props.session)}
            >
              {this.props.meeting.currentGame.black_first_name + " " + this.props.meeting.currentGame.black_last_name}
            </button>
            <button
              className="chess-btn btn-flat black-text"
              style={{border: "1px solid black", backgroundColor: 'gray'}}
              onClick={() => this.props.onSetGameResult( this.props.meeting.currentGame, 'Draw', this.props.session)}
            >
              Draw
            </button>
            <button
              className="chess-btn btn-flat white black-text"
              style={{border: "1px solid black"}}
              onClick={() => this.props.onSetGameResult( this.props.meeting.currentGame, 'White', this.props.session)}
            >
              {this.props.meeting.currentGame.white_first_name + " " + this.props.meeting.currentGame.white_last_name}
            </button>
          </div>
        </div>
      );
    }
    return null;
  }
}

function mapStateToProps({ meeting, session  }) {
  return { meeting, session  };
}

const mapDispatchToProps = dispatch => {
  return {
    onSetGameResult: (game, result, session) => {
      console.log('in onSetGameResult ' , result, game, session);
      dispatch(setGameResult(game, result, session))
    },
    onCloseResultModal: () => {
      dispatch(showResultModal(false, null))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(GameResultModal);
