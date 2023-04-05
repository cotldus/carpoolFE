import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete, { createFilterOptions } from "@mui/material/Autocomplete";
import { CarPlateList } from "@/services/interface";
import { mockFormattedCarplateList } from "@/pages/api/mockData/mockCarplateList";

const filter = createFilterOptions<CarPlateList>();

export default function CarPlateSelector() {
  const [value, setValue] = React.useState<CarPlateList | null>(null);

  return (
    <Autocomplete
      value={value}
      onChange={(event, newValue) => {
        if (typeof newValue === "string") {
          setValue({
            label: newValue,
          });
        } else if (newValue && newValue.inputValue) {
          // Create a new value from the user input
          setValue({
            label: newValue.inputValue,
          });
        } else {
          setValue(newValue);
        }
      }}
      filterOptions={(options, params) => {
        const filtered = filter(options, params);

        const { inputValue } = params;
        // Suggest the creation of a new value
        const isExisting = options.some(
          (option) => inputValue === option.label
        );
        if (inputValue !== "" && !isExisting) {
          filtered.push({
            inputValue,
            label: `Add "${inputValue}"`,
          });
        }

        return filtered;
      }}
      selectOnFocus
      clearOnBlur
      handleHomeEndKeys
      id="car-plate-select"
      options={mockFormattedCarplateList}
      getOptionLabel={(option) => {
        // Value selected with enter, right from the input
        if (typeof option === "string") {
          return option;
        }
        // Add "xxx" option created dynamically
        if (option.inputValue) {
          return option.inputValue;
        }
        // Regular option
        return option.label;
      }}
      renderOption={(props, option) => <li {...props}>{option.label}</li>}
      sx={{
        boxSizing: "border-box",
        "& .MuiOutlinedInput-root": {
          padding: "0px",
        },
      }}
      freeSolo
      renderInput={(params) => (
        <TextField
          {...params}
          className="bg-white relative p-0"
          sx={{ padding: "0" }}
        />
      )}
    />
  );
}
