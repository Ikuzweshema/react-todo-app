import { createContext, useState } from "react";
const ThemeContext = createContext(undefined);


function ThemeProvider({ children }) {
  const [darkTheme, setDarkTheme] = useState(false);

  function toggleTheme() {
    setDarkTheme(prev => !prev);
  }
  return (
    <ThemeContext.Provider value={{ darkTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
export { ThemeProvider, ThemeContext }