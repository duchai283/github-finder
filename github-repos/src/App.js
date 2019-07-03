import React from 'react';
import './App.css';
import NavBar from './components/layout/NavBar';
import Users from './components/users/Users';
import Search from './components/users/Search';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import GithubState from './context/github/GithubState';
import AlertState from './context/Alert/AlertState';
import UserDetail from './components/users/UserDetail';
import Alert from './components/layout/Alert';
import About from './components/layout/About';

const App = () => {
  return (
    <AlertState>
      <GithubState>
        <Router>
          <div className="App">
            <NavBar />
            <div className="container">
              <Switch>
                <Route path="/about" exact component={About} />
                <Route
                  path="/user/:username"
                  exact
                  render={props => <UserDetail {...props} />}
                />
                <Route
                  path="/"
                  exact
                  render={propsRoute => (
                    <>
                      <Alert />
                      <Search {...propsRoute} />
                      <Users />
                    </>
                  )}
                />
              </Switch>
            </div>
          </div>
        </Router>
      </GithubState>
    </AlertState>
  );
};

export default App;
