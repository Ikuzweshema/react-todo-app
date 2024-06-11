import { createContext, ReactNode, useState } from "react";

export const ThemeContext = createContext();

export default function ThemeProvider({ children }: { children: ReactNode }) {
  const [darkTheme, setDarkTheme] = useState(false);
  function toogleTheme() {
    setDarkTheme(!darkTheme);
  }

  return (
    <ThemeContext.Provider value={{darkTheme, toogleTheme}}>
      {children}
    </ThemeContext.Provider>
  );
}

