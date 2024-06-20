import * as React from 'react';
import Grid from '@mui/material/Grid';
import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  CardMedia, Chip,
  IconButton, Typography
} from "@mui/material";
import {red} from "@mui/material/colors";
import CommonImage from "./CommonImage";

function MoreVertIcon() {
  return null;
}

export default function SpacingGrid({list}) {

  const onClick = (id) => {
    const url = `https://www.karts.ac.kr/usr/shw/exh/selectUsrShowDetail.do?exNo=${id}`;
    window.open(url, '_blank',);
  }
  console.log(list)
  return (
      <Grid sx={{flexGrow: 1}} container spacing={2}>
        <Grid item xs={12}>
          <Grid container justifyContent="center" spacing={2}>
            {list.map((item) => (
                <Grid key={item.id} item>
                  <div
                      class='card'
                      onClick={(event) => onClick(item.id)}
                  >
                  <Card
                      sx={{
                    width: 300,
                  }}
                  >
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
                      <div style={{margin: '0 0 10px 10px'}}>
                        { item.tag?.map(((v) => <Chip
                              label={v}
                              size="small"
                              variant="outlined"
                              style={{margin: "0 3px"}}
                          />)) }
                      </div>

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
                  </div>
                </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
  );
}
