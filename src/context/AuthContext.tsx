import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

// Hardcoded credentials (можна змінити на свої)
const VALID_CREDENTIALS = {
  username: 'admin',
  password: 'futsal2024',
};

interface User {
  username: string;
}

interface AuthContextType {
  // Current user (null if not logged in)
  user: User | null;
  
  // Whether user is authenticated
  isAuthenticated: boolean;
  
  // Sign in with username and password
  signIn: (username: string, password: string) => boolean;
  
  // Sign out
  signOut: () => void;
  
  // Error message if any
  error: string | null;
  
  // Clear error
  clearError: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Local storage key for persisting auth
const AUTH_STORAGE_KEY = 'futsal_auth_user';

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [error, setError] = useState<string | null>(null);

  // Load user from localStorage on mount
  useEffect(() => {
    const storedUser = localStorage.getItem(AUTH_STORAGE_KEY);
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch {
        localStorage.removeItem(AUTH_STORAGE_KEY);
      }
    }
  }, []);

  // Sign in with username and password
  const signIn = (username: string, password: string): boolean => {
    setError(null);
    
    // Check credentials
    if (
      username === VALID_CREDENTIALS.username && 
      password === VALID_CREDENTIALS.password
    ) {
      const newUser = { username };
      setUser(newUser);
      localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(newUser));
      return true;
    } else {
      setError('Невірний логін або пароль');
      return false;
    }
  };

  // Sign out
  const signOut = () => {
    setUser(null);
    setError(null);
    localStorage.removeItem(AUTH_STORAGE_KEY);
  };

  // Clear error
  const clearError = () => setError(null);

  const value: AuthContextType = {
    user,
    isAuthenticated: !!user,
    signIn,
    signOut,
    error,
    clearError,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
};
