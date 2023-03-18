import Box from "@mui/material/Box";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import {
  Controller,
  UseFormRegister,
  UseFormRegisterReturn,
  UseFormSetValue,
} from "react-hook-form";

export default function TextboxWithSelection({
  IconSelection,
  register,
  name,
  setValue,
  control,
  ...props
}: {
  IconSelection?: JSX.Element;
  register?: UseFormRegisterReturn<any>;
  control?: any;
  name?: string;
  [x: string]: any;
}) {
  return (
    <Box
      className="w-full text-sm bg-gray-50 focus:outline-none border border-gray-200 rounded text-gray-600"
      sx={{ boxShadow: "none" }}
    >
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
          className="w-full text-sm"
          sx={{ boxShadow: "none" }}
          // onChange={onChange} // send value to hook form
          // onBlur={onBlur} // notify when input is touched/blur
          // value={value}
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
