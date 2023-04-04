import { FormControl, MenuItem, Select } from "@mui/material";
import { useRouter } from "next/router";

export const GlobalToggles = () => {
  const router = useRouter();
  const changeLocale = (event: { target: { value: any } }) => {
    const locale = event.target.value;
    router.push(router.pathname, router.pathname, { locale });
  };
  return (
    <FormControl
      variant="standard"
      sx={{
        m: 1,
        maxWidth: 80,
        "@media(min-width: 780px)": {
          minWidth: 120,
          maxWidth: 200,
        },
        "& fieldset": { border: "none" },
      }}
      className="absolute right-0 sm:pr-4 pr-2"
    >
      <div className="relative border rounded self-center sm:right-0 sm:px-1 bg-white">
        <Select onChange={changeLocale} defaultValue={"en-US"} disableUnderline>
          <MenuItem value="en-US" className="bg-white">English</MenuItem>
          <MenuItem value="zh-CN" className="bg-white">中文</MenuItem>
        </Select>
      </div>
    </FormControl>
  );
};
