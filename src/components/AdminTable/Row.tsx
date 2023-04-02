import { useDeleteSchedule } from "@/hooks/useDeleteSchedule";
import { useDuplicateSchedule } from "@/hooks/useDuplicateSchedule";
import { labelObject } from "@/services/interface";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import { useState } from "react";
import { StyledTableRow, StyledTableCell } from ".";
import { EditLine } from "./EditLine";

export type Row = {
  id: string;
  date: string;
  time: string;
  dropoff: labelObject[];
  pickup: labelObject[];
  totalPax: number;
};

export const Row = ({ row }: { row: Row }) => {
  const [editMode, setEditMode] = useState(false);
  const duplicateSchedule = useDuplicateSchedule();
  const deleteSchedule = useDeleteSchedule();

  if (editMode) return <EditLine setEditMode={setEditMode} row={row} />;

  return (
    <StyledTableRow>
      <StyledTableCell component="th" scope="row">
        {row.id}
      </StyledTableCell>
      <StyledTableCell align="right">{row.date}</StyledTableCell>
      <StyledTableCell align="right">{row.time}</StyledTableCell>
      <StyledTableCell align="right">
        {row.pickup?.map((item) => item.label).join(", ")}
      </StyledTableCell>
      <StyledTableCell align="right">
        {row.dropoff?.map((item) => item.label).join(", ")}
      </StyledTableCell>
      <StyledTableCell align="right">{row.totalPax}</StyledTableCell>
      <StyledTableCell align="right">
        {
          <div>
            <EditIcon onClick={() => setEditMode(true)} />
            <ContentCopyIcon onClick={() => duplicateSchedule.mutate(row)} />
            <DeleteIcon onClick={() => deleteSchedule.mutate(row.id)} />
          </div>
        }
      </StyledTableCell>
    </StyledTableRow>
  );
};
