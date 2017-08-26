import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';
import Header from './Header';
import MeetingList from './MeetingList'

//const Home = () => <h2>Home</h2>
const Register = () => <h2>Register</h2>
const Games = () => <h2>Games</h2>
const Players = () => <h2>Players</h2>

class App extends Component {

  componentDidMount(){
    this.props.fetchMeetings();
  }

  render(){
    return (
      <div className="container">
        <BrowserRouter>
          <div>
            <Header/>
            <Route exact path="/" component={MeetingList} />
            <Route path="/register" component={Register} />
            <Route path="/games" component={Games} />
            <Route path="/players" component={Players} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
};

export default connect(null, actions)(App);
