import * as React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';

export default function SpacingGrid({ list })  {
  return (
      <Grid sx={{flexGrow: 1}} container spacing={2}>
        <Grid item xs={12}>
          <Grid container justifyContent="center" spacing={2}>
            {list.map((item) => (
                <Grid key={item.id} item>
                  <Paper
                      sx={{
                        height: 340,
                        width: 300,
                      }}
                  >
                    <div key={item.id}>
                      <p>{item.idEn}</p>
                      <p>{item.id}</p>
                      <p>{item.idKo}</p>
                      <p>{item.title}</p>
                      <p>{item.place}</p>
                      <p>{item.imageTag}</p>
                      <p>{item.startDate}</p>
                      <p>{item.endDate}</p>
                    </div>
                  </Paper>
                </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
  );
}
