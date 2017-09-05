import React from 'react';
import './ChessClock.css';

class ChessClock extends React.Component {
  render(){
    return (
      <div id="clock">
        <audio
          id="bell-sound"
          src="http://www.inkspilldesign.com/demo/bell.mp3"
          type="audio/mpeg"
        >
        </audio>
        <audio
          id="toggle-sound"
          src="http://www.inkspilldesign.com/demo/toggle.mp3"
          type="audio/mpeg"
        >
        </audio>
        <div className="switches">
          <div id="work-switch"></div>
          <div id="break-switch" className="switch-down"></div>
        </div>
        <div className="clock">
          
          <div className="timers">
            <div className="work">
              <h6>IN</h6>
              <div className="display">
                <span id="work-time">00:00</span>
              </div>

            </div>
            <div className="break">
               <h6>OUT</h6>
                <div className="display">
                    <span id="break-time">00:00</span>
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

export default ChessClock;
