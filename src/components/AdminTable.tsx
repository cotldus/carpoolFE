import { Dispatch, SetStateAction, useState } from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import EditIcon from "@mui/icons-material/Edit";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import { AutoCompleteFieldInput } from "@/utils/AutoCompleteFieldInput";
import DatePickers from "@/utils/datepicker";
import TimePickers from "@/utils/timepicker";
import SaveIcon from "@mui/icons-material/Save";
import { labelObject } from "@/services/interface";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function createData(
  id: string,
  date: string,
  time: string,
  pickup: labelObject[],
  departure: labelObject[],
  pax: number
) {
  return { id, date, time, pickup, departure, pax };
}

const rows = [
  createData(
    "159",
    "2023-06-22",
    "10:30",
    [{ label: "Tmn Megah De Taste", value: "Tmn Megah De Taste" }],
    [{ label: "Jurong East", value: "Jurong East" }],
    24
  ),
  createData(
    "123",
    "2023-06-22",
    "10:30",
    [{ label: "Tmn Megah De Taste", value: "Tmn Megah De Taste" }],
    [{ label: "Jurong East", value: "Jurong East" }],
    37
  ),
  createData(
    "156",
    "2023-06-22",
    "10:30",
    [{ label: "Tmn Megah De Taste", value: "Tmn Megah De Taste" }],
    [{ label: "Jurong East", value: "Jurong East" }],
    24
  ),
  createData(
    "124",
    "2023-06-22",
    "10:30",
    [{ label: "Tmn Megah De Taste", value: "Tmn Megah De Taste" }],
    [{ label: "Jurong East", value: "Jurong East" }],
    67
  ),
  createData(
    "175",
    "26 June",
    "10:30",
    [{ label: "Tmn Megah De Taste", value: "Tmn Megah De Taste" }],
    [{ label: "Jurong East", value: "Jurong East" }],
    49
  ),
];

type Row = {
  id: string;
  date: string;
  time: string;
  departure: labelObject[];
  pickup: labelObject[];
  pax: number;
};

const Row = ({ row }: { row: Row }) => {
  const [editMode, setEditMode] = useState(false);
  if (editMode) return <EditLine setEditMode={setEditMode} row={row} />;
  function duplicateSchedule(id: string): void {
    console.log("duplicate " + id);
  }

  return (
    <StyledTableRow>
      <StyledTableCell component="th" scope="row">
        {row.id}
      </StyledTableCell>
      <StyledTableCell align="right">{row.date}</StyledTableCell>
      <StyledTableCell align="right">{row.time}</StyledTableCell>
      <StyledTableCell align="right">
        {row.pickup.map((item) => item.label).join(", ")}
      </StyledTableCell>
      <StyledTableCell align="right">
        {row.departure.map((item) => item.label).join(", ")}
      </StyledTableCell>
      <StyledTableCell align="right">{row.pax}</StyledTableCell>
      <StyledTableCell align="right">
        {
          <div>
            <EditIcon onClick={() => setEditMode(true)} />
            <ContentCopyIcon onClick={() => duplicateSchedule(row.id)} />
          </div>
        }
      </StyledTableCell>
    </StyledTableRow>
  );
};

const EditLine = ({
  setEditMode,
  row,
}: {
  setEditMode: Dispatch<SetStateAction<boolean>>;
  row: Row;
}) => {
  return (
    <StyledTableRow>
      <StyledTableCell component="th" scope="row">
        {row.id}
      </StyledTableCell>
      <StyledTableCell align="right">
        <DatePickers name="date" initValue={row.date} />
      </StyledTableCell>
      <StyledTableCell align="right">
        <TimePickers name="time" initValue={row.time} />
      </StyledTableCell>
      <StyledTableCell align="right">
        <AutoCompleteFieldInput name="pickUp" initValue={row.pickup} />
      </StyledTableCell>
      <StyledTableCell align="right">
        <AutoCompleteFieldInput name="dropOff" initValue={row.departure} />
      </StyledTableCell>
      <StyledTableCell align="right">
        <input
          name="totalPax"
          type="text"
          id="passenger_pax"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
          defaultValue={row.pax.toString()}
          required
        />
      </StyledTableCell>
      <StyledTableCell align="right" onClick={() => setEditMode(false)}>
        <SaveIcon />
      </StyledTableCell>
    </StyledTableRow>
  );
};

const AdminTable = () => {
  return (
    <TableContainer component={Paper} className="w-full">
      <form>
        <Table
          sx={{ maxWidth: "100%", width: 1 }}
          aria-label="customized table"
        >
          <TableHead>
            <TableRow>
              <StyledTableCell>Journey ID</StyledTableCell>
              <StyledTableCell align="right">Date</StyledTableCell>
              <StyledTableCell align="right">Time</StyledTableCell>
              <StyledTableCell align="right">Pick up</StyledTableCell>
              <StyledTableCell align="right">Departure</StyledTableCell>
              <StyledTableCell align="right">Pax</StyledTableCell>
              <StyledTableCell align="right">Actions</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <Row row={row} key={row.id} />
            ))}
          </TableBody>
        </Table>
      </form>
    </TableContainer>
  );
};

export default AdminTable;
