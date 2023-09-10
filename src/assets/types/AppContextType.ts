export interface AppContextType{
    darkMode: boolean;
    setDarkMode: (darkMode: boolean) => void;
    search: String;
    setSearch: (search: String) => void;
    ativeFilter: boolean;
    setAtiveFilter: (darkMode: boolean) => void;
    filter: String;
    setFilter: (search: String) => void;
}