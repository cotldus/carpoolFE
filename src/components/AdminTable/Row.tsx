import { useDeleteSchedule } from "@/hooks/useDeleteSchedule";
import { useDuplicateSchedule } from "@/hooks/useDuplicateSchedule";
import { labelObject, Schedule, ShowSchedule } from "@/services/interface";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import { useState } from "react";
import { StyledTableRow, StyledTableCell } from ".";
import { EditLine } from "./EditLine";
import { stringLabelValueMapper } from "../helper";

export type Row = {
  id: string;
  date: string;
  time: string;
  dropoff: labelObject[];
  pickup: labelObject[];
  totalPax: number;
};

export const Row = ({ row }: { row: Schedule }) => {
  const [editMode, setEditMode] = useState(false);
  const duplicateSchedule = useDuplicateSchedule();
  const deleteSchedule = useDeleteSchedule();

  if (editMode) return <EditLine setEditMode={setEditMode} row={row} />;

  return (
    <StyledTableRow>
      <StyledTableCell component="th" scope="row">
        {row.scheduleId}
      </StyledTableCell>
      <StyledTableCell align="right">{row.date}</StyledTableCell>
      <StyledTableCell align="right">{row.time}</StyledTableCell>
      <StyledTableCell align="right">
        {stringLabelValueMapper(row.pickup)?.map((item) => item.label).join(", ")}
      </StyledTableCell>
      <StyledTableCell align="right">
        {stringLabelValueMapper(row.dropoff)?.map((item) => item.label).join(", ")}
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
