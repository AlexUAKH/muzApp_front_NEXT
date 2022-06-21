import React, {FC} from "react";
import MainLayout from "../../layouts/MainLayout";
import {Button, Grid, Box, Stack} from "@mui/material";
import {useRouter} from "next/router";
import Image from "next/image";
import {ITrack} from "../../types/track";
import Coments from "../../components/Coments";

const track: ITrack =
    {_id: 'dfffd', title: "This is a way", artist: "E-Type", listenings: 0, picture: "https://static2.tgstat.ru/channels/_0/e9/e93447afc4c119f284ff3dcef5da9d84.jpg", text: null, audio: "ffvf", comments:[{}]}

  const TrackPage: FC = () => {
  const router = useRouter();

  return (
    <MainLayout>
      <Button
        sx={{my:2}}
        variant="outlined"
        onClick={() => router.push('/songs')}
      >
        До списку
      </Button>
      <Grid container>
        <Image src={track.picture} width={200} height={200} />
        <Box sx={{ml:3, display:'flex',flexDirection:'column'}}>
          <Box sx={{fontSize: '2rem', color: 'rgba(0,0,0,.6)'}}>Виконавець: {track.artist}</Box>
          <Box sx={{fontSize: '2rem', fontWeight:'500'}}>Назва треку: {track.title}</Box>
          <Box sx={{fontStyle:'italic', mt:'auto'}}>Прослуховувань: {track.listenings}</Box>
        </Box>
      </Grid>
      <Stack direction='column'>
        <h3>Текс</h3>
        <p>{track.text ? track.text : 'Текст цієї пісні відсуьній'}</p>
      </Stack>

      <Coments />

    </MainLayout>
  );
};

export default TrackPage;
