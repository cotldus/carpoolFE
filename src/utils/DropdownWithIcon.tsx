import { MenuItem, Select } from "@mui/material";
import CountryCodeMenuItem from "./CountryCodeMenuIcons";

export const DropdownWithIcon = ({
  defaultValue,
  setValue,
  selectionList,
  className,
  ...props
}: {
  defaultValue?: string | number;
  setValue?: any;
  selectionList?: any[];
  className: string
  [x: string]: any;
}) => {
  return (
    <Select
      sx={{
        boxShadow: "none",
        ".MuiOutlinedInput-notchedOutline": { border: 0 },
      }}
      id="demo-simple-select"
      label="countryCode"
      defaultValue={defaultValue}
      onChange={(event) => setValue(event.target.value)}
      renderValue={(selected) => `+${selected}`}
      variant="standard"
      disableUnderline
      className={className}
      {...props}
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
