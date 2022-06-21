import React, {useState} from 'react';
import {Box, TextField} from "@mui/material";
import {LoadingButton} from "@mui/lab";
import SendIcon from "@mui/icons-material/Send";
import useInput from "../hooks/useInput";

const Coments = () => {
  const [loading, setLoading] = useState(false);
  const nameControl = useInput({require: true})
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
      <h3>Коментарі:</h3>
      <TextField
        {...nameControl}
        label="Ваше ім'я"
      />
      <TextField
        required
        id="textComent"
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
    </Box>
  );
};

export default Coments;
