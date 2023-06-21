import React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { Button, Container, List } from '@mui/material';
import { Routes, Route, useLocation } from 'react-router-dom';


const CompanyHeader = () => {

    const [currentSelectedCard, setCurrentSelectedCard] = React.useState([])

    const location = useLocation();


    React.useEffect(() => {
        console.log("card header? ", location.state.job)
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
                                    <Paper sx={{ display: 'flex', alignItems: 'center', width: '100%', border: 'none', boxShadow: 'none' }}>
                                        <List component="div" sx={{ display: 'flex', alignItems: 'flex', padding: '0' }} >
                                            <img src={cardDetails.thumbnail? cardDetails.thumbnail: require('../images/company_pic.svg').default} />
                                        </List>

                                        <List component="div" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginLeft: '10px', flexGrow: 1 }}>
                                            <h3 style={{
                                                fontStyle: 'normal',
                                                fontWeight: '700',
                                                fontSize: '24px',
                                                lineHeight: '30px',
                                                color: '#19202D',
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
                                                background: '#eff0fc',
                                                textAlign: 'center',
                                                color: '#5964E0',
                                                padding: '15px 20px',
                                                ml: '15px',
                                                textTransform: 'none'
                                            }}><span style={{
                                                fontWeight: '700',
                                                fontSize: '16px',
                                                lineHeight: '20px',
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
