import React, { Component } from 'react';
import { connect } from 'react-redux';
import MeetingList from './MeetingList'
import Ladder from './Ladder'
import * as actions from '../actions';

class Home extends Component {

  render(){

    return (
      <div>
        <h4 className="center-align">
          {this.props.session.currentSessionName}
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

export default connect(mapStateToProps, actions)(Home);
