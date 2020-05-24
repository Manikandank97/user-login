import React from 'react';
import { Router, Route, Switch, Redirect } from 'react-router'
import { history } from "./utils/history";
import './App.css';
import LoginPage from './components/loginPage';
import RegisterPage from './components/registerPage';
import DashboardPage from './components/dashboardPage'

function App() {
  return (
    <div className="container">
      <div className="jumbotron">
        <div className="col-md-12 col-sm-12 d-flex justify-content-center">
          <Router history={history}>
            <Switch>
              <Route exact={true} path="/" component={LoginPage} />
              <Route path="/login" component={LoginPage} />
              <Route path="/register" component={RegisterPage} />
              <Route path="/dashboard" component={DashboardPage} />
              <Redirect from="*" to="/" />
            </Switch>
          </Router>
        </div>
      </div>
    </div>
  );
}

export default App;
