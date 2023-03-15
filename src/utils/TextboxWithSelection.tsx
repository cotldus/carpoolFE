import Box from "@mui/material/Box";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";

export default function TextboxWithSelection({
  IconSelection,
  ...props
}: {
  IconSelection?: JSX.Element;
  [x: string]: any;
}) {
  return (
    <Box
      className="w-full text-sm bg-gray-50 focus:outline-none border border-gray-200 rounded text-gray-600"
      sx={{boxShadow: "none"}}
    >
      <IconTextField iconStart={IconSelection} {...props}/>
    </Box>
  );
}
const IconTextField = ({
  iconStart,
  InputProps,
  ...props
}: {
  iconStart?: any;
  InputProps?: any;
  [x: string]: any;
}) => {
  return (
    <TextField
      className="w-full text-sm"
      sx={{boxShadow: "none"}}
      {...props}
      InputProps={{
        ...InputProps,
        startAdornment: iconStart ? (
          <InputAdornment position="start">{iconStart}</InputAdornment>
        ) : null,
      }}
    />
  );
};
