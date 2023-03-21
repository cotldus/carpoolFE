import React, { useEffect, useState } from "react";

import TextField from "@mui/material/TextField";
import Autocomplete, { createFilterOptions } from "@mui/material/Autocomplete";

type Options = {
  id?: number;
  label?: string;
  name: string;
  create?: boolean;
};

const filter = createFilterOptions<Options>();

export default function MultiSelectCreatable({
  objectList,
  ...props
}: {
  objectList: string[];
  [x:string]: any;
}) {
  const [selected, setSelected] = useState<Options[]>([]);
  const [options, setOptions] = useState<Options[]>([]);

  const data = objectList.map((obj, id) => ({
    id,
    name: obj,
  }));
  useEffect(() => {
    setOptions(data);
  }, []);

  return (
    <Autocomplete
      value={selected}
      multiple
      onChange={(event, newValue, reason, details) => {
        if (details?.option.create && reason !== "removeOption") {
          setSelected([
            ...selected,
            {
              id: undefined,
              name: details.option.name,
              create: details.option.create,
            },
          ]);
        } else {
          setSelected(
            newValue.map((value) => {
              if (typeof value === "string") {
                return {
                  id: undefined,
                  name: value,
                  create: true,
                };
              } else {
                return value;
              }
            })
          );
        }
      }}
      filterSelectedOptions
      filterOptions={(options, params): Options[] => {
        const filtered = filter(options, params);

        const { inputValue } = params;
        // Suggest the creation of a new value
        const isExisting = options.some((option) => inputValue === option.name);
        if (inputValue !== "" && !isExisting) {
          filtered.push({
            name: inputValue,
            label: `Add "${inputValue}"`,
            create: true,
          });
        }

        return filtered;
      }}
      selectOnFocus
      clearOnBlur
      handleHomeEndKeys
      id="tags-Create"
      options={options}
      getOptionLabel={(option) => {
        // Value selected with enter, right from the input
        if (typeof option === "string") {
          return option;
        }
        // Add "xxx" option created dynamically
        if (option.label) {
          return option.name;
        }
        // Regular option
        return option.name;
      }}
      renderOption={(props, option) => (
        <li {...props}>{option.create ? option.label : option.name}</li>
      )}
      freeSolo
      renderInput={(params) => <TextField {...params} label="" />}
      {...props}
    />
  );
}

const data = [
  {
    id: 1,
    name: "Tag1",
  },
  {
    id: 2,
    name: "Tag2",
  },
  {
    id: 3,
    name: "Tag3",
  },
  {
    id: 4,
    name: "Tag4",
  },
];
