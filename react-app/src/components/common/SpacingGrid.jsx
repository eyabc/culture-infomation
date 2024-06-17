import * as React from 'react';
import Grid from '@mui/material/Grid';
import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton, Typography
} from "@mui/material";
import {red} from "@mui/material/colors";
import CommonImage from "./CommonImage";

function MoreVertIcon() {
  return null;
}

export default function SpacingGrid({list}) {

  return (
      <Grid sx={{flexGrow: 1}} container spacing={2}>
        <Grid item xs={12}>
          <Grid container justifyContent="center" spacing={2}>
            {list.map((item) => (
                <Grid key={item.id} item>
                  <Card sx={{
                    width: 300,
                  }}>
                    <CardHeader
                        avatar={
                          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                            {item.idEn}
                          </Avatar>
                        }
                        action={
                          <IconButton aria-label="settings">
                            <MoreVertIcon />
                          </IconButton>
                        }
                        title={item.title}
                        subheader={item.startDate === item.endDate ? item.startDate : item.startDate + " ~ " + item.endDate}
                    />

                    <CommonImage
                      item={item}
                    />

                    <CardContent>
                      <Typography variant="body2" color="text.secondary">
                        {item.idKo}
                        <p>{item.place}</p>
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
  );
}
