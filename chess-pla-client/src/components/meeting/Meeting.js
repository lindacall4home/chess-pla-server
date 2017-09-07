import React from 'react';
import { connect } from 'react-redux';
import MeetingPlayerList from './MeetingPlayerList';
import ChallengeModal from './ChallengeModal';
import PairingList from './PairingList';
import * as actions from '../../actions';
import { setShowPlayers } from '../../actions';
import { pairPlayers } from '../../actions';
import { bindActionCreators } from 'redux'

class Meeting extends React.Component {

  componentDidMount(){
    this.props.actions.fetchMeetingPlayers(this.props.meeting.meeting_id);
    this.props.actions.fetchMeetingGames(this.props.meeting.meeting_id);
  }

  render(){
    return (
      <div>
        <h4 className="center-align chess-page-header">
          Eldorado K-8 Chess Club
        </h4>
        <h5 className="center-align chess-page-sub-header">
          {new Date(this.props.meeting.date).toDateString()}
        </h5>
        <div className="flex-horizontal">
          <a
            className="waves-effect waves-light"
            style={{color: 'white', fontSize: '17px'}}
            onClick={() => this.props.onShowPlayers(true)}
          >
            Players
          </a>
          <a
            className="waves-effect waves-light"
            style={{color: 'white', fontSize: '17px'}}
            onClick={() => this.props.onPairPlayers()}
          >
            Pair Players
          </a>
          <a
            className="waves-effect waves-light"
            style={{color: 'white', fontSize: '17px'}}
            onClick={() => this.props.onShowPlayers(false)}
          >
            Games
          </a>
        </div>
        <div className="flex-horizontal">
          <ChallengeModal/>
          <MeetingPlayerList/>
          <PairingList/>
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

const mapDispatchToProps = dispatch => {
  return {
    onShowPlayers: show => {
      dispatch(setShowPlayers(show))
    },
    onPairPlayers: () => {
      dispatch(pairPlayers())
    },
    actions: bindActionCreators(actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Meeting);
