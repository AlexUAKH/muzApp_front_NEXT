import React, {useCallback, useEffect} from 'react';
import {Box, Grid} from "@mui/material";
import styles from "../styles/Player.module.scss";
import PlayProgress from "./PlayProgress";
import Volume from "./Volume";
import TrackDescription from "./TrackDescription";
import PlayControl from "./PlayControl";
import {useActions} from "../hooks/useActions";
import {useTypeSelector} from "../hooks/useTypeSelector";

let audio: any;

const Player: React.FC = () => {
  const { pause, active, volume, duration, currentTime  } = useTypeSelector(state => state.player);
  const { setVolume, setCurrentTime, setDuration, pauseTrack } = useActions();

  const setAudio = useCallback( () => {
    if (!!active) {
      audio.src = `http://localhost:4000/${active.audio}`;
      console.log("setAudio");
      audio.onloadedmetadata = () => {
        setDuration(Math.floor(audio.duration));
      }
      audio.ontimeupdate = () => {
        setCurrentTime(Math.floor(audio.currentTime));
      }
      audio.onended = () => {
        pauseTrack();
      }
      // playTrack();
    }
  }, [active])

  useEffect(() => {
    if (!audio) {
      audio = new Audio();
    } else {
      setAudio();
    }
  },[active, setAudio])

  useEffect(() => {
    if (pause) {
      audio.pause();
    } else {
      audio.play()
    }
  },[pause, active])

  const changeCurrentTime = (volume: number) => {
    audio.currentTime = volume;
    setCurrentTime(volume)
  }

  const changeVolume = (volume: number) => {
    audio.volume = volume;
    setVolume(volume)
  }

  if (active === null) return null;

  return (
    <Grid container alignItems={"center"} className={styles.player}>
      <PlayControl />
      <Box sx={{mr: 2, maxWidth: "250px"}}>
        <TrackDescription title={active.title} artist={active.artist} />
      </Box>
      <Box sx={{maxWidth: '400px', width: '100%'}}>
        <PlayProgress
          changeCurrentTime={changeCurrentTime}
          currentTime={currentTime}
          duration={duration}
        />
      </Box>
      <Box sx={{ml: 'auto'}}>
        <Volume volume={volume} changeVolume={changeVolume} />
      </Box>
    </Grid>
  );
};

export default Player;

// cost: 760 + 1290
