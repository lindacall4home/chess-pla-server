import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

const Header = () => <h2>Header</h2>
const Home = () => <h2>Home</h2>
const Register = () => <h2>Register</h2>
const Meeting = () => <h2>Meeting</h2>

const App = () => {
  return (
    <div>
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
