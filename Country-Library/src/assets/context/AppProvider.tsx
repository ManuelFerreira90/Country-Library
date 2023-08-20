import { AppContext } from './AppContext';
import { useState } from 'react';
import { ReactNode } from 'react';

interface AppProviderProps {
    children: ReactNode;
}
  
export default function AppProvider({ children }: AppProviderProps) { 
    const [darkMode, setDarkMode] = useState(false);
  
    return (
      <AppContext.Provider value={{ darkMode, setDarkMode }}>
        {children}
      </AppContext.Provider>
    );
}