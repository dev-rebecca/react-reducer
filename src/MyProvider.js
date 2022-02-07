import React, { useContext, useState } from 'react';

const MyProvider = (props) => {
  const [darkTheme, setDarkTheme] = useState(false);

  const toggleDarkTheme = () => {
    setDarkTheme(true);
  };

  const ThemeContext = React.createContext();

  const useTheme = useContext(ThemeContext);

  return (
    <ThemeContext.Provider value={darkTheme}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export default MyProvider;
