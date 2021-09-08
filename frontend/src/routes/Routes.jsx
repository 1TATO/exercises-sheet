import PropTypes, { any } from 'prop-types';
import { Route as ReactDOMRoute, Redirect } from 'react-router-dom';

import { useAuth } from '../context/AuthContext';

export const Route = ({ isPrivate, component: Component }) => {
  const { user } = useAuth();

  return (
    <ReactDOMRoute
      render={() => (isPrivate === !!user ? (
        <Component />
      ) : (
        <Redirect to={{ pathname: isPrivate ? '/' : '/dashboard' }} />
      ))}
    />
  );
};

Route.propTypes = {
  isPrivate: PropTypes.bool,
  // eslint-disable-next-line react/forbid-prop-types
  component: PropTypes.any,
};

Route.defaultProps = {
  isPrivate: false,
  component: any,
};

export default Route;
