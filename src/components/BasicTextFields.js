// import * as React from 'react';
import React, { useState } from 'react';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

import axios from 'axios';


export default function BasicTextFields({ setRows }) {
  const [inputValue, setInputValue] = useState('');
  const [inputmood, setInputmood] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleKeyPress = async (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      setInputmood(inputValue)

      axios.get(`http://127.0.0.1:5000/songs?arg1=${inputValue}`)
        .then((response) => {
          const data = response.data;
          
          setRows(data);
        })
      // console.log("choosing song")

      // await ChooseSongs(inputValue);
      // Handle the Enter key press here
      // alert(`You pressed Enter with input value: ${inputValue}`);
    }
  };

  return (
    <div>
      <h2>mood:</h2>
      <h3>{inputmood}</h3>
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"

    >
      <TextField id="outlined-basic" label="Outlined" variant="outlined" 
              value={inputValue}  
              onChange={handleInputChange}
  
        onKeyDown={handleKeyPress}
/>
    </Box>
    </div>
  );
}