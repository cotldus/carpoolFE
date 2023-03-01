import React from 'react';
import PropTypes from 'prop-types';
import { TextField } from '@mui/material';
import "../styles/globals.css"

function DatePickers() {

  return (
    <form className="flex flex-wrap" noValidate>
      <TextField
        id="date"
        type="date"
        defaultValue="2017-05-24"
        className="ring-blue-500 focus:border-blue-500 bg-gray-50 border border-gray-300 text-gray-900 rounded-lg w-full"
        InputLabelProps={{
          shrink: true,
        }}
      />
    </form>
  );
}


export default DatePickers;