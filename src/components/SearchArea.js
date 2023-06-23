import React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import { Button, Container, Divider, List, TextField, Typography } from '@mui/material';
import Checkbox from '@mui/joy/Checkbox';
import { ThemeContext } from './ThemeToggler';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };


const SearchArea = ({ filters }) => {
    const [input, setInput] = React.useState({
        search: "",
        location: "",
        full_time: false
    })
    const toggler = React.useContext(ThemeContext)
    const mode = toggler.theme

    const handleInput = () => {
        filters(input)
    }
    return (
        <Box>
            <Container maxWidth="lg" sx={{ display: { sm:'flex', xs:"none"}, justifyContent: 'center', marginTop: '-40px' }}>
                <Paper sx={{ display: 'flex', alignItems: 'center', width: '100%', border: 'none', boxShadow: 'none', backgroundColor: mode == 'light-mode' ? '#ffffff' : '#19202D' }}>
                    <List component="div" sx={{ display: 'flex', alignItems: 'center', padding: '15px 10px', flexGrow: 1 }} >
                        <img src={require('../images/search-icon.svg').default} />
                        <TextField
                            margin="dense"
                            id="standard-search"
                            placeholder="Filter by title, companies, expertise…"
                            name="search"
                            type="search"
                            variant="standard"
                            onChange={(e) => setInput((prev) => { return { ...prev, [e.target.name]: e.target.value } })}
                            InputProps={{
                                disableUnderline: true,
                            }}
                            fullWidth
                            sx={{
                                ml: '10px',
                                input: {
                                    color: mode == 'light-mode' ? ' #19202D ' : '#ffffff',

                                },
                            }}
                        />
                    </List>
                    <Divider orientation="vertical" flexItem sx={{ color: '#6E8098', borderWidth: '1px', opacity: '0.2', borderColor: "#6E8098" }} />

                    <List component="div" sx={{ display: 'flex', alignItems: 'center', marginLeft: '10px', flexGrow: 1, padding: '15px 10px' }}>
                        <img src={require('../images/location-icon.svg').default} />
                        <TextField
                            margin="dense"
                            id="standard-search"
                            placeholder="Filter by title, companies, expertise…"
                            type="search"
                            name="location"
                            onChange={(e) => setInput((prev) => { return { ...prev, [e.target.name]: e.target.value } })}
                            variant="standard"
                            InputProps={{
                                disableUnderline: true, // <== added this
                            }}
                            sx={{
                                ml: '10px',
                                input: {
                                    color: mode == 'light-mode' ? ' #19202D ' : '#ffffff',

                                },
                            }}
                        />

                    </List>
                    <Divider orientation="vertical" flexItem sx={{ color: '#6E8098', borderWidth: '1px', opacity: '0.2', borderColor: "#6E8098" }} />
                    <List component="div" sx={{ display: 'flex', alignItems: 'center', marginLeft: '10px', padding: '15px 10px' }}>
                        <Checkbox variant="soft" sx={{ mr: '10px' }} name="full_time" onClick={(e) => setInput((prev) => { return { ...prev, [e.target.name]: e.target.checked } })} />



                        <Typography
                            sx={{
                                fontFamily: 'Kumbh Sans',
                                fontStyle: 'normal',
                                fontWeight: '700',
                                fontSize: '16px',
                                lineHeight: '20px',
                                color: mode == 'light-mode' ? ' #19202D ' : '#ffffff',
                            }}>
                            Full Time Only
                        </Typography>
                        <Button onClick={handleInput} variant="contained" sx={{
                            borderRadius: '5px',
                            background: '#5964E0',
                            fontWeight: '700',
                            fontSize: '16px',
                            lineHeight: '20px',
                            textAlign: 'center',
                            padding: '15px 40px',
                            ml: '15px',
                            textTransform: 'none',
                            ":hover": {
                                bgcolor: ' #939BF4',
                            }
                        }}>Search</Button>


                    </List>
                </Paper>
            </Container>


            <Container maxWidth="lg" sx={{ display: {lg:"none", md:"none", sm:"none", xs:'flex'} , justifyContent: 'center', marginTop: '-40px' }}>
                <Paper sx={{ display: 'flex', alignItems: 'center', width: '100%', border: 'none', boxShadow: 'none', backgroundColor: mode == 'light-mode' ? '#ffffff' : '#19202D' }}>
                    <List component="div" sx={{ display: 'flex', alignItems: 'center', padding: '15px 10px', flexGrow: 1 }} >
                        <TextField
                            margin="dense"
                            id="standard-search"
                            placeholder="Filter by title…"
                            name="search"
                            type="search"
                            variant="standard"
                            onChange={(e) => setInput((prev) => { return { ...prev, [e.target.name]: e.target.value } })}
                            InputProps={{
                                disableUnderline: true,
                                endAdornment: (
                                    <img src={require('../images/filter_icon.svg').default } />
                                  ),
                            }}
                        
                            fullWidth
                            sx={{
                                ml: '10px',
                                input: {
                                    color: mode == 'light-mode' ? ' #19202D ' : '#ffffff',

                                },
                            }}
                        />
                    </List>
                    <List component="div" sx={{ display: 'flex', alignItems: 'center', marginLeft: '10px', padding: '15px 10px' }}>
                       
                        <Button onClick={handleInput} variant="contained" sx={{
                            borderRadius: '5px',
                            background: '#5964E0',
                            fontWeight: '700',
                            fontSize: '16px',
                            lineHeight: '20px',
                            textAlign: 'center',
                            padding: '10px 10px',
                            ml: '15px',
                            textTransform: 'none',
                            ":hover": {
                                bgcolor: ' #939BF4',
                            }
                        }}><img src={require("../images/small_search_icon.svg").default} /></Button>


                    </List>
                </Paper>
            </Container>
        </Box >
    );
}

export default SearchArea;
