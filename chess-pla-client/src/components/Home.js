import React, { Component } from 'react';
import { connect } from 'react-redux';
import MeetingList from './MeetingList'

class Home extends Component {
  render(){
    console.log(this.props.session);

    return (
      <div className="container">
        <h4 className="center-align">
          {this.props.session.currentSession.session_name}</h4>
        <MeetingList/>
      </div>
    );
  }
}

function mapStateToProps({ session }) {
  return { session };
}

export default connect(mapStateToProps)(Home);
