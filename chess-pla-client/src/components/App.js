import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';
import '../App.css';
import Header from './Header';
import Home from './Home'

const Register = () => <h2>Register</h2>
const Games = () => <h2>Games</h2>
const Players = () => <h2>Players</h2>

class App extends Component {

  componentDidMount(){
    this.props.fetchCurrentSession();
    this.props.fetchMeetings();
    this.props.fetchCurrentPlayers();
  }

  render(){

    return (
      <BrowserRouter>
        <div>
          <Header/>
          <div>
            <Route exact path="/" component={Home} />
            <Route path="/register" component={Register} />
            <Route path="/games" component={Games} />
            <Route path="/players" component={Players} />
          </div>
        </div>
      </BrowserRouter>
    );
  }
};

export default connect(null, actions)(App);
