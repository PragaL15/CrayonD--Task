import * as React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import '../../styles/catlog.css'; // Import the normal CSS

const Item = (props) => (
  <Paper elevation={props.elevation} className="elevation-item">
    {`elevation=${props.elevation}`}
  </Paper>
);

export default function SingleTableElevation() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Box className="elevation-container">
          {[0, 1, 2, 3, 4, 6, 8, 12, 16, 24].map((elevation) => (
            <Item key={elevation} elevation={elevation} />
          ))}
        </Box>
      </Grid>
    </Grid>
  );
}
