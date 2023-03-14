import { MenuItem, Select } from "@mui/material";

export const DropdownWithIcon = ({
  value,
  setValue,
}: {
  value?: string | number;
  setValue?: any;
}) => {
  return (
    <Select
      id="demo-simple-select"
      value={value}
      label="countryCode"
      onChange={(event) => setValue(event.target.value)}
    >
      <MenuItem value={65}>+65 </MenuItem>
      <MenuItem value={210}>+210 </MenuItem>
      <MenuItem value={86}>+86 </MenuItem>
    </Select>
  );
};
