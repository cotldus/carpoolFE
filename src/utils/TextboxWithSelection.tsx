import Box from "@mui/material/Box";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import {
  UseFormRegisterReturn,
} from "react-hook-form";

export default function TextboxWithSelection({
  IconSelection,
  SeperateSelection,
  register,
  name,
  setValue,
  control,
  ...props
}: {
  SeperateSelection?: JSX.Element;
  IconSelection?: JSX.Element;
  register?: UseFormRegisterReturn<any>;
  control?: any;
  name?: string;
  [x: string]: any;
}) {
  return (
    <Box
      className="w-full text-sm bg-gray-50 focus:outline-none border border-gray-200 rounded text-gray-600 flex"
      sx={{ boxShadow: "none" }}
    >
      {SeperateSelection ? (SeperateSelection): null}
      <IconTextField
        iconStart={IconSelection}
        {...props}
        register={register}
        name={name}
        control={control}
      />
    </Box>
  );
}
const IconTextField = ({
  iconStart,
  InputProps,
  register,
  name,
  control,
  ...props
}: {
  iconStart?: any;
  InputProps?: any;
  register?: UseFormRegisterReturn<any>;
  name?: string;
  control?: any;
  [x: string]: any;
}) => {
  const registerForm = register;

  return (
    <TextField
      className="w-full text-sm border-0"
      sx={{ boxShadow: "none", "& fieldset": { border: 'none' },}}
      {...props}
      InputProps={{
        ...InputProps,
        startAdornment: iconStart ? (
          <InputAdornment position="start">{iconStart}</InputAdornment>
        ) : null,
      }}
      {...registerForm}
    />
  );
};
