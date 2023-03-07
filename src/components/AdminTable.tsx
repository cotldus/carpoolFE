import { Dispatch, SetStateAction, useState } from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { LocationSelector } from "@/pages/admin";

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
  dateTime: string,
  pickup: string,
  departure: string,
  pax: number
) {
  return { id, dateTime, pickup, departure, pax };
}

const rows = [
  createData("159", "22 June", "Tmn Megah De Taste", "Jurong East", 24),
  createData("123", "23 June", "Tmn Megah De Taste", "Jurong East", 37),
  createData("156", "24 June", "Tmn Megah De Taste", "Jurong East", 24),
  createData("124", "25 June", "Tmn Megah De Taste", "Jurong East", 67),
  createData("175", "26 June", "Tmn Megah De Taste", "Jurong East", 49),
];

type Row = {
  id: string;
  dateTime: string;
  departure: string;
  pickup: string;
  pax: number;
};

const Row = ({ row }: { row: Row }) => {
  const [editMode, setEditMode] = useState(false);
  if (editMode) return <EditLine setEditMode={setEditMode} />;
  return (
    <StyledTableRow>
      <StyledTableCell component="th" scope="row">
        {row.id}
      </StyledTableCell>
      <StyledTableCell align="right">{row.dateTime}</StyledTableCell>
      <StyledTableCell align="right">{row.pickup}</StyledTableCell>
      <StyledTableCell align="right">{row.departure}</StyledTableCell>
      <StyledTableCell align="right">{row.pax}</StyledTableCell>
      <StyledTableCell align="right" onClick={() => setEditMode(true)}>
        Edit/Duplicate
      </StyledTableCell>
    </StyledTableRow>
  );
};

const EditLine = ({
  setEditMode,
}: {
  setEditMode: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <StyledTableRow>
      <StyledTableCell component="th" scope="row">
        <input />
      </StyledTableCell>
      <StyledTableCell align="right">
        <input />
      </StyledTableCell>
      <StyledTableCell align="right">
        <input />
      </StyledTableCell>
      <StyledTableCell align="right">
        <input />
      </StyledTableCell>
      <StyledTableCell align="right">
        <input />
      </StyledTableCell>
      <StyledTableCell align="right" onClick={() => setEditMode(false)}>
        Save
      </StyledTableCell>
    </StyledTableRow>
  );
};

const AdminTable = () => {
  return (
    <TableContainer component={Paper}>
      <form>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Journey ID</StyledTableCell>
              <StyledTableCell align="right">Date/ Time</StyledTableCell>
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
