import React from 'react';
import MainLayout from "../layouts/MainLayout";
import {Box, Card, Grid, Input, TextField} from "@mui/material";

const Upload = () => {

    return (
        <MainLayout>
          <Grid container alignItems="center" direction="column">
            <h1>Загрузка нового трека</h1>
            <Card sx={{border: '1px solid black', p: 3, alignSelf: 'stretch'}}>
              <Box
                component="form"
                sx={{
                  '& > :not(style)': { my: 1 },
                }}
                noValidate
                autoComplete="off"
              >
                <TextField
                  fullWidth
                  hiddenLabel
                  defaultValue="Назва пісні"

                />
                <TextField
                  fullWidth
                  hiddenLabel
                  defaultValue="Виконавець"

                />
                <TextField
                  fullWidth
                  hiddenLabel
                  defaultValue="Текст пісні"
                  multiline
                  rows={4}
                />
              </Box>
            </Card>
          </Grid>
        </MainLayout>
    );
};

export default Upload;