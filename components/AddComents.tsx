import React, {FC, useState} from 'react';
import {Box, Button, Grid, TextField} from "@mui/material";
import {LoadingButton} from "@mui/lab";
import SendIcon from "@mui/icons-material/Send";
import useInput from "../hooks/useInput";

const AddComents: FC = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [show, setShow] = useState<boolean>(false)
  const nameControl = useInput( '', {require: true})
  const textControl = useInput( '', {require: true})

  const send = () => {
    try {
      setLoading(true)
      console.log("coment: ");

    } catch (e) {
      console.log("coment: ", e);
    } finally {
      setLoading(false)
    }
  }
  return (
    <Box
      component="form"
      noValidate
      autoComplete="on"
      sx={{
        '& .MuiTextField-root': { width: '100%' },
      }}
    >
      <Grid container justifyContent="space-between" alignItems="center">
        <h3>Коментарі:</h3>
        <Button variant="outlined" onClick={() => setShow(!show)}>
          { show ? "Сховати" : "Додати" }
        </Button>
      </Grid>
      {show &&
        <>
          <TextField
            required
            {...nameControl}
            label="Ваше ім'я"
           />
          <TextField
            required
            {...textControl}
            label="Ваш коментар"
            multiline
            rows={4}
            sx={{my: 2}}
          />
          <LoadingButton
            fullWidth
            onClick={send}
            endIcon={<SendIcon />}
            loading={loading}
            loadingPosition="end"
            variant="outlined"
            color="secondary"
          >
            Send
          </LoadingButton>
        </>
      }
    </Box>
  );
};

export default AddComents;
