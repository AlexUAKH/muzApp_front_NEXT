import React from "react";
import type { NextPage } from "next";
import {useRouter} from "next/router";
import Button from "@mui/material/Button";
import MusicNoteOutlinedIcon from '@mui/icons-material/MusicNoteOutlined';
import QueueMusicIcon from "@mui/icons-material/QueueMusic";
import MainLayout from "../layouts/MainLayout";
import styles from "../styles/HomePage.module.scss";

const Home: NextPage = () => {
  const router = useRouter();
  return (
    <MainLayout>
      <div className={styles.home__wrapper}>
        <h1 className={styles.home__title}>Ласкаво порсимо!</h1>
        <h3 className={styles.home__subtitle}>Тут зібрані улюблені треки.</h3>
        <div className={styles.home__row}>
          <Button
            variant="outlined"
            startIcon={<MusicNoteOutlinedIcon />}
            onClick={() => router.push('/songs')}
          >
            Слухати
          </Button>
          <Button
            variant="outlined"
            startIcon={<QueueMusicIcon />}
            onClick={() => router.push('/songs/albom')}
          >
            Альбом
          </Button>
        </div>
      </div>
    </MainLayout>
  );
};

export default Home;
