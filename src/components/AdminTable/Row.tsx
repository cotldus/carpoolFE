import { useSchedule } from "@/hooks/useSchedule";
import { Schedule } from "@/services/interface";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { useState } from "react";
import { StyledTableCell, StyledTableRow } from ".";
import { stringLabelValueMapper } from "../helper";
import { EditLine } from "./EditLine";

export const Row = ({ row }: { row: Schedule }) => {
  const [editMode, setEditMode] = useState(false);
  const { deleteSchedule, duplicateSchedule } = useSchedule();

  if (editMode) return <EditLine setEditMode={setEditMode} row={row} />;

  return (
    <StyledTableRow>
      <StyledTableCell component="th" scope="row">
        {row.scheduleId}
      </StyledTableCell>
      <StyledTableCell align="right">{row.date}</StyledTableCell>
      <StyledTableCell align="right">{row.time}</StyledTableCell>
      <StyledTableCell align="right">{row.journeyToAndFrom}</StyledTableCell>
      <StyledTableCell align="right">
        {stringLabelValueMapper(row.pickup)
          ?.map((item) => item.label)
          .join(", ")}
      </StyledTableCell>
      <StyledTableCell align="right">
        {stringLabelValueMapper(row.dropoff)
          ?.map((item) => item.label)
          .join(", ")}
      </StyledTableCell>
      <StyledTableCell align="right">{row.totalPax}</StyledTableCell>
      <StyledTableCell align="right">
        {
          <div>
            <EditIcon onClick={() => setEditMode(true)} />
            <ContentCopyIcon onClick={() => duplicateSchedule.mutate(row)} />
            <DeleteIcon onClick={() => deleteSchedule.mutate(row.scheduleId)} />
          </div>
        }
      </StyledTableCell>
    </StyledTableRow>
  );
};
