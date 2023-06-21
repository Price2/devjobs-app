import React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { AppBar, Button, Container } from '@mui/material';
import { useLocation } from 'react-router-dom';
import { ThemeContext } from './ThemeToggler';




const CompanyFooter = () => {

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
        <>
            <AppBar position="relative" sx={{ marginTop: "153px" }}>
                {
                    currentSelectedCard.map((cardDetails, idx) => {
                        return (

                            <Paper key={idx } sx={{
                                position: 'absolute',
                                bottom: '0',
                                width: '100%',
                                display: 'flex',
                                padding: '10px',
                                backgroundColor: mode === "light-mode"? "#ffffff" : "#19202D"
                            }} component="footer" square variant="outlined">
                                <Container>
                                    <Grid container sx={{ flexGrow: 1, justifyContent: 'center' }} direction="row" spacing={2}>
                                        <Grid item md={10}>
                                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>

                                                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start' }}>

                                                    <h4 style={{
                                                        fontWeight: '700',
                                                        fontSize: '28px',
                                                        lineHeight: '35px',
                                                        margin: '0px',
                                                        color: mode === "light-mode"? "#19202D" : "#ffffff"
                                                    }}>{cardDetails.title }</h4>
                                                    <p style={{
                                                        fontWeight: '400',
                                                        fontSize: '16px',
                                                        lineHeight: '20px',
                                                        color: '#6E8098',
                                                        marginTop: '12px'
                                                    }}>{cardDetails.via? cardDetails.via: "So Digital Inc." }</p>
                                                </div>
                                                <div>

                                                    <Button variant="contained" sx={{
                                                        borderRadius: '5px',
                                                        background: '#5964E0',
                                                        textAlign: 'center',
                                                        color: '#fffff',
                                                        padding: '15px 20px',
                                                        ml: '15px',
                                                        textTransform: 'none',
                                                        ":hover": {
                                                            bgcolor: ' #939BF4',
                                                        }
                                                    }}><span style={{
                                                        fontWeight: '700',
                                                        fontSize: '16px',
                                                        lineHeight: '20px',
                                                    }}>Apply Now</span></Button>
                                                </div>
                                            </div>

                                        </Grid>
                                    </Grid>
                                </Container>
                            </Paper>
                        )
                    })
                }

            </AppBar>

        </>
    );
}

export default CompanyFooter;
