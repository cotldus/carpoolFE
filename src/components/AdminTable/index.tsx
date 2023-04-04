import { useDeleteSchedule } from "@/hooks/useDeleteSchedule";
import { useScheduleList } from "@/hooks/useScheduleList";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Row } from "./Row";

export const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#3366CC",
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

export const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const AdminTable = () => {
  const { data } = useScheduleList();
  
  return (
    <TableContainer component={Paper}>
      <Table sx={{ maxWidth: "100%", width: 1 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Schedule ID</StyledTableCell>
            <StyledTableCell align="right">Date</StyledTableCell>
            <StyledTableCell align="right">Time</StyledTableCell>
            <StyledTableCell align="right">Country Journey</StyledTableCell>
            <StyledTableCell align="right">Pick up</StyledTableCell>
            <StyledTableCell align="right">Dropoff</StyledTableCell>
            <StyledTableCell align="right">Pax</StyledTableCell>
            <StyledTableCell align="right">Actions</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data?.map((row) => {
            return <Row row={row} key={row.scheduleId} />;
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default AdminTable;
