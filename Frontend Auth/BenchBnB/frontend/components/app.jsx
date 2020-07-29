import React from 'react';
import { Provider } from 'react-redux';
import {
   Route,
   Redirect,
   Switch,
   Link,
   HashRouter
} from 'react-router-dom';

import GreetingContainer from './greeting/greeting_container';
import SignupFormContainer from './../components/session_form/signup_form_container';
import LogInFormContainer from './../components/session_form/login_form_container';
import { AuthRoute } from './../util/route_util';

const App = () => (
   <div>
      <header>
         <h1>Bench BnB</h1>
         <GreetingContainer />
      </header>

      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
      <ProtectedRoute exact path="/benches/new" component={BenchFormContainer} />
      <Route exact path="/" component={SearchContainer} />
   </div>
);

export default App;