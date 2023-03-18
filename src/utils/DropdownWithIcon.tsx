import { MenuItem, Select } from "@mui/material";
import CountryCodeMenuItem from "./CountryCodeMenuIcons";

export const DropdownWithIcon = ({
  defaultValue,
  setValue,
  selectionList,
}: {
  defaultValue?: string | number;
  setValue?: any;
  selectionList?: any[];
}) => {
  return (
    <Select
      sx={{
        boxShadow: "none",
        ".MuiOutlinedInput-notchedOutline": { border: 0 },
      }}
      id="demo-simple-select"
      label="countryCode"
      value={defaultValue}
      onChange={(event) => setValue(event.target.value)}
      renderValue={(selected) => `+${selected}`}
      variant="standard"
      disableUnderline
      type="hidden"
    >
      {selectionList?.map((item, index) => {
        return (
          <MenuItem value={item.countryCode} key={index}>
            <CountryCodeMenuItem {...item} />
          </MenuItem>
        );
      })}
    </Select>
  );
};
