import React from 'react';
import './App.css';
import NavBar from './components/layout/NavBar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import GithubState from './context/github/GithubState';
import AlertState from './context/Alert/AlertState';
import UserDetail from './components/users/UserDetail';
import Alert from './components/layout/Alert';
import About from './components/pages/About';
import Home from './components/pages/Home';
import NotFound from './components/pages/NotFound';

const App = () => {
  return (
    <AlertState>
      <GithubState>
        <Router>
          <div className="App">
            <NavBar />
            <div className="container">
              <Alert />
              <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/about" exact component={About} />
                <Route path="/user/:username" exact component={UserDetail} />
                <Route component={NotFound} />
              </Switch>
            </div>
          </div>
        </Router>
      </GithubState>
    </AlertState>
  );
};

export default App;
