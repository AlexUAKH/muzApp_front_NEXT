interface useInputResult {
  error: boolean;
  value: string;
  onChange: Function;
  helperText: string;
}

interface validationObject {
  require?: boolean;
  minLength?: number;
  maxLength?: number;
}

interface useInputProps {
  validation?: validationObject[];
  initialValue?: string;
}

import React, {useState} from "react";

export default function useInput({initialValue = '', validation}: useInputProps): useInputResult {
  const error: boolean = false;
  const [value, setValue] = useState<string>(initialValue);
  const [touched, setTouched] = useState<boolean>(false);
  const [helperText, setHelperText] = useState<string>('');

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
    setTouched(true)
    console.log("change: ", e)
  }
  
  return {
    error,
    value,
    onChange,
    helperText
  }
}
//
// required
// label="Ваше ім'я"
// error
//
// helperText="Incorrect entry"
