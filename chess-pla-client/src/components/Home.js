import React, { Component } from 'react';
import { connect } from 'react-redux';
import MeetingList from './MeetingList'
import Ladder from './Ladder'

class Home extends Component {

  render(){

    return (
      <div>
        <h4 className="center-align">
          {this.props.session.currentSession.session_name}
        </h4>
        <div className="flex-horizontal">
          <Ladder/>
          <MeetingList/>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ session }) {
  return { session };
}

export default connect(mapStateToProps)(Home);
