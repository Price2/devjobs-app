import React from 'react';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { Container, Grid, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


const CompanyCard = () => {
    return (
        <>
            <Container sx={{ marginTop: '32px' }}>
                <Grid container sx={{ marginTop: "105px", flexGrow: 1, justifyContent: 'center' }} direction="row" spacing={2}>
                    <Grid item md={10}>
                        <Card  style={{boxShadow:'none'}}>
                            <CardContent sx={{ padding: '48px' }}>
                                <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
                                    <p style={{ margin: '0' }}>1w ago</p>
                                    <img src={require('../images/oval.svg').default} />
                                    <p style={{ margin: '0' }}>Part Time</p>
                                </div>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <h4 style={{
                                        fontWeight: '700',
                                        fontSize: '28px',
                                        lineHeight: '35px',
                                        margin: '0px',
                                    }}>Senior Software Engineer</h4>


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
                                <p style={{
                                    fontWeight: '700',
                                    fontSize: '14px',
                                    lineHeight: '17px',
                                    color: '#5964E0',
                                    margin: '0px',
                                    marginBottom: '44px'
                                }}>United Kingdom</p>

                                <p style={{
                                    fontWeight: '400',
                                    fontSize: '16px',
                                    lineHeight: '26px',
                                    color: '#6E8098'
                                }}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue. Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est. Sed lectus. Praesent elementum hendrerit tortor. Sed semper lorem at felis. Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod dui, eu pulvinar nunc sapien ornare nisl. Phasellus pede arcu, dapibus eu, fermentum et, dapibus sed, urna.</p>
                                <h5 style={{
                                    fontWeight: '700',
                                    fontSize: '20px',
                                    lineHeight: '25px',
                                    color: '#19202D',
                                    marginTop: '40px',
                                    marginBottom: '28px'
                                }}>Requirements</h5>
                                <p style={{
                                    fontWeight: '400',
                                    fontSize: '16px',
                                    lineHeight: '26px',
                                    color: '#6E8098',
                                }}>Morbi interdum mollis sapien. Sed ac risus. Phasellus lacinia, magna a ullamcorper laoreet, lectus arcu pulvinar risus, vitae facilisis libero dolor a purus. Sed vel lacus. Mauris nibh felis, adipiscing varius, adipiscing in, lacinia vel, tellus. Suspendisse ac urna. Etiam pellentesque mauris ut lectus. Nunc tellus ante, mattis eget, gravida vitae, ultricies ac, leo. Integer leo pede, ornare a, lacinia eu, vulputate vel, nisl.</p>



                                <List>
                                    <ul style={{ listStyle: 'inside', color: 'gray', padding: '0' }}>
                                        <li style={{ marginBottom: '8px', }}><span style={{
                                            fontWeight: '400',
                                            fontSize: '16px',
                                            lineHeight: '26px',
                                            color: '#6E8098',
                                            marginLeft: '32px',

                                        }}>Morbi interdum mollis sapien. Sed</span></li>
                                        <li style={{ marginBottom: '8px' }}><span style={{
                                            fontWeight: '400',
                                            fontSize: '16px',
                                            lineHeight: '26px',
                                            color: '#6E8098',
                                            marginLeft: '32px',
                                        }}>Phasellus lacinia magna a ullamcorper laoreet, lectus arcu pulvinar risus</span></li>
                                        <li style={{ marginBottom: '8px' }}><span style={{
                                            fontWeight: '400',
                                            fontSize: '16px',
                                            lineHeight: '26px',
                                            color: '#6E8098',
                                            marginLeft: '32px',
                                            marginBottom: '8px',
                                            textAlign: 'center',
                                            whiteSpace: 'normal',
                                            wordWrap: "break-word"
                                        }}>Mauris nibh felis, adipiscing varius, adipiscing in, lacinia vel, tellus. Suspendisse ac urna. Etiam pellentesque mauris ut lectus.</span></li>
                                        <li style={{ marginBottom: '8px' }}><span style={{
                                            fontWeight: '400',
                                            fontSize: '16px',
                                            lineHeight: '26px',
                                            color: '#6E8098',
                                            marginLeft: '32px'
                                        }}>Morbi interdum mollis sapien. Sed</span></li>
                                    </ul>
                                </List>

                                <h5 style={{
                                    fontWeight: '700',
                                    fontSize: '20px',
                                    lineHeight: '25px',
                                    color: '#19202D',
                                    marginTop: '48px',
                                    marginBottom: '28px'
                                }}>What You Will Do</h5>

                                <p style={{
                                    fontWeight: '400',
                                    fontSize: '16px',
                                    lineHeight: '26px',
                                    color: '#6E8098',
                                }}>Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue. Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est. Sed lectus. Praesent elementum hendrerit tortor. Sed semper lorem at felis. Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod dui, eu pulvinar nunc sapien ornare nisl. Phasellus pede arcu, dapibus eu, fermentum et, dapibus sed, urna.</p>



                                <List>
                                    <ol style={{ color: '#5964E0', fontWeight: '700', fontSize: '16px', lineHeight: '26px' ,padding: '0' }}>
                                        <li style={{ marginBottom: '8px', }}><span style={{
                                            fontWeight: '400',
                                            fontSize: '16px',
                                            lineHeight: '26px',
                                            color: '#6E8098',
                                            marginLeft: '32px',

                                        }}>Morbi interdum mollis sapien. Sed</span></li>
                                        <li style={{ marginBottom: '8px' }}><span style={{
                                            fontWeight: '400',
                                            fontSize: '16px',
                                            lineHeight: '26px',
                                            color: '#6E8098',
                                            marginLeft: '32px',
                                        }}>Phasellus lacinia magna a ullamcorper laoreet, lectus arcu pulvinar risus</span></li>
                                        <li style={{ marginBottom: '8px', }}><span style={{
                                            fontWeight: '400',
                                            fontSize: '16px',
                                            lineHeight: '26px',
                                            color: '#6E8098',
                                            marginLeft: '32px',
                                            marginBottom: '8px',
                                            textAlign: 'center',
                                            whiteSpace: 'normal',
                                            wordWrap: "break-word"
                                        }}>Mauris nibh felis, adipiscing varius, adipiscing in, lacinia vel, tellus. Suspendisse ac urna. Etiam pellentesque mauris ut lectus.</span></li>
                                        <li style={{ marginBottom: '8px' }}><span style={{
                                            fontWeight: '400',
                                            fontSize: '16px',
                                            lineHeight: '26px',
                                            color: '#6E8098',
                                            marginLeft: '32px'
                                        }}>Morbi interdum mollis sapien. Sed</span></li>
                                    </ol>
                                </List>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Container>

        </>
    );
}

export default CompanyCard;
