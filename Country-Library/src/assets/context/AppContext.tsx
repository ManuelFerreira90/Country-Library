import { createContext } from "react";

interface AppContextType{
    darkMode: boolean;
    setDarkMode: (darkMode: boolean) => void;
}
  
export const AppContext = createContext<AppContextType | undefined>(undefined);