import { BrowserRouter, Switch } from 'react-router-dom';
import GlobalStyle from '../styles/global';

import { AuthProvider } from '../context/AuthContext';

import { Route } from './Routes';

import Home from '../pages/Home';
import Login from '../pages/Login';
import Create from '../pages/Create';

import Dashboard from '../pages/Dashboard';

import { ExerciseModalProvider } from '../context/ExerciseModalContext';
import { ExerciseFormProvider } from '../context/ExerciseFormContext';

function Routes() {
  return (
    <>
      <BrowserRouter>
        <AuthProvider>
          <ExerciseModalProvider>
            <ExerciseFormProvider>
              <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/login" component={Login} />
                <Route path="/create" component={Create} />

                <Route path="/dashboard" component={Dashboard} isPrivate />
              </Switch>
            </ExerciseFormProvider>
          </ExerciseModalProvider>
        </AuthProvider>
      </BrowserRouter>
      <GlobalStyle />
    </>
  );
}

export default Routes;
