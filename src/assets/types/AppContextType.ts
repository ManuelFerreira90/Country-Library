import { Dispatch, SetStateAction } from 'react';

export interface AppContextType {
  darkMode: boolean;
  setDarkMode: (darkMode: boolean) => void;
  search: string;
  setSearch: Dispatch<SetStateAction<string>>;
  ativeFilter: boolean;
  setAtiveFilter: (ativeFilter: boolean) => void;
  filter: string;
  setFilter: Dispatch<SetStateAction<string>>;
}
