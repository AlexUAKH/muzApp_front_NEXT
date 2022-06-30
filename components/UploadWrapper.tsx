import React, {FC, useCallback, useEffect, useState} from 'react';
import {Grid} from "@mui/material";
import Image from "next/image";

interface UploadWrapperProps {
  children: React.ReactNode;
  picture?: Blob | null;
}

const UploadWrapper: FC<UploadWrapperProps> = ({picture, children}) => {
  const [_picture, setPicture] = useState<string | ArrayBuffer | null>(require("../assets/no_image.png"));
  
  const readPicture = useCallback( ()=> {
    if (picture) {
      let reader = new FileReader();
      reader.addEventListener("load", () => setPicture(reader.result),false );
      reader.readAsDataURL(picture);
    }
  }, [picture])

  useEffect(() => {
    if (!!picture) {
      readPicture();
    } else {
      setPicture(require("../assets/no_image.png"))
    }
  }, [picture, readPicture])

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6} container justifyContent="center" alignContent="center">
        {/* @ts-ignore*/ }
        <Image src={_picture} width={200} height={200} />
      </Grid>
      <Grid item xs={12} sm={6} container justifyContent="center" alignContent="center">
         {children}
      </Grid>
    </Grid>
  );
};

export default UploadWrapper;