import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Container, Grid } from '@mui/material';
import { Link } from "react-router-dom";



export default function MediaCard() {
  const [allCards, setAllCards] = React.useState([])


  React.useEffect(() => {
    const fetchJobs = fetch('https://serpapi.com/search.json?engine=google_jobs&q=dev+jobs&hl=en&api_key=6cb091e8a72932b7a36f9993009468977230efd78dddb749976aaefaed6f4e9b').then((data) => data.json()).then((json) => setAllCards(json.jobs_results))
    console.log('jobs fetched: ', fetchJobs)

  }, []);



  console.log('Cards: ', allCards)
  return (
    <Container>
      <Grid container sx={{ marginTop: "105px", flexGrow: 1 }} direction="row" spacing={2}>

        {allCards.map((job, idx) => {
          return (

            <Grid key={idx} item md={4} xs={6}>
              <Link to={job.job_id} style={{ textDecoration: 'none' }}>
                <Card sx={{ display: 'flex', flexDirection: 'column', position: 'relative', overflow: 'visible', height: '100%', boxShadow:'none' }}>

                <img src={job.thumbnail}
                  style={{
                    position: 'absolute',
                    top: '-21px',
                    left: ' 27px',
                    borderRadius: '15px',
                    width: '50px',
                  }} />
                <CardContent style={{ padding: '20px 25px', height: '100%' }}>
                  <div style={{ display: 'flex', gap: '28px' }}>
                    <p style={{ fontSize: '16px', lineHeight: '20px', fontWeight: '400', color: '#6E8098' }}>{job.detected_extensions?.posted_at}</p>
                    <p style={{ fontSize: '16px', lineHeight: '20px', fontWeight: '400', color: '#6E8098' }}>{job.detected_extensions?.scheduled_type}</p>

                  </div>
                  <p style={{
                    fontWeight: '700',
                    fontSize: '20px',
                    lineHeight: '25px',
                    color: '#19202D',
                    marginTop: '0px'
                  }}>{job.title}</p>
                  <p style={{ fontSize: '16px', lineHeight: '20px', fontWeight: '400', color: '#6E8098' }}>{job.company_name}</p>
                </CardContent>
                <div style={{ padding: '20px 25px' }}>
                  <h3 style={{
                    fontWeight: '700',
                    fontSize: '14px',
                    lineHeight: '17px',
                    color: '#5964E0',
                    margin: '0px'
                  }}>
                    {job.location}</h3>
                </div>
              </Card>
              </Link>
            </Grid>
          )
        })}





      </Grid >
    </Container>
  );
}