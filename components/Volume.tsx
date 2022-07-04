import React, {FC} from 'react';
import VolumeOffIcon from '@mui/icons-material/VolumeOff';
import {useTheme} from "@mui/material/styles";
import {IconButton, Slider, Stack} from "@mui/material";
import {useTypeSelector} from "../hooks/useTypeSelector";
import {useActions} from "../hooks/useActions";

interface VolumeProps {
  volume: number;
  changeVolume: Function;
}

const Volume: FC<VolumeProps> = ({volume, changeVolume}) => {
  const theme = useTheme()
  const {muted} = useTypeSelector( state => state.player )
  const {setMuted} = useActions();

  const lightIconColor =
    theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.4)' : 'rgba(0,0,0,0.4)';

  return (
    <Stack spacing={1} direction="row" sx={{ maxWidth: '150px', width: '150px' }} alignItems="center">
      <IconButton onClick={() => setMuted()}>
        <VolumeOffIcon htmlColor={lightIconColor} />
      </IconButton>
      { !muted &&
        <Slider
          aria-label="Volume"
          defaultValue={0}
          value={volume}
          step={.1}
          min={0}
          max={1}
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
          onChange={(_, value) => changeVolume(value as number)}
        />
      }
      {/*<VolumeUpRounded htmlColor={lightIconColor} />*/}
    </Stack>
  );
};

export default Volume;