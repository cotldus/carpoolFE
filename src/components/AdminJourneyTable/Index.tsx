import { useScheduleList } from "@/hooks/useScheduleList";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import ExpandableRow from "./ExpandableRow";

export default function AdminJourneyTable() {
  const headerData = ["Date", "Time", "Pickup", "Dropoff", ""];

  const { data: scheduleList = [] } = useScheduleList();
  return (
    <form>
      <TableContainer
        component={Paper}
        sx={{ width: "90vw", overflow: "auto", maxWidth: "max-content" }}
      >
        <Table aria-label="collapsible table" sx={{ width: "max-content" }}>
          <TableHead sx={{ backgroundColor: "#111827" }}>
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
            {scheduleList.map((row: any) => {
              console.log("row1", row);
              return (
                <ExpandableRow
                  key={`${row.scheduleId}-journey`}
                  row={row}
                  id={row.scheduleId}
                />
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </form>
  );
}
