import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete, { createFilterOptions } from "@mui/material/Autocomplete";

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
      options={carplateList}
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

interface CarPlateList {
  inputValue?: string;
  label: string;
  value?: string;
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const carplateList: readonly CarPlateList[] = [
  { label: "ABC123", value: "ABC123" },
  { label: "DEF456", value: "DEF456" },
  { label: "GHI789", value: "GHI789" },
  { label: "JKL012", value: "JKL012" },
  { label: "MNO345", value: "MNO345" },
  { label: "PQR678", value: "PQR678" },
  { label: "STU901", value: "STU901" },
  { label: "VWX234", value: "VWX234" },
  { label: "YZA567", value: "YZA567" },
  { label: "BCD890", value: "BCD890" },
  { label: "EFG123", value: "EFG123" },
  { label: "HIJ456", value: "HIJ456" },
  { label: "KLM789", value: "KLM789" },
  { label: "NOP012", value: "NOP012" },
  { label: "QRS345", value: "QRS345" },
  { label: "TUV678", value: "TUV678" },
  { label: "WXY901", value: "WXY901" },
  { label: "ZAB234", value: "ZAB234" },
  { label: "CDE567", value: "CDE567" },
  { label: "FGH890", value: "FGH890" },
];
