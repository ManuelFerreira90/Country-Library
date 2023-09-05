import { AppContext } from "./AppContext";
import { useState } from "react";
import { ReactNode } from "react";

interface AppProviderProps {
  children: ReactNode;
}

export default function AppProvider({ children }: AppProviderProps) {
  const [darkMode, setDarkMode] = useState(true);
  const [search, setSearch] = useState("");
  const [ativeFilter, setAtiveFilter] = useState(false);
  const [filter, setFilter] = useState("");

  return (
    <AppContext.Provider
      value={{
        darkMode,
        setDarkMode,
        search,
        setSearch,
        ativeFilter,
        setAtiveFilter,
        filter,
        setFilter,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
