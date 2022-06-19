import React from "react";
import type { NextPage } from "next";

import MainLayout from "../../layouts/MainLayout";
import TracksList from "../../components/TracksList";
import {Button} from "@mui/material";

import styles from "../../styles/Tracks.module.scss";

import {useRouter} from "next/router";
import {ITrack} from "../../types/track";

const tracks: ITrack[] = [
  {_id: 'dfffd', title: "This is a way", artist: "E-Type", listenings: 0, picture: "https://static2.tgstat.ru/channels/_0/e9/e93447afc4c119f284ff3dcef5da9d84.jpg", text: null, audio: "ffvf", comments:[{}]},
  {_id: 'd', title: "khygyg yug yug uyg oooo pppp kkkk jjjj mmmm", artist: "E-Type", listenings: 1, picture: "https://static4.tgstat.ru/channels/_100/9f/9fd8eb1c2aacf668fba203b0a26a7046.jpg", text: null, audio: "gbbf", comments:[{}]}
]

const Tracks: NextPage = () => {
  const router = useRouter();
  return (
    <MainLayout>
      <div className={styles.tracks__header}>
        <h1 className={styles.tracks__text}>
          Список треков
        </h1>
        <div className={styles.tracks__addNew}>
          <Button
            variant="outlined"
            onClick={() => router.push('/upload')}
          >
            Завантажити
          </Button>
        </div>
      </div>

      <div className={styles.tracks__list}>
        <TracksList tracks={tracks}/>
      </div>
    </MainLayout>
  );
};

export default Tracks;
