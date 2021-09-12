import { BrowserRouter, Switch } from 'react-router-dom';
import GlobalStyle from '../styles/global';

import { AuthProvider } from '../context/AuthContext';
import { ExercisesProvider } from '../context/ExercisesContext';

import { Route } from './Routes';

import Home from '../pages/Home';
import Login from '../pages/Login';
import Create from '../pages/Create';

import Dashboard from '../pages/Dashboard';

function Routes() {
  return (
    <>
      <BrowserRouter>
        <AuthProvider>
          <ExercisesProvider>
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/login" component={Login} />
              <Route path="/create" component={Create} />

              <Route path="/dashboard" component={Dashboard} isPrivate />
            </Switch>
          </ExercisesProvider>
        </AuthProvider>
      </BrowserRouter>
      <GlobalStyle />
    </>
  );
}

export default Routes;
