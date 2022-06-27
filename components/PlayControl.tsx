import React, {FC} from 'react';
import PauseCircleOutlineIcon from "@mui/icons-material/PauseCircleOutline";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import {IconButton} from "@mui/material";
import {useActions} from "../hooks/useActions";
import {useTypeSelector} from "../hooks/useTypeSelector";

const PlayControl: FC = () => {
  const { pause } = useTypeSelector(state => state.player );
  const { playTrack, pauseTrack } = useActions();

  const play = (e: React.MouseEvent<any> ) => {
    e.stopPropagation();
    if (!pause) {
      pauseTrack()
    } else {
      playTrack()
    }
  };

  return (
    <IconButton sx={{ mr: 2 }} onClick={play}>
      {!pause ? (
        <PauseCircleOutlineIcon fontSize="large" />
      ) : (
        <PlayCircleOutlineIcon fontSize="large" />
      )}
    </IconButton>
  );
};

export default PlayControl;