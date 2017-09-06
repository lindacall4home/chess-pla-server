import React, { Component } from 'react';
import { connect } from 'react-redux';
import MeetingList from './MeetingList'

class MeetingsHome extends Component {

  render(){

    return (
      <div>
        <h4 className="center-align chess-page-header">
          Eldorado K-8 Chess Club
        </h4>
        <h5 className="center-align chess-page-sub-header">
          2017-2018
        </h5>
        <div className="flex-horizontal">
          <MeetingList/>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ session }) {
  return { session };
}

export default connect(mapStateToProps)(MeetingsHome);
