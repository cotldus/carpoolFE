import { labelObject } from "@/components/interface";
import { Autocomplete, createFilterOptions, TextField } from "@mui/material";
import { SetStateAction, useEffect, useState } from "react";

export const AutoCompleteFieldDropdown = (props: {
  objectList: labelObject[],
  existingValue?: string
}) => {
  
  const { objectList, existingValue } = props;
  const [value, setValue] = useState<labelObject>({label: existingValue, value: existingValue});
  return (
    <Autocomplete
      options={objectList}
      getOptionLabel={(option: labelObject) => option.label || ""}
      id=""
      clearOnEscape
      value={value}
      renderInput={(params) => (
        <TextField {...params} label="" variant="standard" />
      )}
    />
  );
};
