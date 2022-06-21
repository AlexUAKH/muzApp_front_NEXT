// interface returnInput {
//   error: string[];
//   value: string;
//   onChange:
// }

import {useState} from "react";

export default function useInput(validation) {
  const error: string = '';
  const [value, setValue] = useState('');
  const [touched, setTouched] = useState(false);
  const [helperText, setHelperText] = useState('');

  const onChange = (e) => {
    setValue(e.target.value)
    setTouched(true)
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
