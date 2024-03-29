import { labelObject } from "@/services/interface";
import { mockLocationsList, mockLocationsListNew } from "@/pages/api/mockData/mockLocationsList";
import { Autocomplete, createFilterOptions, InputAdornment, TextField } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { DoorBack } from "@mui/icons-material";

const filter = createFilterOptions<any>();
export const AutoCompleteFieldInput = ({
  name,
  initValue,
}: {
  name?: string;
  initValue?: labelObject[];
}) => {
  const [value, setValue] = useState<labelObject[]>(initValue || []);
  const [mockPickUpLocation, setMockPickUpLocation] = useState<labelObject[]>(
    mockLocationsListNew.map((item) => ({ label: item.value, value: item.value, category: item.country }))
  );
  return (
    <Autocomplete
      multiple
      options={mockPickUpLocation}
      getOptionLabel={(option) => option.label || ""}
      value={value}
      selectOnFocus
      clearOnBlur
      groupBy={(option => option?.category || "")}
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
        <>
          <TextField
            {...params}
            sx={{ padding: "0px" }}
            size="small"
            placeholder=""
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          />
          <input
            type="hidden"
            name={name}
            value={value.map((val) => val.value).join(", ")}
          ></input>
        </>
      )}
    />
  );
};
