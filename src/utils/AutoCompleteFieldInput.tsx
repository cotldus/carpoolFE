import { labelObject } from "@/components/interface";
import { mockLocationsList } from "@/pages/api/mockData/mockLocationsList";
import { Autocomplete, createFilterOptions, TextField } from "@mui/material";
import { useEffect, useState } from "react";

const filter = createFilterOptions<any>();
export const AutoCompleteFieldInput = () => {
  const [value, setValue] = useState<labelObject[]>([]);
  const [mockPickUpLocation, setMockPickUpLocation] = useState<labelObject[]>(
    mockLocationsList.map((item) => ({ label: item, value: item }))
  );
  return (
    <Autocomplete
      multiple
      options={mockPickUpLocation}
      getOptionLabel={(option) => option.label || ""}
      value={value}
      selectOnFocus
      clearOnBlur
      onChange={(event, newValue) => {
        if (newValue.length <= 0) {
          setValue([]);
          return;
        }
        const newObj: labelObject = {
          label: newValue[newValue.length - 1].value,
          value: newValue[newValue.length - 1].value,
        };
        if (!mockPickUpLocation.some((value) => newObj.value === value.value)) {
          setMockPickUpLocation((prev) => [...prev, newObj]);
          newValue[newValue.length - 1] = newObj;
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
        <TextField
          {...params}
          variant="standard"
          placeholder="Location"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        />
      )}
    />
  );
};
