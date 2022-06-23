import React from 'react';
import {Grid, Typography} from "@mui/material";

interface TrackDescriptionProps {
  title: string;
  artist: string;
}

const TrackDescription: React.FC<TrackDescriptionProps> = ({title,artist}) => {
  return (
    <Grid container direction="column">
      <Typography variant="subtitle1" noWrap sx={{width: '100%'}}>{title}</Typography>
      <Typography variant="subtitle2" color="#797270">{artist}</Typography>
    </Grid>
  );
};

export default TrackDescription;