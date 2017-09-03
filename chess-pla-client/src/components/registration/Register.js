import React from 'react';
import { connect } from 'react-redux';
import PlayerForm from './PlayerForm';
import * as actions from '../../actions';

class Register extends React.Component {
  handleSubmit(values) {
    this.props.addNewPlayer(values);
  }
  render(){
    return (
      <div>
        Welcome to registration!
        <PlayerForm onSubmit={this.handleSubmit.bind(this)}/>
/>
      </div>
    );
  }
}

function mapStateToProps({ session }) {
  return { session };
}

export default connect(mapStateToProps, actions)(Register);
