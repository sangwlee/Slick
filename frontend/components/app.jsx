import React from 'react';
import { Route } from 'react-router-dom';
import { AuthRoute } from '../util/route_util';
import FrontPage from './frontpage/front_page';
import MainPageContainer from './mainpage/mainpage_container';

export const App = () => (
  <div className="container">
    <Route exact path="/" component={FrontPage} />
    <Route path="/main" component={MainPageContainer} />
  </div>
);
