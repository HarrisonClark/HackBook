import React from 'react';
import Nav from './components/Nav';
import Postfeed from './components/home/Postfeed';
import ProfilePage from './components/profile/ProfilePage';
import LoginPage from './components/auth/LoginPage';
import { UidProvider } from './components/UidContext';
import SignupPage from './components/auth/SignupPage';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Typography } from '@material-ui/core';

function App() {
  return (
    <UidProvider>
      <Router>
        <Nav />
        <Typography variant="h4" gutterBottom align="center" color="primary">
          HackBook
        </Typography>
        <Switch>
          <Route path="/profile">
            <ProfilePage />
          </Route>
          <Route path="/login">
            <LoginPage />
          </Route>
          <Route path="/signup">
            <SignupPage />
          </Route>
          <Route path="/logout">
            <LoginPage />
          </Route>
          <Route path="/">
            <Postfeed />
            {/* <SinglePost
              username="puppy"
              text="Hi I'm a cute dog"
              image="data:image/jpeg;base64,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"
            /> */}
          </Route>
        </Switch>
      </Router>
    </UidProvider>
  );
}

export default App;
