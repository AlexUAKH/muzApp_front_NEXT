import React, {ChangeEvent, FC, ReactNode, useRef} from 'react';
import {Box} from "@mui/material";

interface FileUploadProps {
  accept: string;
  setFile: Function;
  children: ReactNode;
}

const FileUpload: FC<FileUploadProps> = ({accept, setFile, children}) => {
  const ref = useRef<HTMLInputElement>(null);

  const onChange = (e:ChangeEvent<HTMLInputElement>): void => {
    const file = e.target?.files;
    console.log("file: ", file)
    if (!!file) setFile(file[0]);
  }

  return (
    <div onClick={() => ref.current?.click()}>
      {/*<Image width={200} height={200} src={picture ? picture : require('../../assets/no_image.png')}/>*/}
      <Box sx={{display:'none'}}>
        <input
          ref={ref}
          type="file"
          accept={accept}
          onChange={onChange}
        />
      </Box>
      {children}
    </div>
  );
};

export default FileUpload;