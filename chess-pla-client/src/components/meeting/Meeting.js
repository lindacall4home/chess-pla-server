import React from 'react';
import { connect } from 'react-redux';
import MeetingPlayerList from './MeetingPlayerList';
import ChallengeModal from './ChallengeModal';
import PairingList from './PairingList';
import GameResultModal from './GameResultModal';
import * as actions from '../../actions';
import { bindActionCreators } from 'redux'

class Meeting extends React.Component {

  componentDidMount(){
    this.props.actions.fetchMeetingPlayers(this.props.meeting.currentMeeting.meeting_id);
    this.props.actions.fetchMeetingGames(this.props.meeting.currentMeeting.meeting_id);
  }

  render(){
    return (
      <div>
        <h4 className="center-align chess-page-header">
          Eldorado K-8 Chess Club
        </h4>
        <h5 className="center-align chess-page-sub-header">
          {new Date(this.props.meeting.currentMeeting.date).toDateString()}
        </h5>
        <div>
          <ChallengeModal/>
          <MeetingPlayerList/>
          <GameResultModal/>
          <PairingList/>
        </div>
      </div>
    );
  }
}

// <div className="flex-horizontal">
//
//   <a
//     className="waves-effect waves-light"
//     style={{color: 'white', fontSize: '17px'}}
//     onClick={() => {
//       this.props.onPairPlayers(this.props.meeting)}}
//   >
//     Pair Players
//   </a>
//
// </div>

function mapStateToProps({ meeting, session }){
  return { meeting, session };
}

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Meeting);
