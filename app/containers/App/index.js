/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Switch, Route, browserHistory,  BrowserRouter as Router} from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.css';

import Navbar from 'components/Navbar';

import Header from 'components/Header';
import Footer from 'components/Footer';

import Main from 'containers/Main';

import HomePage from 'containers/HomePage/Loadable';
import FeaturePage from 'containers/FeaturePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Landing from 'containers/Landing';

import Signup from 'containers/Signup/Loadable';
import Login from 'containers/Login/Loadable';
import Profile from 'containers/Profile/Loadable';
import Dashboard from 'containers/Dashboard/Loadable';
import ProjectView from 'containers/ProjectView/Loadable';
import RoleView from 'containers/RoleView/Loadable';
import './style.css';


export default function App() {
  return (

    
    <Router history={browserHistory}  >
        <div>
        <Navbar />
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route path="/signup" component={Signup} />
            <Route path="/login" component={Login} />
            <Route path="/profile" component={Profile} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/projectView" component={ProjectView} />
            <Route path="/roleView" component={RoleView} />
            <Route path="" component={NotFoundPage} />

          </Switch>
       
        </div>
    </Router>


  );
}
