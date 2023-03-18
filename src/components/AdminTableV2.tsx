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
import Paper from "@mui/material/Paper";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { Button } from "@mui/material";
import { ExpandAdminTable } from "./ExpandAdminTable";
import { journeyAssignmentPayload } from "./interface";
import { createData } from "./helper";
import { mockJourneyList } from "@/pages/api/mockData/mockJourneyList";
import { Queue } from "@mui/icons-material";

function Row(props: {
  row: ReturnType<typeof createData>;
  assignment: journeyAssignmentPayload[];
}) {
  const { row, assignment } = props;
  const [open, setOpen] = React.useState(false);
  const [journeyAssignment, setJourneyAssignment] =
    React.useState<journeyAssignmentPayload[]>(assignment);
  const addNewAssignmentRow = () => {
    const newAssignment: journeyAssignmentPayload = {
      driver: "",
      car: {
        name: "",
        pax: 0,
      },
      groups: [],
      groupPax: 0,
    };
    setJourneyAssignment((prev) => [...prev, newAssignment]);
  };

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
        <TableCell align="right">{row.date}</TableCell>
        <TableCell align="right">{row.time}</TableCell>
        <TableCell align="right">
          {row.pickup.reduce((locations, location, id) => {
            return (
              <>
                {id > 0 && (
                  <>
                    {locations},<br></br>
                  </>
                )}
                {location}
              </>
            );
          }, <></>)}
        </TableCell>
        <TableCell align="right">
          {row.dropoff.reduce((locations, location, id) => {
            return (
              <>
                {id > 0 && (
                  <>
                    {locations},<br></br>
                  </>
                )}
                {location}
                {}
              </>
            );
          }, <></>)}
        </TableCell>
        <TableCell align="right">
          <Button
            onClick={() => alert(`Send whatsapp message for ${row.journeyId}`)}
          >
            Notify
          </Button>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ padding: 0 }} colSpan={6}>
          <div className="bg-slate-100">
            <Collapse in={open} timeout="auto" unmountOnExit>
              <Box sx={{ margin: 1, marginTop: 0 }}>
                <IconButton
                  color="primary"
                  aria-label="add assignment"
                  size="small"
                  sx={{
                    marginLeft: "auto",
                    display: "block",
                    textSizeAdjust: "auto",
                  }}
                  onClick={addNewAssignmentRow}
                >
                  <Queue />
                  Add
                </IconButton>
                {journeyAssignment?.map((details, id) => (
                  <ExpandAdminTable key={id} assignmentDetails={details} />
                ))}
              </Box>
            </Collapse>
          </div>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

const rows = mockJourneyList.map((item) =>
  createData(
    item.journeyId,
    item.date,
    item.time,
    item.totalPax,
    item.pickup,
    item.dropoff,
    item.assignment
  )
);

export default function CollapsibleTable() {
  const headerData = ["Date", "Time", "Pickup", "Dropoff", ""];
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
            {rows.map((row) => (
              <Row
                key={`${row.journeyId}-journey`}
                row={row}
                assignment={row.journeyAssignment}
              />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </form>
  );
}
