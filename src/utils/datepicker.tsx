import React from "react";
import PropTypes from "prop-types";
import { TextField } from "@mui/material";
import "../styles/globals.css";

function DatePickers({ name, initValue }: { name?: string, initValue?: string }) {
  return (
    <TextField
      name={name}
      id="date"
      type="date"
      defaultValue={initValue || "2017-05-24"}
      className="ring-blue-500 focus:border-blue-500 bg-gray-50 border border-gray-300 text-gray-900 rounded-lg w-full"
      InputLabelProps={{
        shrink: true,
      }}
      onChange={(e) => console.log(e.target.value)}
      sx={{
        "& .MuiInputBase-input.MuiOutlinedInput-input": {
          padding: "11px 14px",
        },
      }}
    />
  );
}

export default DatePickers;
