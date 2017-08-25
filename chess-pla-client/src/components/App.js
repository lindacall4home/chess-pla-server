import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './Header';

const Home = () => <h2>Home</h2>
const Register = () => <h2>Register</h2>
const Meeting = () => <h2>Meeting</h2>

const App = () => {
  return (
    <div className="container">
      <BrowserRouter>
        <div>
          <Header/>
          <Route exact path="/" component={Home} />
          <Route path="/register" component={Register} />
          <Route path="/meeting" component={Meeting} />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
