import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setGameResult } from '../../actions';

class GameResultModal extends Component {

  render(){
    if(this.props.meeting.showGameResultModal){
      return (
        <div className="chess-modal">
          <div className="chess-modal-content">
            <h4 className="center-align">Who won?</h4>
          </div>
          <div className="chess-modal-footer flex-horizontal">
            <button
              className="chess-btn btn-flat left black white-text"
              onClick={() => this.props.setGameResult('Black', this.props.game)}
            >
              Black
            </button>
            <button
              className="chess-btn btn-flat white black-text"
              style={{border: "1px solid black"}}
              onClick={() => this.props.setGameResult('Draw', this.props.game)}
            >
              Draw
            </button>
            <button
              className="chess-btn btn-flat white black-text"
              style={{border: "1px solid black"}}
              onClick={() => this.props.setGameResult('White', this.props.game)}
            >
              White
            </button>
          </div>
        </div>
      );
    }
    return null;
  }
}

function mapStateToProps({ game }) {
  return { game };
}

const mapDispatchToProps = dispatch => {
  return {
    onSetGameResult: (result, game) => {
      console.log('in onSetGameResult ' , result, game);
      dispatch(setGameResult(result, game))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(GameResultModal);
