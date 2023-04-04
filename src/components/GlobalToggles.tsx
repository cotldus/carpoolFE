import { FormControl, MenuItem, Select } from "@mui/material";
import { useRouter } from "next/router";

export const GlobalToggles = () => {
  const router = useRouter();
  const changeLocale = (event: { target: { value: any } }) => {
    const locale = event.target.value;
    router.push(router.pathname, router.pathname, { locale });
  };
  console.log("ENTER TOGGLE")
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
      className="absolute sm:right-0 sm:pr-4"
    >
      <div className="relative border rounded self-center sm:right-0 sm:px-1 bg-gradient-to-r from-green-100 to-blue-200 hover:from-pink-200 hover:to-yellow-200 ...">
        <Select onChange={changeLocale} defaultValue={"en-US"} disableUnderline>
          <MenuItem value="en-US" className="bg-gradient-to-r from-green-50 to-blue-50 hover:from-pink-100 hover:to-yellow-100">English</MenuItem>
          <MenuItem value="zh-CN" className="bg-gradient-to-r from-green-50 to-blue-50 hover:from-pink-100 hover:to-yellow-100">中文</MenuItem>
        </Select>
      </div>
    </FormControl>
  );
};
