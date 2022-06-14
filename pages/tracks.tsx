import React from "react";
import type { NextPage } from "next";
import MainLayout from "../layouts/MainLayout";
import styles from "../styles/Tracks.module.scss";
import {Button} from "@mui/material";
import {useRouter} from "next/router";

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
        <div className="tracks__list">

        </div>
      </div>
    </MainLayout>
  );
};

export default Tracks;
