import { Dispatch, FormEvent, SetStateAction, useState } from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import axios from "axios";

const config = {
  headers: {
    "content-type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
};

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
  departure: string,
  pax: number
) {
  return { id, dateTime, departure, pax };
}

const rows = [
  createData("159", "22 June", "Jurong East", 24),
  createData("123", "23 June", "Jurong East", 37),
  createData("156", "24 June", "Jurong East", 24),
  createData("124", "25 June", "Jurong East", 67),
  createData("175", "26 June", "Jurong East", 49),
];

type Row = {
  id: string;
  dateTime: string;
  departure: string;
  pax: number;
};

const Row = ({ row }: { row: Row }) => {
  const [editMode, setEditMode] = useState(false);
  if (editMode) return <EditLine setEditMode={setEditMode} id={row.id} />;
  return (
    <StyledTableRow>
      <StyledTableCell component="th" scope="row">
        {row.id}
      </StyledTableCell>
      <StyledTableCell align="right">{row.dateTime}</StyledTableCell>
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
  id,
}: {
  setEditMode: Dispatch<SetStateAction<boolean>>;
  id: string;
}) => {
    const value = {setEditMode, id}
  return (
    <StyledTableRow>
      <StyledTableCell component="th" scope="row">
      <TextField name="id" variant="outlined" size="small" value={id} read-only/>
      </StyledTableCell>
      <StyledTableCell align="right">
        <TextField name="dateTime" variant="outlined" size="small"/>
      </StyledTableCell>
      <StyledTableCell align="right">
        <TextField name="departure" variant="outlined" size="small" />
      </StyledTableCell>
      <StyledTableCell align="right">
        <TextField name="pax" variant="outlined" size="small" />
      </StyledTableCell>
      <StyledTableCell align="right">
        <Button type="submit" variant="outlined" value={id} onClick={(e)=> {
            e.preventDefault();
            setEditMode(false)
        }}>
          Save
        </Button>
      </StyledTableCell>
    </StyledTableRow>
  );
};

const handleSubmit = (e: any) => {
  // Prevent the browser from reloading the page
  e.preventDefault();

  // Read the form data
  const form = e.target;
  const formData = new FormData(form);

  const formJson = Object.fromEntries(formData.entries());
  console.log(formJson)
  axios.post("/save", {
    ...formJson
  }, config).catch((e)=> console.log("error"));
};

const AdminTable = () => {
  return (
    <TableContainer component={Paper}>
      <form onSubmit={handleSubmit} method="post" action="#">
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Journey ID</StyledTableCell>
              <StyledTableCell align="right">Date/ Time</StyledTableCell>
              <StyledTableCell align="right">Depature</StyledTableCell>
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