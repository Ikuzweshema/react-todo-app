import { createContext, useState } from "react";
const ThemeContext = createContext(undefined);


import React, { createContext, useState } from 'react';

// Create a context for theme management
const ThemeContext = createContext();

function ThemeProvider({ children }) {
  const [darkTheme, setDarkTheme] = useState(false);

  function toggleTheme() {
    try {
      setDarkTheme(prev => !prev);
    } catch (error) {
      console.error('Error toggling theme:', error);
    }
  }

  return (
    <ThemeContext.Provider value={{ darkTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// Error Boundary Component
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    // Update state to render fallback UI on error
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    // Log error to an external service
    console.error('Error in ThemeProvider:', error, info);
  }

  render() {
    if (this.state.hasError) {
      // Fallback UI for errors
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children;
  }
}

export { ThemeProvider, ThemeContext, ErrorBoundary };
