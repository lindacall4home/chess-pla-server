import React from 'react';
import { connect } from 'react-redux';
import MeetingPlayers from './MeetingPlayers';
import * as actions from '../../actions';

class Meeting extends React.Component {

  componentDidMount(){
    this.props.fetchMeetingPlayers(this.props.meeting.currentMeeting);
  }

  render(){
    console.log('in meeting ', this.props.meeting);
    return (
      <div>
        <h1>Welcome to Chess Club!</h1>
        <MeetingPlayers/>
      </div>
    );
  }
}

function mapStateToProps({ meeting }) {
  return { meeting };
}

export default connect(mapStateToProps, actions)(Meeting);
