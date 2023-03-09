import { FormControl, MenuItem, Select } from "@mui/material";
import { useRouter } from "next/router";

export const Toggles = () => {
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
      }}
      className="relative self-center sm:absolute sm:right-0 sm:pr-4"
    >
      <div className="sm:flex sm:flex-col sm:text-shadow-sm bg-teal-50">
        <Select onChange={changeLocale} defaultValue={"en-US"}>
          <MenuItem value="en-US">English</MenuItem>
          <MenuItem value="zh-CN">中文</MenuItem>
        </Select>
      </div>
    </FormControl>
  );
};
