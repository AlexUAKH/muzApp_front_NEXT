import React, {FC} from "react";
import styles from "../styles/Tracks.module.scss";
import TracksListItem from "./TracksListItem";
import {Card, Stack} from "@mui/material";
import {ITrack} from "../types/track";
import {useTypeSelector} from "../hooks/useTypeSelector";

interface TracksListProps {
  tracks: ITrack[]
}

const TracksList: FC<TracksListProps> = ({tracks}) => {
  const {active, pause} = useTypeSelector(state => state.player)

  if (!tracks.length) return (<h3>Упс, пісень для відображення немає</h3>);

  return (
    <Card className={styles['tracks__list-wraper']}>
      <Stack spacing={2}>
        {
          tracks.map(track =>
            <TracksListItem
              key={track._id}
              track={track}
              current={active?._id === track._id && !pause}
            />
          )
        }
      </Stack>
    </Card>
  );
};

export default TracksList;
