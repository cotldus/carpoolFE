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
import { AutoCompleteField } from "@/utils/AutoCompleteField";

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
        <TableCell align="right">
          {row.date}, {row.time}
        </TableCell>
        <TableCell align="right">{row.time}</TableCell>
        <TableCell align="right">{row.price}</TableCell>
        <TableCell align="right">
          {row.pickUp.map((item) => (
            <>
              {item}
              <br />
            </>
          ))}
        </TableCell>
        <TableCell align="right">
          {row.dropOff.map((item) => (
            <>
              {item}
              <br />
            </>
          ))}
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={7}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Pickup Location</TableCell>
                    <TableCell component="th" scope="row">
                      Drop-off Location
                    </TableCell>
                    <TableCell align="right">Pax</TableCell>
                    <TableCell align="right">Driver</TableCell>
                    <TableCell align="right">Driver</TableCell>
                    <TableCell align="right">Driver</TableCell>
                    <TableCell align="right">Driver</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableCell sx={{ width: 300 }}>
                    <AutoCompleteField />
                  </TableCell>
                  <TableCell sx={{ width: 300 }}>
                    <AutoCompleteField />
                  </TableCell>
                  <TableCell>
                    <input
                      type="text"
                      id="passenger_pax"
                      className="w-full text-right"
                      placeholder="0"
                      required
                    />
                  </TableCell>
                </TableBody>
              </Table>
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
    ["JE - Jurong East", "YS - Yishun", "PYLB - Paya Lebar"],
    ["Tmn Megah De Taste", "BT36 KFC"]
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
      <TableContainer
        component={Paper}
        sx={{ width: "90vw", overflow: "auto", maxWidth: "max-content" }}
      >
        <Table aria-label="collapsible table" sx={{ width: "max-content" }}>
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
