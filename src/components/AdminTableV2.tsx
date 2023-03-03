import * as React from "react";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import Button from "@mui/material/Button";

function createData(
  car: string,
  date: string,
  time: string,
  price: number,
  pickUp: string[],
  dropOff: string[]
) {
  return {
    car,
    date,
    time,
    price,
    pickUp,
    dropOff,
  };
}

function Row(props: { row: ReturnType<typeof createData> }) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.car}
        </TableCell>
        <TableCell align="right">{row.date}</TableCell>
        <TableCell align="right">{row.time}</TableCell>
        <TableCell align="right">{row.price}</TableCell>
        <TableCell align="right">{row.pickUp.join(", ")}</TableCell>
        <TableCell align="right">{row.dropOff.join(", ")}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                Placeholder
              </Typography>
              Placeholder
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

const rows = [
  createData(
    "ABC123",
    "1 June",
    "1600",
    24,
    ["Tmn Megah De Taste", "BT36 KFC"],
    ["JE - Jurong East", "YS - Yishun", "PYLB - Paya Lebar"]
  ),
  createData(
    "DEF456",
    "2 June",
    "1600",
    37,
    ["Tmn Megah De Taste", "BT36 KFC"],
    ["JE - Jurong East", "YS - Yishun", "PYLB - Paya Lebar"]
  ),
  createData(
    "GHI789",
    "3 June",
    "1600",
    24,
    ["Tmn Megah De Taste", "BT36 KFC"],
    ["JE - Jurong East", "YS - Yishun", "PYLB - Paya Lebar"]
  ),
  createData(
    "JKL123",
    "4 June",
    "1600",
    67,
    ["Tmn Megah De Taste", "BT36 KFC"],
    ["JE - Jurong East", "YS - Yishun", "PYLB - Paya Lebar"]
  ),
  createData(
    "MNO456",
    "5 June",
    "1600",
    49,
    ["Tmn Megah De Taste", "BT36 KFC"],
    ["JE - Jurong East", "YS - Yishun", "PYLB - Paya Lebar"]
  ),
];

export default function CollapsibleTable() {
  const headerData = ["Car", "Date", "Time", "Price", "Pick up", "Drop off"];
  return (
    <form>
      <TableContainer component={Paper}>
        <Table aria-label="collapsible table">
          <TableHead>
            <TableRow>
              <TableCell />
              {headerData.map((title) => (
                <TableCell align="right" key={`${title}-title`}>
                  {title}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <Row key={row.car} row={row} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <button
        type="submit"
        className="w-full py-4 bg-slate-800 hover:bg-slate-900 rounded text-sm font-bold text-gray-50 transition duration-200"
      >
        Save
      </button>
    </form>
  );
}

// {
//     "date": "26/02/23",
//     "time": 1900,
//     "price": 16,
//     "pickup": [
//         "Tmn Megah De Taste",
//         "BT36 KFC"
//     ],
//     "dropoff": [
//         "JE - Jurong East",
//         "YS - Yishun",
//         "PYLB - Paya Lebar"
//     ]
// }

// The pickup and dropoff will be replaced with ID.
// Frontend can create an ENUM for now.

// Drop off
// 1. Tmn Megah De Taste
// 2. BT36 KFC

// Pick up
// 1. Jurong East
// 2. Yishun
// 3. Paya Lebar
