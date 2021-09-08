import {
  createContext, useCallback, useContext, useState,
} from 'react';
import api from '../services/api';

const AuthContext = createContext();

// eslint-disable-next-line react/prop-types
const AuthProvider = ({ children }) => {
  const [data, setData] = useState(() => {
    const token = localStorage.getItem('@P2:token');
    const user = localStorage.getItem('@P2:user');

    if (token && user) {
      return { token, user: JSON.parse(user) };
    }

    return {};
  });

  const signIn = useCallback(async ({ email, password }) => {
    const response = await api.post('/users', {
      email,
      password,
    });

    const { token, user } = response.data;

    localStorage.setItem('@P2:token', token);
    localStorage.setItem('@P2:user', JSON.stringify(user));

    setData({ token, user });
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem('@P2:token');
    localStorage.removeItem('@P2:user');

    setData({});
  }, []);

  return (
    <AuthContext.Provider value={{ user: data.user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be usedwithin an AuthProvider');
  }

  return context;
}

export { AuthProvider, useAuth };
