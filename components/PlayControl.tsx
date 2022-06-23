import React, {FC} from 'react';
import PauseCircleOutlineIcon from "@mui/icons-material/PauseCircleOutline";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import {IconButton} from "@mui/material";

interface PlayControlProps {
  active?: boolean
}

const PlayControl: FC<PlayControlProps> = ({active= false}) => {
  const activeToggle = (e: React.MouseEvent<any> ) => {
    e.stopPropagation();
  };
  return (
    <IconButton sx={{ mr: 2 }} onClick={activeToggle}>
      {active ? (
        <PauseCircleOutlineIcon fontSize="large" />
      ) : (
        <PlayCircleOutlineIcon fontSize="large" />
      )}
    </IconButton>
  );
};

export default PlayControl;