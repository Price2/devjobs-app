import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';




const Layout = (props) => {
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
           {props.children}
        </>
      );
    }

export default Layout;
