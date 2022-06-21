import React, { FC } from "react";
import { Card, Grid, IconButton, Typography } from "@mui/material";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import PauseCircleOutlineIcon from "@mui/icons-material/PauseCircleOutline";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import Image from "next/image";
import { useRouter } from "next/router";
import { ITrack } from "../types/track";
import styles from "../styles/Tracks.module.scss";

interface TracksListItemProps {
  track: ITrack;
  active?: boolean;
}

const TracksListItem: FC<TracksListItemProps> = ({ track, active = false }) => {
  const router = useRouter();
  const activeToggle = e => {
    e.stopPropagation();
  };
  const deleteTrack = e => {
    e.stopPropagation();
  };

  return (
    <Card
      className={styles.track}
      onClick={() => router.push(`/songs/${track._id}`)}
    >
      <IconButton sx={{ mr: 2 }} onClick={activeToggle}>
        {active ? (
          <PauseCircleOutlineIcon fontSize="large" />
        ) : (
          <PlayCircleOutlineIcon fontSize="large" />
        )}
      </IconButton>
      <Image src={track.picture} width={60} height={60} alt="Track cover" />
      <Grid container direction="column" sx={{ ml: 2, maxWidth: "300px" }}>
        <div className={styles.track__title}>{track.title}</div>
        <div className={styles.track__artist}>{track.artist}</div>
      </Grid>

      {active && <div>52/55</div>}
      <IconButton sx={{ marginLeft: "auto" }} onClick={deleteTrack}>
        <DeleteOutlineIcon fontSize="large" />
      </IconButton>
    </Card>
  );
};

export default TracksListItem;
