import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Button, FormControlLabel } from '@mui/material';
import { useTheme, ThemeProvider, createTheme } from '@mui/material/styles';
import Switch from '@mui/material/Switch';
import { styled } from '@mui/material/styles';

import Stack from '@mui/material/Stack';
import { ThemeContext } from './ThemeToggler';

const IOSSwitch = styled((props) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
  width: 42,
  height: 26,
  padding: 0,
  '& .MuiSwitch-switchBase': {
    padding: 0,
    margin: 2,
    transitionDuration: '300ms',
    '&.Mui-checked': {
      transform: 'translateX(16px)',
      color: '#fff',
      '& + .MuiSwitch-track': {
        backgroundColor: theme.palette.mode === 'dark' ? '#2ECA45' : '#65C466',
        opacity: 1,
        border: 0,
      },
      '&.Mui-disabled + .MuiSwitch-track': {
        opacity: 0.5,
      },
    },
    '&.Mui-focusVisible .MuiSwitch-thumb': {
      color: '#33cf4d',
      border: '6px solid #fff',
    },
    '&.Mui-disabled .MuiSwitch-thumb': {
      color:
        theme.palette.mode === 'light'
          ? theme.palette.grey[100]
          : 'theme.palette.grey[600]',
    },
    '&.Mui-disabled + .MuiSwitch-track': {
      opacity: theme.palette.mode === 'light' ? 0.7 : 0.3,
    },
  },
  '& .MuiSwitch-thumb': {
    boxSizing: 'border-box',
    width: 22,
    height: 22,
  },
  '& .MuiSwitch-track': {
    borderRadius: 26 / 2,
    backgroundColor: theme.palette.mode === 'light' ? '#E9E9EA' : '#39393D',
    opacity: 1,
    transition: theme.transitions.create(['background-color'], {
      duration: 500,
    }),
  },
}));

const Layout = (props) => {
  const theme = useTheme();
  const toggler = React.useContext(ThemeContext)
  return (
    <>
      <AppBar sx={{backgroundColor: '#5964E0' }} position="static" className="test">


          <Box>
            <Container sx={{ display: 'flex', justifyContent: 'center', padding: '30px', paddingBottom: '80px' }}>
              <Typography
                variant="h2"
                noWrap
                component="a"
                href="/"
                sx={{
                  mr: 2,
                  display: { md: 'flex' },
                  fontFamily: 'monospace',
                  fontSize: '24px',
                  fontWeight: 700,
                  lineHeight: '29px',
                  //   letterSpacing: '.3rem',
                  color: 'inherit',
                  textDecoration: 'none',
                  flexGrow: 1
                }}
              >
                devjobs
              </Typography>

              <Typography
                variant="h2"
                noWrap
                component="a"
                href="/"
                sx={{
                  mr: 2,
                  display: { xs: 'none', md: 'flex' },
                  fontFamily: 'monospace',
                  fontSize: '24px',
                  fontWeight: 700,
                  lineHeight: '29px',
                  //   letterSpacing: '.3rem',
                  color: 'inherit',
                  textDecoration: 'none',
                  display: { xs: 'none', md: 'flex' },
                  alignSelf: 'flex-end'
                }}
              >

              </Typography>
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Stack direction="row" spacing={1} alignItems="center">
                  <img src={require("../images/light_icon.svg").default} alt="" />
                  <FormControlLabel
                    control={<IOSSwitch sx={{ m: 1 }} onChange={toggler.toggleTheme} />}
                  />
                  <img src={require("../images/dark_icon.svg").default} alt="" />
                </Stack>
              </div>
            </Container>
          </Box>

      </AppBar>
      {props.children}

    </>
  );
}

export default Layout;
