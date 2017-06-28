import React from 'react';
import { Route, Switch } from 'react-router-dom';

import About from './../components/about';
import Home from './../components/home';
import Search from './../components/search/search-wizard';
import Signin from './../components/auth/signin';
import Signup from './../components/auth/signup';
import Signout from './../components/auth/signout';

const router = (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/about" component={About} />
    <Route path="/search" component={Search} />
    <Route path="/signin" component={Signin} />
    <Route path="/signup" component={Signup} />
    <Route path="/signout" component={Signout} />
  </Switch>
);

export default router;
