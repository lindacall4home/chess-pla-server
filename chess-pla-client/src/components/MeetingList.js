import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { setCurrentMeeting } from '../actions'

class MeetingList extends Component {
  render(){
    console.log('in meeting list ', this.props.session);
    return (
      <div className="chess-table">
        <h4 className="center-align">Meetings</h4>
        <table className="striped bordered">
          <thead>
            <tr>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {this.props.session.allMeetings
            .map(meeting =>
              <tr key={meeting.meeting_id}>
                <td>
                  <Link to={'/meeting'} onClick={() => {
                    this.props.onMeetingClick(meeting)}}>
                    {new Date(meeting.date).toDateString()}
                  </Link>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    );
  }
}

function mapStateToProps({ session }) {
  return { session };
}

const mapDispatchToProps = dispatch => {
  return {
    onMeetingClick: meeting => {
      dispatch(setCurrentMeeting(meeting))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MeetingList);
