import { labelObject } from "@/components/interface";
import { Autocomplete, createFilterOptions, TextField } from "@mui/material";
import { useEffect, useState } from "react";

const filter = createFilterOptions<any>();
export const AutoCompleteFieldInput = () => {
  const [value, setValue] = useState<labelObject[]>([]);
  const [mockPickUpLocation, setMockPickUpLocation] = useState<labelObject[]>([
    { label: "Place 01", value: "Place 01" },
    { label: "Place 02", value: "Place 02" },
    { label: "Place 03", value: "Place 03" },
    { label: "Place 04", value: "Place 04" },
    { label: "Place 05", value: "Place 05" },
    { label: "Place 06", value: "Place 06" },
    { label: "Place 07", value: "Place 07" },
  ]);
  return (
    <Autocomplete
      multiple
      className=""
      id="tags-standard"
      options={mockPickUpLocation}
      getOptionLabel={(option) => option.label}
      value={value}
      selectOnFocus
      clearOnBlur
      onChange={(event, newValue) => {
        if (newValue.length <= 0) {
            setValue([]);
            return;
        }
        const newObj: labelObject = {
          label: newValue[newValue.length-1].value,
          value: newValue[newValue.length-1].value,
        };
        if (
          !mockPickUpLocation.some((value) => newObj.value === value.value)
        ) {
          setMockPickUpLocation((prev) => [...prev, newObj]);
          newValue[newValue.length-1] = newObj;
        }
        setValue(newValue);
      }}
      filterOptions={(options, params) => {
        const filtered = filter(options, params);
        const { inputValue } = params;
        const isExisting = options.some(
          (option) => inputValue === option.value
        );
        if (inputValue !== "" && !isExisting) {
          filtered.push({
            label: `Add New: "${inputValue}"`,
            value: inputValue,
          });
        }
        return filtered;
      }}
      renderInput={(params) => (
        <TextField {...params} variant="standard" placeholder="Location" />
      )}
    />
  );
};
