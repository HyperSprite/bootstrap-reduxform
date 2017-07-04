import React from 'react';
import { Route, Switch } from 'react-router-dom';

import About from './../components/about';
import Home from './../components/home';
import Search from './../components/search/search-wizard';
import Signin from './../components/auth/signin';
import Signup from './../components/auth/signup';
import Signout from './../components/auth/signout';
import UserProfile from './../components/auth/user-profile';
import UserWizard from './../components/auth/user-wizard';

const router = (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/about" component={About} />
    <Route path="/search" component={Search} />
    <Route path="/user-profile" component={UserProfile} />
    <Route path="/user-wizard" component={UserWizard} />
    <Route path="/signin" component={Signin} />
    <Route path="/signup" component={Signup} />
    <Route path="/signout" component={Signout} />
    <Route path="/" component={Home} />
  </Switch>
);

export default router;
