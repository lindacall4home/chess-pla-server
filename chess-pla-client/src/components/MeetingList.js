import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { setCurrentMeeting } from '../actions'

class MeetingList extends Component {
  render(){
    console.log('in meeting list ', this.props.session);
    return (
      <div className="container">
        <div className="row">
          <div className="col s6 offset-s3 chess-table">
            <h4 className="center-align chess-table-header">Meetings</h4>
            <div className="chess-table-inner">
              <table className="bordered highlight centered">
                <thead>
                </thead>
                <tbody>
                  {this.props.session.allMeetings
                  .map(meeting =>
                    <tr key={meeting.meeting_id}>
                      <td>
                        <Link to={'/meeting'} style={{color: 'black', textDecoration: 'underline'}} onClick={() => {
                          this.props.onMeetingClick(meeting)}}>
                          {new Date(meeting.date).toLocaleDateString('en-US', { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric', timeZone: 'UTC' })}
                        </Link>
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
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
