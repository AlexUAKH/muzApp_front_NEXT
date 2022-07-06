import React from "react";
import type { NextPage } from "next";

import styles from "../../styles/Tracks.module.scss";

import TracksList from "../../components/TracksList";
import {Alert, Button} from "@mui/material";

import {useRouter} from "next/router";
import {useTypeSelector} from "../../hooks/useTypeSelector";
import {wrapper} from "../../store";
import {fetchTracks} from "../../store/action-creators/tracks";

const Tracks: NextPage = () => {
  const router = useRouter();
  const {tracks, error} = useTypeSelector(state => state.tracks );

  if (error) {
    return (
      <Alert severity="error">{error}</Alert>
    )
  }

  return (
    <>
      <div className={styles.tracks__header}>
        <h1 className={styles.tracks__text}>
          Список треков
        </h1>
        <div className={styles.tracks__addNew}>
          <Button
            variant="outlined"
            onClick={() => router.push('/songs/create')}
          >
            Завантажити
          </Button>
        </div>
      </div>

      <div className={styles.tracks__list}>
        <TracksList tracks={tracks}/>
      </div>
    </>
  );
};

export default Tracks;

// @ts-ignore
export const getServerSideProps = wrapper.getServerSideProps(store => async () => await store.dispatch(fetchTracks()))
// export const getStaticProps = wrapper.getStaticProps(store => async () => await store.dispatch(fetchTracks()))
