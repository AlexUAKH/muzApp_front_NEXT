import React, { FC } from "react";
import {Box, Card, IconButton} from "@mui/material";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import Image from "next/image";
import { useRouter } from "next/router";
import { ITrack } from "../types/track";
import styles from "../styles/Tracks.module.scss";
import TrackDescription from "./TrackDescription";
import PlayControl from "./PlayControl";

interface TracksListItemProps {
  track: ITrack;
  active?: boolean;
}

const TracksListItem: FC<TracksListItemProps> = ({ track, active = false }) => {
  const router = useRouter();

  const deleteTrack = (e: any) => {
    e.stopPropagation();
  };

  return (
    <Card
      className={styles.track}
      onClick={() => router.push(`/songs/${track._id}`)}
    >
      <PlayControl />
      <Image src={track.picture} width={60} height={60} alt="Track cover" />
      <Box sx={{ ml: 2, maxWidth: "300px" }}>
        <TrackDescription title={track.title} artist={track.artist} />
      </Box>

      {active && <div>52/55</div>}
      <IconButton sx={{ marginLeft: "auto" }} onClick={deleteTrack}>
        <DeleteOutlineIcon fontSize="large" />
      </IconButton>
    </Card>
  );
};

export default TracksListItem;
