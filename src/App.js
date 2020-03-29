import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import {BrowserRouter as Router , Route , Switch} from 'react-router-dom';
import LoadingPage from './components/LoadingPage';
import SearchPage from './components/SearchPage';

export class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/">
              <LoadingPage/>
            </Route>

            <Route exact path="/search">
              <SearchPage/>
            </Route>
          </Switch>
        </Router>
      </div>
    )
  }
}

export default App
