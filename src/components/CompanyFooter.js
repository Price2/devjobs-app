import React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import { AppBar, Button, Container, Divider, List, TextField, Typography } from '@mui/material';
import Checkbox from '@mui/joy/Checkbox';
const CompanyFooter = () => {
    return (
        <>
            <AppBar position="relative" sx={{ marginTop: "153px" }}>
                <Paper sx={{
                    position: 'absolute',
                    bottom: '0',
                    width: '100%',
                    display: 'flex',
                    padding: '10px'
                }} component="footer" square variant="outlined">
                    <Container>
                        <Grid container sx={{ flexGrow: 1, justifyContent:'center' }} direction="row" spacing={2}>
                            <Grid item md={10}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>

                                    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start' }}>

                                        <h4 style={{
                                            fontWeight: '700',
                                            fontSize: '28px',
                                            lineHeight: '35px',
                                            margin: '0px',
                                        }}>Senior Software Engineer</h4>
                                        <p style={{
                                            fontWeight: '400',
                                            fontSize: '16px',
                                            lineHeight: '20px',
                                            color: '#6E8098',
                                            marginTop: '12px'
                                        }}>So Digital Inc.</p>
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
            </AppBar>

        </>
    );
}

export default CompanyFooter;
