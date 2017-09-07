import React from 'react';
import { connect } from 'react-redux';
import './ChessClock.css';
import { setTimeInOut } from '../../actions';

class ChessClock extends React.Component {

  checkIn = () => {
    this.playSound();
    this.props.onInOutClick(this.props.player, this.formatTime(new Date()), null);
  }

  checkOut = () => {
    if(this.props.timeIn !== null){
      this.playSound();
      this.props.onInOutClick(this.props.player, this.props.timeIn, this.formatTime(new Date()));
    }
  }

  formatTime = (date) => {
    if(date === null || date === undefined){
      return "00:00";
    }

    let hours = date.getHours();
    if( hours > 12 ) {
      hours -= 12
    }
    return hours.toString().padStart(2, '0') + ":"  +   date.getMinutes().toString().padStart(2, '0');
  }

  getInSwitchClass = () => {
    if(this.props.timeIn === null ||
      (this.props.timeIn !== null &&
      this.props.timeOut !== null))
      return "";
    return "switch-down";
  }

  getOutSwitchClass = () => {
    if(this.props.timeIn !== null &&
      this.props.timeOut === null)
      return "";
    return "switch-down";
  }

  playSound = () => {
    const audio = new Audio('http://www.inkspilldesign.com/demo/toggle.mp3')
    audio.play()
  }

  render(){
    return (
      <div id="clock">
        <div className="switches">
          <div
            id="in-switch"
            onClick={this.checkIn}
            className={this.getInSwitchClass()}
            ></div>
          <div
            id="out-switch"
            onClick={this.checkOut}
            className={this.getOutSwitchClass()}
          ></div>
        </div>
        <div className="clock">

          <div className="timers">
            <div id="in" onClick={this.checkIn}>
              <h6>IN</h6>
              <div className="display">
                <span id="in-time">{this.props.timeIn === null ? null : this.props.timeIn.substr(0, 5)}</span>
              </div>

            </div>
            <div id="out" onClick={this.checkOut}>
               <h6>OUT</h6>
                <div className="display">
                    <span id="out-time">{this.props.timeOut === null ? null : this.props.timeOut.substr(0, 5)}</span>
                </div>

              </div>
            </div>
          </div>
          <div className="clock-base"></div>
          <div className="clock-base"></div>
      </div>
    );
  }
}


function mapStateToProps(state, ownProps) {
  return {
    player: ownProps.player,
    timeIn: ownProps.timeIn,
    timeOut: ownProps.timeOut
   };
}

const mapDispatchToProps = dispatch => {
  return {
    onInOutClick: (player, timeIn, timeOut) => {
      dispatch(setTimeInOut(player, timeIn, timeOut))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChessClock);
