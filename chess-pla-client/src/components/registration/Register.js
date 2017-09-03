import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PlayerForm from './PlayerForm';
import * as actions from '../../actions';

class Register extends React.Component {
  handleSubmit(values) {
    this.props.addNewSessionPlayer(values, this.props.history);
  }
  render(){
    return (
      <div>
        Welcome to registration!
        <PlayerForm session={this.props.session} onSubmit={this.handleSubmit.bind(this)}/>
      </div>
    );
  }
}

function mapStateToProps({ session }) {
  return { session };
}

export default connect(mapStateToProps, actions)(withRouter(Register));
