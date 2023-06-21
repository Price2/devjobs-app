import React, { createContext, useState } from 'react';




const ThemeContext = createContext();

const ThemeProvider = (props) => {

    const [theme, setTheme] = useState('light-mode');
    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light-mode' ? 'dark-mode' : 'light-mode'));
   
        document.body.style = theme === "light-mode" ? "background: #121721" : "background: #F4F6F8";

    };
    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {props.children}
        </ThemeContext.Provider>
    );
};
export { ThemeContext, ThemeProvider };