import { useAddJourney } from "@/hooks/useAddJourney";
import { useJourneyList } from "@/hooks/useJourneyList";
import { Queue } from "@mui/icons-material";
import {
  TableRow,
  TableCell,
  IconButton,
  Button,
  Collapse,
  Box,
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { useState, Fragment } from "react";
import { ExpandAdminTable } from "./ExpandAdminTable";
import { createData } from "../helper";

export default function ExpandableRow(props: {
  row: ReturnType<typeof createData>;
  id: string;
}) {
  const { row, id: scheduleId } = props;
  const [open, setOpen] = useState(false);
  const addJourney = useAddJourney(scheduleId);
  const addNewAssignmentRow = async () => addJourney.mutate();

  const { data: journeyAssignment } = useJourneyList(scheduleId);

  return (
    <Fragment>
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
            onClick={() =>
              alert(`Send whatsapp message for schedule ${row.scheduleId}`)
            }
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
                {journeyAssignment?.map((details: any, id: any) => (
                  <ExpandAdminTable
                    key={id}
                    assignmentDetails={details}
                    scheduleId={scheduleId}
                  />
                ))}
              </Box>
            </Collapse>
          </div>
        </TableCell>
      </TableRow>
    </Fragment>
  );
}
