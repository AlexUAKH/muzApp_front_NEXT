import React, {FC} from 'react';
import Button from "@mui/material/Button";
import FileUpload from "./FileUpload";
import UploadWrapper from "./UploadWrapper";

interface UploadStep2Props {
  setPicture: Function;
  picture: Blob | null;
}

const UploadStep2: FC<UploadStep2Props> = ({setPicture, picture}) => {
  return (
    <UploadWrapper picture={picture}>
      <FileUpload setFile={setPicture} accept="image/*">
        <Button variant="outlined">Завантажити обкладинку</Button>
      </FileUpload>
    </UploadWrapper>
  );
};

export default UploadStep2;