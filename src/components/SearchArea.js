import React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import { Button, Container, Divider, List, TextField, Typography } from '@mui/material';
import Checkbox from '@mui/joy/Checkbox';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };



const SearchArea = () => {
    return (
        <Box>
            <Container maxWidth="lg" sx={{ display: 'flex', justifyContent: 'center', marginTop:'-40px' }}>
                <Paper sx={{ display: 'flex', alignItems: 'center', width: '100%', border:'none', boxShadow:'none' }}>
                    <List component="div" sx={{ display: 'flex', alignItems: 'center', padding: '15px 10px',  flexGrow: 1 }} >
                        <img src={require('../images/search-icon.svg').default} />
                        <TextField
                            margin="dense"
                            id="standard-search"
                            placeholder="Filter by title, companies, expertise…"
                            type="search"
                            variant="standard"
                            InputProps={{
                                disableUnderline: true,
                            }}
                            fullWidth
                            sx={{ ml: '10px' }}
                        />
                    </List>
                    <Divider orientation="vertical" flexItem />

                    <List component="div" sx={{ display: 'flex', alignItems: 'center', marginLeft: '10px', flexGrow: 1, padding: '15px 10px'}}>
                        <img src={require('../images/location-icon.svg').default} />
                        <TextField
                            margin="dense"
                            id="standard-search"
                            placeholder="Filter by title, companies, expertise…"
                            type="search"
                            variant="standard"
                            InputProps={{
                                disableUnderline: true, // <== added this
                            }}
                            sx={{ ml: '10px' }}
                        />

                    </List>
                    <Divider orientation="vertical" flexItem />
                    <List component="div" sx={{ display: 'flex', alignItems: 'center', marginLeft: '10px',padding: '15px 10px' }}>
                        <Checkbox variant="soft" sx={{mr:'10px'}} />



                        <Typography
                            sx={{
                                fontFamily: 'Kumbh Sans',
                                fontStyle: 'normal',
                                fontWeight: '700',
                                fontSize: '16px',
                                lineHeight: '20px',

                            }}>
                            Full Time Only
                        </Typography>
                        <Button variant="contained" sx={{
                            borderRadius: '5px',
                            background: '#5964E0',
                            fontWeight: '700',
                            fontSize: '16px',
                            lineHeight: '20px',
                            textAlign: 'center',
                            padding: '15px 40px',
                            ml: '15px',
                            textTransform: 'none'
                        }}>Search</Button>


                    </List>
                </Paper>
            </Container>

        </Box >
    );
}

export default SearchArea;
