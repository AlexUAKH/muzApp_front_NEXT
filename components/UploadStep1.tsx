import React, {ChangeEvent, FC, useState} from 'react';
import {Box, Card, TextField} from "@mui/material";

export interface TrackDTO {
  title: string;
  artist: string;
  text: string;
}

interface UploadStep1Prps {
  track: TrackDTO;
  setTrack: Function;
}

const UploadStep1: FC<UploadStep1Prps> = ({track,setTrack}) => {

  const [touched, setTouched] = useState({title: false, artist: false})

  const changeHandler = (value: string, target: string) => {
    setTrack((previous: TrackDTO): TrackDTO => {

      return {
        ...previous,
        [target]: value
      }
    })
  }

  return (
    <Card sx={{alignSelf: 'stretch'}} elevation={0}>
      <Box
        component="form"
        sx={{
          '& > :not(style)': {my: 1},
        }}

        autoComplete="off"
      >
        <TextField
          required
          error={touched.title && !track.title}
          fullWidth
          hiddenLabel
          placeholder="Назва пісні"
          value={track.title}
          onChange={(e:ChangeEvent<HTMLInputElement>) => changeHandler(e.target.value, 'title')}
          helperText={"* обов'язкове поле"}
        />
        <TextField
          fullWidth
          hiddenLabel
          placeholder="Виконавець"
          value={track.artist}
          onChange={(e:ChangeEvent<HTMLInputElement>) => changeHandler(e.target.value, 'artist')}
          helperText={"* обов'язкове поле"}
        />
        <TextField
          fullWidth
          hiddenLabel
          placeholder="Текст пісні"
          multiline
          rows={4}
          value={track.text}
          onChange={(e:ChangeEvent<HTMLInputElement>) => changeHandler(e.target.value, 'text')}
          error={true}
        />
      </Box>
    </Card>
  );
};

export default UploadStep1;