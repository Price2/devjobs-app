import { Container } from '@mui/joy';
import React from 'react';
import { ThemeContext } from './ThemeToggler';

const NotFound = () => {
    const toggler = React.useContext(ThemeContext)
    const mode = toggler.theme

    return (

        <div style={{
            fontWeight: '700',
            fontSize: '28px',
            lineHeight: '35px',
            position: 'absolute',
            margin: '0px',
            color: mode === "light-mode" ? "#19202D" : "#ffffff",
            position: 'absolute',
            left: '50%',
            top: '50%',
            transform: 'translateX(-50%) translateY(-50%)'
        }}>404 Page Not Found</div>
    );
}

export default NotFound;
