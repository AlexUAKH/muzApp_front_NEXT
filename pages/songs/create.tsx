import React, {FC, useEffect, useState} from 'react';
import Grid from "@mui/material/Grid";
import StepWrapper, {validObj} from "../../components/StepWrapper";
import UploadStep1, {TrackDTO} from "../../components/UploadStep1";
import UploadStep2 from "../../components/UploadStep2";
import UploadStep3 from "../../components/UploadStep3";

const lastStep: number = 2;

const Create: FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);
  const [track, setTrack] = useState<TrackDTO>({title: '', artist: '', text: ''});
  const [picture, setPicture] = useState<any>(null);
  const [audio, setAudio] = useState<any>(null);
  const [valid, setValid] = useState<validObj>({step1: false, step2: false});

  const back = (): void => {
    setActiveStep(step => step - 1)
  }
  const next = (): void => {
    if (activeStep === lastStep) {
      save();
    } else {
      setActiveStep(step => step + 1)
    }
  }

  const save = () => {
    const data = new FormData();
    data.append("title", track.title);
    data.append("artist", track.artist);
    data.append("text", track.text);
    data.append("picture", picture);
    data.append("audio", audio);

  }

  useEffect(() => {
    if (track.title && track.artist) {
      setValid(prev => ({ ...prev, step1: true}));
    } else {
      setValid(prev => ({ ...prev, step1: false}));
    }
  }, [track.title, track.artist])

  useEffect( () => {
    if (!!audio) {
      setValid(prev => ({ ...prev, step2: true}));
    }
  }, [audio])

  return (
    <Grid container direction="column">
      <h1>Загрузка нового трека</h1>
      <StepWrapper step={activeStep} next={next} back={back} valid={valid} >
          {activeStep === 0 &&
              <UploadStep1
                  track={track}
                  setTrack={setTrack}
              />
          }
          {activeStep === 1 &&
              <UploadStep2
                  picture={picture}
                  setPicture={setPicture}
              />
          }
          {activeStep === 2 &&
            <UploadStep3
                  audio={audio?.name}
                  setAudio={setAudio}
              />
          }
        </StepWrapper>
    </Grid>
  );
};

export default Create;