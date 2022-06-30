import React, {FC, ReactNode} from 'react';
import {Grid, Step, StepContent, StepLabel, Stepper} from "@mui/material";
import Button from "@mui/material/Button";

export interface validObj {
  step1: boolean;
  step2: boolean;
}

interface StepWrapperProps {
  step: number;
  children: ReactNode;
  back: Function;
  next: Function;
  valid: validObj;
}

const steps: string[] = [
  'Загальна інформація',
  'Завантажити зображення',
  'Завантажити аудіо'
];

const StepWrapper: FC<StepWrapperProps> = ({step, next, back, valid, children}) => {
  return (
    <Stepper activeStep={step} orientation="vertical">
      {steps.map((label, index) => (
        <Step
          key={index}
          completed={step > index}
        >
          <StepLabel>{label}</StepLabel>
          <StepContent sx={{width: '100%', pr: 3, maxWidth: '800px', mr: 4}}>
            {children}
            <Grid container justifyContent="space-between" sx={{mt: 3}}>
              {step !== 0
                ? <Button variant="outlined" onClick={() => back()} disabled={step === 0}>Назад</Button>
                : <span></span>
              }
              <Button
                variant="outlined"
                onClick={() => next()}
                disabled={
                  step === 0
                    ? (!valid.step1)
                    : (step === 2 && !valid.step2 && valid.step1)
                }
              >
                {step === 2 ? 'Завантажити' : 'Вперед'}
              </Button>
            </Grid>
          </StepContent>
        </Step>
      ))}
    </Stepper>
  );
};

export default StepWrapper;