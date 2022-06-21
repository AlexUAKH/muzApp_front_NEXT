import React, {FC} from "react";
import styles from "../styles/Tracks.module.scss";
import TracksListItem from "./TracksListItem";
import {Card, Stack} from "@mui/material";
import {ITrack} from "../types/track";

interface TracksListProps {
  tracks: ITrack[]
}

const TracksList: FC<TracksListProps> = ({tracks}) => {

  return (
    <Card className={styles['tracks__list-wraper']}>
      <Stack spacing={2}>
        {
          tracks.map(track =>
            <TracksListItem
              key={track._id}
              track={track}
            />
          )
        }
      </Stack>
    </Card>
  );
};

export default TracksList;
