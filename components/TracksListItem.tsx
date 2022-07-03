import React, {FC, useCallback} from "react";
import {Box, Card, IconButton} from "@mui/material";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import Image from "next/image";
import { useRouter } from "next/router";
import { ITrack } from "../types/track";
import styles from "../styles/Tracks.module.scss";
import TrackDescription from "./TrackDescription";
import {useActions} from "../hooks/useActions";
import PauseCircleOutlineIcon from "@mui/icons-material/PauseCircleOutline";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import {useTypeSelector} from "../hooks/useTypeSelector";
import {formatDuration} from "../heloers/formatDuration";

interface TracksListItemProps {
  track: ITrack;
  current?: boolean;
}

const TracksListItem: FC<TracksListItemProps> = ({ track, current = false }) => {
  const router = useRouter();
  const {setActive, playTrack, pauseTrack} = useActions();
  const {pause, active, currentTime, duration} = useTypeSelector(state => state.player);

  const deleteTrack = (e: any) => {
    e.stopPropagation();
  };

  const play = useCallback((e: any) => {
    e.stopPropagation();
    if ( active?._id === track._id ) {
      if (pause) {
        playTrack()
      } else {
        pauseTrack();
      }
    } else {
      if (!pause) pauseTrack();
      setActive(track);
      playTrack();
    }
  }, [active?._id, pause])


  return (
    <Card
      className={styles.track}
      onClick={() => router.push(`/songs/${track._id}`)}
    >
      <IconButton sx={{ mr: 2 }} onClick={play}>
        {current ? (
          <PauseCircleOutlineIcon fontSize="large" />
        ) : (
          <PlayCircleOutlineIcon fontSize="large" />
        )}
      </IconButton>
      <Image src={`http://localhost:4000/${track.picture}`} width={60} height={60} alt="Track cover" />
      <Box sx={{ ml: 2, maxWidth: "300px" }}>
        <TrackDescription title={track.title} artist={track.artist} />
      </Box>

      {current &&
        <Box sx={{ml: 2}}>
          <div>
            {formatDuration(currentTime)}/{formatDuration(duration)}
          </div>
        </Box>
      }
      <IconButton sx={{ marginLeft: "auto" }} onClick={deleteTrack}>
        <DeleteOutlineIcon fontSize="large" />
      </IconButton>
    </Card>
  );
};

export default TracksListItem;
