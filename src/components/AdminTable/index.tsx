import { useScheduleList } from "@/hooks/useScheduleList";
import { rows } from "@/services/mocks";
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
    backgroundColor: theme.palette.common.black,
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
  const { data } = useScheduleList(rows);

  console.log(data);

  return (
    <TableContainer component={Paper} className="w-full">
      <Table sx={{ maxWidth: "100%", width: 1 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Schedule ID</StyledTableCell>
            <StyledTableCell align="right">Date</StyledTableCell>
            <StyledTableCell align="right">Time</StyledTableCell>
            <StyledTableCell align="right">Pick up</StyledTableCell>
            <StyledTableCell align="right">Departure</StyledTableCell>
            <StyledTableCell align="right">Pax</StyledTableCell>
            <StyledTableCell align="right">Actions</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data?.map((row) => {
            const makeLabel = (item: string) => {
              return typeof item === "string"
                ? item?.split(", ").map((address: string) => ({
                    label: address,
                    value: address,
                  }))
                : item;
            };

            const mapRow = {
              ...row,
              pickup: makeLabel(row.pickup),
              departure: makeLabel(row.departure),
            };

            return <Row row={mapRow} key={row.id} />;
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default AdminTable;
