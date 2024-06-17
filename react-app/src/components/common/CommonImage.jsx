import * as React from 'react';
import {
  CardMedia,
} from "@mui/material";

export default function CommonImage({item: {id, imageTag}}) {

  return (<CardMedia
          key={id}
          component={"img"}
          loading='lazy'
          image={imageTag}
      />
  );
}
