import React, { Component } from 'react';
import { connect } from 'react-redux';

class MessageList extends Component {
  render(){
    return (
      <div className="container">
        <ul> Meetings
          {this.props.session.all
            .map(meeting =>
              <li key={meeting.id}>{meeting.date}</li>
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
