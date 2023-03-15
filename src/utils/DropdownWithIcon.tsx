import { MenuItem, Select } from "@mui/material";
import CountryCodeMenuItem from "./CountryCodeMenuIcons";

export const DropdownWithIcon = ({
  value,
  setValue,
  selectionList,
}: {
  value?: string | number;
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
      value={value}
      label="countryCode"
      onChange={(event) => setValue(event.target.value)}
      renderValue={(selected) => `+${selected}`}
      variant="standard"
      disableUnderline
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
