import React, {FC} from 'react';
import {Box, Grid, Slider, Typography} from "@mui/material";
import {styled, useTheme} from "@mui/material/styles";
import {formatDuration} from "../heloers/formatDuration";

const TinyText = styled(Typography)({
  fontSize: '0.75rem',
  opacity: 0.38,
  fontWeight: 500,
  letterSpacing: 0.2,
});

interface PlayProgressProps {
  changeCurrentTime: Function;
  duration: number;
  currentTime: number;
}

const PlayProgress: FC<PlayProgressProps> = ({duration, currentTime, changeCurrentTime}) => {
  const theme = useTheme();



  return (
    <Grid container direction="column" gap={1}>
      <Slider
        aria-label="time-indicator"
        size="small"
        value={currentTime}
        min={0}
        step={1}
        max={duration}
        onChange={(_, value) => changeCurrentTime(value as number)}
        sx={{
          color: theme.palette.mode === 'dark' ? '#fff' : 'rgba(0,0,0,0.87)',
          height: 12,
          '& .MuiSlider-thumb': {
            borderRadius: 0,
            color: '#fff',
            width: 14,
            height: 20,
            transition: '0.3s cubic-bezier(.47,1.64,.41,.8)',
            '&:before': {
              boxShadow: '0 2px 4px 0 rgba(0,0,0,0.4)',
            },
            '&:hover, &.Mui-focusVisible': {
              boxShadow: `0px 0px 0px 4px ${
                theme.palette.mode === 'dark'
                  ? 'rgb(255 255 255 / 16%)'
                  : 'rgb(0 0 0 / 16%)'
              }`,
            },
            '&.Mui-active': {
              width: 16,
              height: 20,
            },
          },
          '& .MuiSlider-rail': {
            opacity: 0.28,
          },
        }}
      />
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          mt: -2,
        }}
      >
        <TinyText>{formatDuration(currentTime)}</TinyText>
        <TinyText>-{formatDuration(duration - currentTime)}</TinyText>
      </Box>
    </Grid>
  );
};

export default PlayProgress;