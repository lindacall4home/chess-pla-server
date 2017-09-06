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
        <h4 className="center-align chess-page-header">
          Eldorado K-8 Chess Club
        </h4>
        <h5 className="center-align chess-page-sub-header">
          2017-2018
        </h5>
        <PlayerForm
          onSubmit={this.handleSubmit.bind(this)}
        />
      </div>
    );
  }
}

function mapStateToProps({ session }) {
  return { session };
}

export default connect(mapStateToProps, actions)(withRouter(Register));
