import React, { Component } from 'react';
import { connect } from 'react-redux';

class NewPlayer extends Component {
  render(){
    return (
      <div >
        Add New Player
      </div>

    );
  }
}

function mapStateToProps({ registration }) {
  return { registration };
}

export default connect(mapStateToProps)(NewPlayer);
