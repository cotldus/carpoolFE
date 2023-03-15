import React from "react";
import PropTypes from "prop-types";
import { TextField } from "@mui/material";
import "../styles/globals.css";

function DatePickers({ name }: { name?: string }) {
  return (
      <TextField
        name={name}
        id="date"
        type="date"
        defaultValue="2017-05-24"
        className="ring-blue-500 focus:border-blue-500 bg-gray-50 border border-gray-300 text-gray-900 rounded-lg w-full"
        InputLabelProps={{
          shrink: true,
        }}
      />
  );
}

export default DatePickers;
