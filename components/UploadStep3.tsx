import React, {FC, useMemo} from 'react';
import Button from "@mui/material/Button";
import DoneIcon from '@mui/icons-material/Done';
import Grid from "@mui/material/Grid";
import FileUpload from "./FileUpload";

interface UploadStep3Props {
  setAudio: Function;
  audio: string;
}

const UploadStep3: FC<UploadStep3Props> = ({audio, setAudio}) => {

  const audioLoaded = useMemo(() => {
    return !!audio;
  }, [audio])

  return (
    <FileUpload setFile={setAudio} accept="audio/*">
      <Grid container alignItems="center" gap={2} justifyContent="center">
        <Button
          variant="outlined"
          color={audioLoaded ? "success" : "primary"}
        >
          { audioLoaded ? "Завантажити іншу" : "Завантажити пісню" }
        </Button>
        { audioLoaded &&
            <div>
              <Grid container alignItems="center" gap={1} wrap="nowrap">
                <DoneIcon color="success"/>
                <b>{audio}</b>
              </Grid>
            </div>
        }
      </Grid>
    </FileUpload>
  );
};

export default UploadStep3;