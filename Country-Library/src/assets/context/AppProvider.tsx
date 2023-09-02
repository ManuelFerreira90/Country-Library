import { AppContext } from './AppContext';
import { useState } from 'react';
import { ReactNode } from 'react';

interface AppProviderProps {
    children: ReactNode;
}
  
export default function AppProvider({ children }: AppProviderProps) { 
    const [darkMode, setDarkMode] = useState(false);
    const [search, setSearch] = useState('');
  
    return (
      <AppContext.Provider value={{ darkMode, setDarkMode, search, setSearch }}>
        {children}
      </AppContext.Provider>
    );
}