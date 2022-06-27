import React from "react";
import type { NextPage } from "next";

import TracksList from "../../components/TracksList";
import {Button} from "@mui/material";

import styles from "../../styles/Tracks.module.scss";

import {useRouter} from "next/router";
import {ITrack} from "../../types/track";

const tracks: ITrack[] = [
  {_id: 'dfffd', title: "This is a way", artist: "E-Type", listenings: 0, picture: "https://static2.tgstat.ru/channels/_0/e9/e93447afc4c119f284ff3dcef5da9d84.jpg", text: null, audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3", comments:[{ _id:"4444", text: "eded", username: "rewq", created_at:443222, updated_at: 444444 }]},
  {_id: 'd', title: "khygyg yug yug uyg oooo pppp kkkk jjjj mmmm", artist: "E-Type", listenings: 1, picture: "https://static4.tgstat.ru/channels/_100/9f/9fd8eb1c2aacf668fba203b0a26a7046.jpg", text: null, audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3", comments:[{ _id:"4444", text: "eded", username: "rewq", created_at:443222, updated_at: 444444 }]},
  {_id: 'd4', title: "khygyg yug yug uyg oooo pppp kkkk jjjj mmmm", artist: "E-Type", listenings: 1, picture: "https://static4.tgstat.ru/channels/_100/9f/9fd8eb1c2aacf668fba203b0a26a7046.jpg", text: null, audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3", comments:[{ _id:"4444", text: "eded", username: "rewq", created_at:443222, updated_at: 444444 }]}
]

const Tracks: NextPage = () => {
  const router = useRouter();
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
