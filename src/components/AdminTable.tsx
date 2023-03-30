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
  pickup: string,
  departure: string,
  pax: number
) {
  return { id, date, time, pickup, departure, pax };
}

const rows = [
  createData(
    "159",
    "22 June",
    "10:30am",
    "Tmn Megah De Taste",
    "Jurong East",
    24
  ),
  createData(
    "123",
    "23 June",
    "10:30am",
    "Tmn Megah De Taste",
    "Jurong East",
    37
  ),
  createData(
    "156",
    "24 June",
    "10:30am",
    "Tmn Megah De Taste",
    "Jurong East",
    24
  ),
  createData(
    "124",
    "25 June",
    "10:30am",
    "Tmn Megah De Taste",
    "Jurong East",
    67
  ),
  createData(
    "175",
    "26 June",
    "10:30am",
    "Tmn Megah De Taste",
    "Jurong East",
    49
  ),
];

type Row = {
  id: string;
  date: string;
  time: string;
  departure: string;
  pickup: string;
  pax: number;
};

const Row = ({ row }: { row: Row }) => {
  const [editMode, setEditMode] = useState(false);
  if (editMode)
    return <EditLine setEditMode={setEditMode} journeyId={row.id} />;
  function duplicateSchedule(id: string): void {
    console.log("duplicate " + id)
  }

  return (
    <StyledTableRow>
      <StyledTableCell component="th" scope="row">
        {row.id}
      </StyledTableCell>
      <StyledTableCell align="right">{row.date}</StyledTableCell>
      <StyledTableCell align="right">{row.time}</StyledTableCell>
      <StyledTableCell align="right">{row.pickup}</StyledTableCell>
      <StyledTableCell align="right">{row.departure}</StyledTableCell>
      <StyledTableCell align="right">{row.pax}</StyledTableCell>
      <StyledTableCell align="right">
        {
          <div>
            <EditIcon onClick={() => setEditMode(true)} />
            <ContentCopyIcon onClick={() => duplicateSchedule(row.id)}/>
          </div>
        }
      </StyledTableCell>
    </StyledTableRow>
  );
};

const EditLine = ({
  setEditMode,
  journeyId,
}: {
  setEditMode: Dispatch<SetStateAction<boolean>>;
  journeyId: string;
}) => {
  return (
    <StyledTableRow>
      <StyledTableCell component="th" scope="row">
        {journeyId}
      </StyledTableCell>
      <StyledTableCell align="right">
        <DatePickers name="date" />
      </StyledTableCell>
      <StyledTableCell align="right">
        <TimePickers name="time" />
      </StyledTableCell>
      <StyledTableCell align="right">
        <AutoCompleteFieldInput name="pickUp" />
      </StyledTableCell>
      <StyledTableCell align="right">
        <AutoCompleteFieldInput name="dropOff" />
      </StyledTableCell>
      <StyledTableCell align="right">
        <input
          name="totalPax"
          type="text"
          id="passenger_pax"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
          placeholder="0"
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
