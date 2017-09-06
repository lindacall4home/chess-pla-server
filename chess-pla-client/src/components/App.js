import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';
import '../App.css';
import 'react-date-picker2/index.css';
import Header from './Header';
import Home from './Home';
import Register from './registration/Register';
import MeetingsHome from './MeetingsHome';
import Meeting from './meeting/Meeting';

class App extends Component {

  componentDidMount(){
    this.props.fetchCurrentSession();
    this.props.fetchCurrentPlayers();
    this.props.fetchCurrentMeetings();
  }

  render(){

    return (
      <BrowserRouter className="container">
        <div>
          <Header/>
          <div>
            <Route exact path="/" component={Home} />
            <Route path="/register" component={Register} />
            <Route path="/meetingshome" component={MeetingsHome} />
            <Route path="/meeting" component={Meeting} />
          </div>
        </div>
      </BrowserRouter>
    );
  }
};

export default connect(null, actions)(App);
