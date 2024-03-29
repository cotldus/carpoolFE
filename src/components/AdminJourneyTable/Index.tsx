import { useSchedule } from "@/hooks/useSchedule";
import { Schedule } from "@/services/interface";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import ExpandableRow from "./ExpandableRow";

export default function AdminJourneyTable() {
  const headerData = ["Date", "Time", "Pickup", "Dropoff", "Notify", "Delete"];
  const {
    getScheduleList: { data },
  } = useSchedule();

  return (
    <form>
      <TableContainer component={Paper} sx={{ width: "100%" }}>
        <Table
          aria-label="collapsible table"
          sx={{ maxWidth: "100%", width: 1 }}
        >
          <TableHead sx={{ backgroundColor: "#3366CC" }}>
            <TableRow
              sx={{
                "& .MuiTableCell-root": { color: "white", fontWeight: 600 },
              }}
            >
              <TableCell />
              {headerData.map((title) => (
                <TableCell align="right" key={`${title}-title`}>
                  {title}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {data?.map((row: Schedule) => {
              return (
                <ExpandableRow key={`${row.scheduleId}-journey`} row={row} />
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </form>
  );
}
