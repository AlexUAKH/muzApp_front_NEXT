import React, {FC} from "react";
import {Button, Grid, Box, Stack, Alert} from "@mui/material";
import {useRouter} from "next/router";
import Image from "next/image";
import {ITrack} from "../../types/track";
import AddComents from "../../components/AddComents";
import {fetchTrack} from "../../services/trackService";
import {config} from "../../api/config";
import Comments from "../../components/Comments";
import {GetServerSideProps} from "next";

interface TrackPageInterface {
  track: ITrack,
  error: string|null
}

const TrackPage: FC<TrackPageInterface> = ({track = {} as ITrack, error= null}) => {
  const router = useRouter();

  if (error) return (<Alert severity="error">{error}</Alert>)

  return (
    <>
      <Button
        sx={{my:2}}
        variant="outlined"
        onClick={() => router.back()}
      >
        До списку
      </Button>
      <Grid container>
        <Image src={`${config.API_URL}/${track.picture}`} width={200} height={200} aria-label="Song cover" />
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

      <AddComents />

      <Comments comments={track.comments} />

    </>
  );
};

export default TrackPage;

export const getServerSideProps: GetServerSideProps = async ({params}: any) => {
  try {
    const track = await fetchTrack(params.id as string);
    return { props: { track, error: null } }
  } catch {
    return { props: { track: {} as ITrack, error: "Не вдається завантажити пісню" } }
  }
}
