import { labelObject } from "@/services/interface";
import {
  Autocomplete,
  createFilterOptions,
  SelectChangeEvent,
  TextField,
} from "@mui/material";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

export const AutoCompleteFieldDropdown = (props: {
  objectList: labelObject[];
  existingValue?: string;
  name?: string;
  setContext?: (value: any) => void;
}) => {
  const { objectList = [], existingValue, setContext, name } = props;
  const [value, setValue] = useState<labelObject>({
    label: existingValue,
    value: existingValue,
  });
  return (
    <Autocomplete
      options={objectList}
      getOptionLabel={(option: labelObject) => option.label || ""}
      id=""
      clearOnEscape
      onChange={(event, newValue) => {
        setValue(newValue || {});
        setContext && setContext(newValue || {});
      }}
      value={value}
      renderInput={(params) => (
        <>
          <TextField {...params} label="" variant="standard" />
          <input type="hidden" name={name} value={value.value}></input>
        </>
      )}
    />
  );
};
