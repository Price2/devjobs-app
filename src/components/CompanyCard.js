import React from 'react';
import { Container, Grid, List } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import { useLocation, useNavigate  } from 'react-router-dom';
import { ThemeContext } from './ThemeToggler';


const CompanyCard = () => {

    const [currentSelectedCard, setCurrentSelectedCard] = React.useState([])
    const location = useLocation();
    const toggler = React.useContext(ThemeContext)
    const navigate = useNavigate();

    const mode = toggler.theme


    React.useEffect(() => {
        if (!currentSelectedCard.length && location.state?.job) {
            setCurrentSelectedCard([location.state.job])
        }
        else {
            return navigate("/notfound")
        }
    }, [location.state]);

    return (


        <Container sx={{ marginTop: '32px' }}>
            {currentSelectedCard.length?
                currentSelectedCard.map((cardDetails, idx) => {

                    return (
                        <Grid key={idx} container sx={{ marginTop: "105px", flexGrow: 1, justifyContent: 'center' }} direction="row" spacing={2}>
                            <Grid item md={10}>
                                <Card style={{ boxShadow: 'none', backgroundColor: mode === "light-mode" ? "#ffffff" : "#19202D" }}>
                                    <CardContent sx={{ padding: '48px' }}>
                                        <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
                                            <p style={{
                                                margin: '0',
                                                fontWeight: '400',
                                                fontSize: '16px',
                                                lineHeight: '20px',
                                                color: '#6E8098',
                                            }}>{cardDetails.detected_extensions.posted_at ? cardDetails.detected_extensions.posted_at : "5 Days Ago"}</p>
                                            <img src={require('../images/oval.svg').default} />
                                            <p style={{
                                                margin: '0',
                                                fontWeight: '400',
                                                fontSize: '16px',
                                                lineHeight: '20px',
                                                color: '#6E8098',
                                            }}>{cardDetails.detected_extensions.schedule_type ? cardDetails.detected_extensions.schedule_type : "Full Time"}</p>
                                        </div>
                                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                            <h4 style={{
                                                fontWeight: '700',
                                                fontSize: '28px',
                                                lineHeight: '35px',
                                                margin: '0px',
                                                color: mode === "light-mode" ? "#19202D" : "#ffffff"
                                            }}>{cardDetails.title}</h4>


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
                                        <p style={{
                                            fontWeight: '700',
                                            fontSize: '14px',
                                            lineHeight: '17px',
                                            color: '#5964E0',
                                            margin: '0px',
                                            marginBottom: '44px'
                                        }}>{cardDetails.location ? cardDetails.location : "United Kingdom"}</p>

                                        <p style={{
                                            fontWeight: '400',
                                            fontSize: '16px',
                                            lineHeight: '26px',
                                            color: mode === "light-mode" ? "#6E8098" : "#9DAEC2"
                                        }}>{cardDetails.description ? cardDetails.description : "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue. Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est. Sed lectus. Praesent elementum hendrerit tortor. Sed semper lorem at felis. Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod dui, eu pulvinar nunc sapien ornare nisl. Phasellus pede arcu, dapibus eu, fermentum et, dapibus sed, urna."}</p>
                                        <h5 style={{
                                            fontWeight: '700',
                                            fontSize: '20px',
                                            lineHeight: '25px',
                                            color: mode === "light-mode" ? "#19202D" : "#ffffff",
                                            marginTop: '40px',
                                            marginBottom: '28px'
                                        }}>Requirements</h5>
                                        {cardDetails.job_highlights.length ?
                                            cardDetails.job_highlights.map((highlights) => {
                                                return (

                                                    <>
                                                        {highlights.title == "Qualifications" ?
                                                            <List>
                                                                <ul style={{ listStyle: 'inside', color: 'gray', padding: '0' }}>
                                                                    {highlights.items.map((item) => {
                                                                        return (
                                                                            <li style={{ marginBottom: '8px', }}><span style={{
                                                                                fontWeight: '400',
                                                                                fontSize: '16px',
                                                                                lineHeight: '26px',
                                                                                color: mode === "light-mode" ? "#6E8098" : "#9DAEC2",
                                                                                marginLeft: '32px',

                                                                            }}>{item}</span></li>


                                                                        )
                                                                    })
                                                                    }
                                                                </ul>
                                                            </List>
                                                            : ""}
                                                    </>
                                                )
                                            })
                                            : <>

                                                <p style={{
                                                    fontWeight: '400',
                                                    fontSize: '16px',
                                                    lineHeight: '26px',
                                                    color: mode === "light-mode" ? "#6E8098" : "#9DAEC2",
                                                }}>Morbi interdum mollis sapien. Sed ac risus. Phasellus lacinia, magna a ullamcorper laoreet, lectus arcu pulvinar risus, vitae facilisis libero dolor a purus. Sed vel lacus. Mauris nibh felis, adipiscing varius, adipiscing in, lacinia vel, tellus. Suspendisse ac urna. Etiam pellentesque mauris ut lectus. Nunc tellus ante, mattis eget, gravida vitae, ultricies ac, leo. Integer leo pede, ornare a, lacinia eu, vulputate vel, nisl.</p>



                                                <List>
                                                    <ul style={{ listStyle: 'inside', color: 'gray', padding: '0' }}>
                                                        <li style={{ marginBottom: '8px', }}><span style={{
                                                            fontWeight: '400',
                                                            fontSize: '16px',
                                                            lineHeight: '26px',
                                                            color: mode === "light-mode" ? "#6E8098" : "#9DAEC2",
                                                            marginLeft: '32px',

                                                        }}>Morbi interdum mollis sapien. Sed</span></li>
                                                        <li style={{ marginBottom: '8px' }}><span style={{
                                                            fontWeight: '400',
                                                            fontSize: '16px',
                                                            lineHeight: '26px',
                                                            color: mode === "light-mode" ? "#6E8098" : "#9DAEC2",
                                                            marginLeft: '32px',
                                                        }}>Phasellus lacinia magna a ullamcorper laoreet, lectus arcu pulvinar risus</span></li>
                                                        <li style={{ marginBottom: '8px' }}><span style={{
                                                            fontWeight: '400',
                                                            fontSize: '16px',
                                                            lineHeight: '26px',
                                                            color: mode === "light-mode" ? "#6E8098" : "#9DAEC2",
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
                                                            color: mode === "light-mode" ? "#6E8098" : "#9DAEC2",
                                                            marginLeft: '32px'
                                                        }}>Morbi interdum mollis sapien. Sed</span></li>
                                                    </ul>
                                                </List>
                                            </>
                                        }

                                        <h5 style={{
                                            fontWeight: '700',
                                            fontSize: '20px',
                                            lineHeight: '25px',
                                            color: mode === "light-mode" ? "#19202D" : "#ffffff",
                                            marginTop: '48px',
                                            marginBottom: '28px'
                                        }}>What You Will Do</h5>



                                        {cardDetails.job_highlights.length ?
                                            cardDetails.job_highlights.map((highlights) => {
                                                return (

                                                    <>

                                                        {highlights.title == "Responsibilities" ?
                                                            <>
                                                                <p style={{
                                                                    fontWeight: '400',
                                                                    fontSize: '16px',
                                                                    lineHeight: '26px',
                                                                    color: mode === "light-mode" ? "#6E8098" : "#9DAEC2",
                                                                }}>Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue. Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est. Sed lectus. Praesent elementum hendrerit tortor. Sed semper lorem at felis. Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod dui, eu pulvinar nunc sapien ornare nisl. Phasellus pede arcu, dapibus eu, fermentum et, dapibus sed, urna.</p>
                                                                <List>
                                                                    <ul style={{ listStyle: 'inside', color: 'gray', padding: '0' }}>
                                                                        {highlights.items.map((item) => {
                                                                            return (
                                                                                <li style={{ marginBottom: '8px', }}><span style={{
                                                                                    fontWeight: '400',
                                                                                    fontSize: '16px',
                                                                                    lineHeight: '26px',
                                                                                    color: mode === "light-mode" ? "#6E8098" : "#9DAEC2",
                                                                                    marginLeft: '32px',

                                                                                }}>{item}</span></li>


                                                                            )
                                                                        })
                                                                        }
                                                                    </ul>
                                                                </List>
                                                            </>
                                                            : ""}

                                                    </>


                                                )
                                            })


                                            : <>
                                                <p style={{
                                                    fontWeight: '400',
                                                    fontSize: '16px',
                                                    lineHeight: '26px',
                                                    color: mode === "light-mode" ? "#6E8098" : "#9DAEC2",
                                                }}>Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue. Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est. Sed lectus. Praesent elementum hendrerit tortor. Sed semper lorem at felis. Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod dui, eu pulvinar nunc sapien ornare nisl. Phasellus pede arcu, dapibus eu, fermentum et, dapibus sed, urna.</p>



                                                <List>
                                                    <ol style={{ color: '#5964E0', fontWeight: '700', fontSize: '16px', lineHeight: '26px', padding: '0' }}>
                                                        <li style={{ marginBottom: '8px', }}><span style={{
                                                            fontWeight: '400',
                                                            fontSize: '16px',
                                                            lineHeight: '26px',
                                                            color: mode === "light-mode" ? "#6E8098" : "#9DAEC2",
                                                            marginLeft: '32px',

                                                        }}>Morbi interdum mollis sapien. Sed</span></li>
                                                        <li style={{ marginBottom: '8px' }}><span style={{
                                                            fontWeight: '400',
                                                            fontSize: '16px',
                                                            lineHeight: '26px',
                                                            color: mode === "light-mode" ? "#6E8098" : "#9DAEC2",
                                                            marginLeft: '32px',
                                                        }}>Phasellus lacinia magna a ullamcorper laoreet, lectus arcu pulvinar risus</span></li>
                                                        <li style={{ marginBottom: '8px', }}><span style={{
                                                            fontWeight: '400',
                                                            fontSize: '16px',
                                                            lineHeight: '26px',
                                                            color: mode === "light-mode" ? "#6E8098" : "#9DAEC2",
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
                                                            color: mode === "light-mode" ? "#6E8098" : "#9DAEC2",
                                                            marginLeft: '32px'
                                                        }}>Morbi interdum mollis sapien. Sed</span></li>
                                                    </ol>
                                                </List>
                                            </>}

                                    </CardContent>
                                </Card>
                            </Grid>
                        </Grid>

                    )

                })
            :""}
        </Container >

    );
}

export default CompanyCard;
