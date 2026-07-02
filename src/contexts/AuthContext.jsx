import { createContext, useEffect, useState } from 'react';
import { subscribeToAuthChanges, loginWithGoogleService, registerWithEmailService, loginWithEmailService, logoutService } from '../services/auth';
import { useStore } from '../store';

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [loading, setLoading] = useState(true);
  const setUser = useStore(s => s.setUser);

  useEffect(() => {
    const unsub = subscribeToAuthChanges((userData) => {
      setUser(userData);
      setLoading(false);
    });
    return unsub;
  }, [setUser]);

  const loginWithGoogle = () => loginWithGoogleService();
  const registerWithEmail = (email, password, username) => registerWithEmailService(email, password, username);
  const loginWithEmail = (email, password) => loginWithEmailService(email, password);
  const logout = () => logoutService();

  return (
    <AuthContext.Provider value={{ loginWithGoogle, registerWithEmail, loginWithEmail, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
}
