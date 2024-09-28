import { createContext,useContext } from "react";

export const ThemeContext =createContext({
    themeMode: "dark",
    darkTheme: () =>{},
    lightTheme: () =>{},
    picture: "https://images.pexels.com/photos/14691503/pexels-photo-14691503.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
});

export const ThemeProvider = ThemeContext.Provider

export function useTheme(){
    return useContext(ThemeContext)
}   