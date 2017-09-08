import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setGameResult } from '../../actions';

class Pairing extends Component {

  render(){
    console.log('in pairing ', this.props.game);
    return (
      <tr key={this.props.game.game_id}>
        <td>
          {this.props.game.board_num}
        </td>
        <td>
          {this.props.game.black_first_name + " " + this.props.game.black_last_name + "(" + this.props.game.black_player_rank + ")"}
        </td>
        <td>
        {this.props.game.white_first_name + " " + this.props.game.white_last_name +"(" + this.props.game.white_player_rank + ")"}
        </td>
        <td>
          <a
            id="black-won"
            onClick={() => this.props.onResultClick(this.props.game, "Black")}
            className={this.props.game.game_result === "Black" ||
              this.props.game.game_result === null ? "chess-shown" : "chess-hidden"}
          >
          </a>
          <a
            id="white-won"
            onClick={() => this.props.onResultClick(this.props.game, "White")}
            className={this.props.game.game_result === "White" ||
              this.props.game.game_result === null ? "chess-shown" : "chess-hidden"}
          >
          </a>
          <a
            id="draw"
             onClick={() => this.props.onResultClick(this.props.game, "Draw")}
             className={this.props.game.game_result === "Draw" ||
               this.props.game.game_result === null ? "chess-shown" : "chess-hidden"}
          >
          </a>
        </td>
      </tr>
    );
  }
}


function mapStateToProps(state, { game }) {
  return { game };
}

const mapDispatchToProps = dispatch => {
  return {
    onResultClick: (game, result) => {
      dispatch(setGameResult(game, result))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Pairing);
