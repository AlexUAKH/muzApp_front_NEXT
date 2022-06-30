import React, {FC, ReactNode} from 'react';

interface FormControlProps {
  children: ReactNode;
}

const FormControl: FC<FormControlProps> = ({children}) => {
  return (
    <div>
      {children}
    </div>
  );
};

export default FormControl;