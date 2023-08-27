import { createContext } from "react";
import { AppContextType } from '../types/AppContextType';

export const AppContext = createContext<AppContextType | undefined>(undefined);