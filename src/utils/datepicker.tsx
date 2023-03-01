import React from 'react';
import PropTypes from 'prop-types';
import { TextField } from '@mui/material';


function DatePickers(props: { classes: any; }) {

  return (
    <form className="flex flex-wrap" noValidate>
      <TextField
        id="date"
        label="Birthday"
        type="date"
        defaultValue="2017-05-24"
        className="w-100"
        InputLabelProps={{
          shrink: true,
        }}
      />
    </form>
  );
}

DatePickers.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default DatePickers;