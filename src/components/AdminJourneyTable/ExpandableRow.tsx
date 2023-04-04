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
import DeleteIcon from "@mui/icons-material/Delete";
import { useDeleteSchedule } from "@/hooks/useDeleteSchedule";
import { Journey, Schedule } from "@/services/interface";

export default function ExpandableRow({ row }: { row: Schedule }) {
  const { scheduleId, date, time, pickup, dropoff } = row;
  const [open, setOpen] = useState(false);
  const addJourney = useAddJourney(scheduleId);
  const addNewAssignmentRow = async () => addJourney.mutate();
  const deleteSchedule = useDeleteSchedule();
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
        <TableCell align="right">{date}</TableCell>
        <TableCell align="right">{time}</TableCell>
        <TableCell align="right">
          {pickup.reduce((locations, location, id) => {
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
          {dropoff.reduce((locations, location, id) => {
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
              alert(`Send whatsapp message for schedule ${scheduleId}`)
            }
          >
            Notify
          </Button>
        </TableCell>
        <TableCell align="right">
          <DeleteIcon onClick={() => deleteSchedule.mutate(scheduleId)} />
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ padding: 0 }} colSpan={7}>
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
                {journeyAssignment?.map((details: Journey) => (
                  <ExpandAdminTable
                    key={`journey-${details.journeyId}`}
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
