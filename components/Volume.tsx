import React from 'react';
import {VolumeDownRounded, VolumeUpRounded} from "@mui/icons-material";
import {useTheme} from "@mui/material/styles";
import {Slider, Stack} from "@mui/material";

const Volume = () => {
  const theme = useTheme()
  const lightIconColor =
    theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.4)' : 'rgba(0,0,0,0.4)';

  return (
    <Stack spacing={1} direction="row" sx={{ maxWidth: '200px', width: '200px' }} alignItems="center">
      <VolumeDownRounded htmlColor={lightIconColor} />
      <Slider
        aria-label="Volume"
        defaultValue={30}
        sx={{
          color: theme.palette.mode === 'dark' ? '#fff' : 'rgba(0,0,0,0.87)',
          '& .MuiSlider-track': {
            border: 'none',
          },
          '& .MuiSlider-thumb': {
            width: 12,
            height: 24,
            borderRadius: 0,
            backgroundColor: '#fff',
            '&:before': {
              boxShadow: '0 4px 8px rgba(0,0,0,0.4)',
            },
            '&:hover, &.Mui-focusVisible, &.Mui-active': {
              boxShadow: 'none',
            },
          },
        }}
      />
      <VolumeUpRounded htmlColor={lightIconColor} />
    </Stack>
  );
};

export default Volume;