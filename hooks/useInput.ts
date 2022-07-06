import React, {ChangeEventHandler, useState} from "react";

interface useInputResult {
  error: boolean;
  value: string;
  onChange: ChangeEventHandler;
  helperText: string;
}

interface validationObject {
  require?: boolean;
  minLength?: number;
  maxLength?: number;
}

export default function useInput(initialValue: string = '', validation: validationObject): useInputResult {
  const error: boolean = false;
  const [value, setValue] = useState<string>(initialValue);
  // const [touched, setTouched] = useState<boolean>(false);
  const [helperText, setHelperText] = useState<string>('');

  console.log(validation);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
    // setTouched(true)
    // console.log("change: ", e)
    setHelperText('');
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
