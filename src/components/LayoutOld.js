import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import SearchArea from './SearchArea';

function ResponsiveAppBar({ ThemeToggler }) {
  // const [anchorElNav, setAnchorElNav] = React.useState(null);
  // const [anchorElUser, setAnchorElUser] = React.useState(null);

  // const handleOpenNavMenu = (event) => {
  //   setAnchorElNav(event.currentTarget);
  // };
  // const handleOpenUserMenu = (event) => {
  //   setAnchorElUser(event.currentTarget);
  // };

  // const handleCloseNavMenu = () => {
  //   setAnchorElNav(null);
  // };

  // const handleCloseUserMenu = () => {
  //   setAnchorElUser(null);
  // };

  return (
    <>
      <AppBar sx={{ borderRadius: '0px 0px 0px 100px', backgroundColor: '#5964E0' }} position="static" className="test">
        <Box>
          <Container sx={{display:'flex', justifyContent:'center', padding:'30px', paddingBottom:'80px'}}>
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
                flexGrow: 1, display: { xs: 'none', md: 'flex' }
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
              placeholder
            </Typography>
         </Container>
        </Box>
       
      </AppBar>
      <SearchArea />
    </>
  );
}
export default ResponsiveAppBar;