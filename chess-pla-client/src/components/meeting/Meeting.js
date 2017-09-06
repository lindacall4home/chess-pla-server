import React from 'react';
import { connect } from 'react-redux';
import MeetingPlayerList from './MeetingPlayerList';
import ChallengeModal from './ChallengeModal';
import PairingList from './PairingList';
import * as actions from '../../actions';

class Meeting extends React.Component {

  componentDidMount(){
    this.props.fetchMeetingPlayers(this.props.meeting.meeting_id);
    this.props.fetchMeetingGames(this.props.meeting.meeting_id);
  }

  render(){
    return (
      <div>
        <h4 className="center-align">
          {new Date(this.props.meeting.date).toDateString()}
        </h4>
        <div className="flex-horizontal">
          <a className="waves-effect waves-light btn-large">Players</a>
          <a className="waves-effect waves-light btn-large">Games</a>
        </div>
        <div className="flex-horizontal">
          <ChallengeModal/>
          <MeetingPlayerList/>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ meeting }){
  return {
    meeting: meeting.currentMeeting
  };
}

export default connect(mapStateToProps, actions)(Meeting);
