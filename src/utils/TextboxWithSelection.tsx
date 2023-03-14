import Box from "@mui/material/Box";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";

export default function TextboxWithSelection({
  IconSelection,
}: {
  IconSelection?: JSX.Element;
}) {
  return (
    <Box
      className="w-full text-sm bg-gray-50 focus:outline-none border border-gray-200 rounded text-gray-600"
      sx={{}}
    >
      <IconTextField label="Email" iconStart={IconSelection} />
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
