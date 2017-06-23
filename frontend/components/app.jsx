import React from 'react';
import { Route } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import FrontPage from './frontpage/front_page';
import MainPageContainer from './mainpage/mainpage_container';

import MessagesContainer from './mainpage/middle_right_column/messages/messages_container';

export const App = () => (
  <div className="container">
    <AuthRoute exact path="/" component={FrontPage} />
    <ProtectedRoute path="/main/" component={MainPageContainer} />
  </div>
);
