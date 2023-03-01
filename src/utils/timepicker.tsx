import React from 'react';
import PropTypes from 'prop-types';
import { TextField } from '@mui/material';
import "../styles/globals.css"

function TimePickers() {

  return (
    <form className="flex flex-wrap" noValidate>
      <TextField
        id="time"
        type="time"
        defaultValue="07:30"
        className="ring-blue-500 focus:border-blue-500 bg-gray-50 border border-gray-300 text-gray-900 rounded-lg w-full"
        InputLabelProps={{
          shrink: true,
        }}
        inputProps={{
          step: 300, // 5 min
        }}
      />
    </form>
  );
}

export default TimePickers;