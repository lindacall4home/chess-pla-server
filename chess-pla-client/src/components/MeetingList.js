import React, { Component } from 'react';
import { connect } from 'react-redux';

class MessageList extends Component {
  render(){
    return (
      <div className="chess-list">
        <ul className="collection with-header">
        <li className="collection-header"><h5>Meetings</h5></li>
        {this.props.session.allMeetings
          .map(meeting =>
            <li key={meeting.id}
                className="collection-item">
                {new Date(meeting.date).toDateString()}
            </li>
          )}
        </ul>
      </div>

    );
  }
}

function mapStateToProps({ session }) {
  return { session };
}

export default connect(mapStateToProps)(MessageList);
