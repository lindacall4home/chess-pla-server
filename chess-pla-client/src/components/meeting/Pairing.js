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
            className="chess-btn btn"
            style={{backgroundColor: "black", border: "1px solid black", borderRadius: "100%"}}
            onClick={() => this.props.onResultClick(this.props.game, "Black")}
          >
          </a>
          <a
            id="white-won"
            className="chess-btn btn"
            style={{backgroundColor: "white", border: "1px solid black", borderRadius: "100%"}}
            onClick={() => this.props.onResultClick(this.props.game, "White")}
          >
          </a>
          <a
            id="draw"
            className="chess-btn btn"
            style={{background: "linear-gradient(45deg, black, white)", border: "1px solid black", borderRadius: "100%"}}
             onClick={() => this.props.onResultClick(this.props.game, "Draw")}
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
