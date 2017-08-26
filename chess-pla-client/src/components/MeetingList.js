import React, { Component } from 'react';
import { connect } from 'react-redux';

class MessageList extends Component {
  render(){
    return (
      <div className="container">
        <ul className="collection with-header">
          <li className="collection-header"><h4>Meetings</h4></li>
          {this.props.session.all
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
