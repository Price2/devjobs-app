import React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { Button, Container, List } from '@mui/material';
import { Routes, Route, useLocation } from 'react-router-dom';
import { ThemeContext } from './ThemeToggler';


const CompanyHeader = () => {

    const [currentSelectedCard, setCurrentSelectedCard] = React.useState([])
    const location = useLocation();
    const toggler = React.useContext(ThemeContext)
    const mode = toggler.theme

    React.useEffect(() => {
        if (!currentSelectedCard.length) {
            setCurrentSelectedCard([location.state.job])
        }
    }, [location.state]);

    return (


        <Box>
            <Container maxWidth="lg" sx={{ marginTop: '-60px' }}>
                {
                    currentSelectedCard.map((cardDetails, idx) => {
                        return (

                            <Grid key={ idx} container sx={{ flexGrow: 1, justifyContent: 'center' }} direction="row" spacing={2}>

                                <Grid item md={10}>
                                    <Paper sx={{ display: 'flex', alignItems: 'center', width: '100%', border: 'none', boxShadow: 'none', backgroundColor: mode === "light-mode"? "#ffffff" : "#19202D" }}>
                                        <List component="div" sx={{ display: 'flex', alignItems: 'flex', padding: '0' }} >
                                            <img src={cardDetails.thumbnail? cardDetails.thumbnail: require('../images/company_pic.svg').default} />
                                        </List>

                                        <List component="div" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginLeft: '10px', flexGrow: 1 }}>
                                            <h3 style={{
                                                fontStyle: 'normal',
                                                fontWeight: '700',
                                                fontSize: '24px',
                                                lineHeight: '30px',
                                                color:  mode === "light-mode"? "#19202D" : "#ffffff",
                                                marginTop: '0',
                                                marginLeft: '50px'
                                            }}>{cardDetails.company_name? cardDetails.company_name: "Scoot"}</h3>
                                            <h3 style={{
                                                fontStyle: 'normal',
                                                fontWeight: '400',
                                                fontSize: '16px',
                                                lineHeight: '20px',
                                                color: '#6E8098',
                                                marginTop: '0',
                                                marginLeft: '50px',
                                            }}>{cardDetails.via? cardDetails.via : "url.com"}</h3>
                                        </List>

                                        <List component="div" sx={{ display: 'flex', alignItems: 'center', marginLeft: '10px', padding: '15px 43px' }}>
                                            <Button variant="contained" sx={{
                                                borderRadius: '5px',
                                                background: mode === "light-mode"? '#eff0fc': "#303642",
                                                textAlign: 'center',
                                                padding: '15px 20px',
                                                ml: '15px',
                                                textTransform: 'none',
                                                ":hover": {
                                                    bgcolor: mode === "light-mode"? '#c4c8f4': "#535862",
                                                }
                                            }}><span style={{
                                                fontWeight: '700',
                                                fontSize: '16px',
                                                    lineHeight: '20px',
                                                    color: mode === "light-mode"? '#5964E0': "#ffffff",
                                            }}>Company Site</span></Button>

                                        </List>
                                    </Paper>
                                </Grid>
                            </Grid>
                        )
                    }
                    )}
            </Container>

        </Box >
    );
}

export default CompanyHeader;
