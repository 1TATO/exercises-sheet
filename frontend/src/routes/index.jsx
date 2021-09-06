import { BrowserRouter, Route, Switch } from 'react-router-dom';
import GlobalStyle from '../styles/global';

import Home from '../pages/Home';
import Login from '../pages/Login';
import Create from '../pages/Create';

import Dashboard from '../pages/Dashboard';

function Routes() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/create" component={Create} />

          <Route path="/dashboard" component={Dashboard} />
        </Switch>
      </BrowserRouter>
      <GlobalStyle />
    </>
  );
}

export default Routes;
