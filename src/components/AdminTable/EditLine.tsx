import { useSchedule } from "@/hooks/useSchedule";
import { Schedule, ScheduleFields, ScheduleForm } from "@/services/interface";
import { AutoCompleteFieldInput } from "@/utils/AutoCompleteFieldInput";
import DatePickers from "@/utils/datepicker";
import TimePickers from "@/utils/timepicker";
import SaveIcon from "@mui/icons-material/Save";
import { Table, TableBody } from "@mui/material";
import { Dispatch, SetStateAction, useEffect } from "react";
import { StyledTableCell, StyledTableRow } from ".";
import { stringLabelValueMapper } from "../helper";

export const EditLine = ({
  setEditMode,
  row,
}: {
  setEditMode: Dispatch<SetStateAction<boolean>>;
  row: Schedule;
}) => {
  const { editSchedule } = useSchedule();

  useEffect(() => {
    editSchedule.isSuccess && setEditMode(false);
  }, [editSchedule.isSuccess]);

  const onSubmit = (e: any) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const formJson: unknown = Object.fromEntries(formData.entries());
    const request = formJson as ScheduleForm;
    const updateScheduleDetails: Schedule = {
      ...row,
      ...request,
      scheduleId: row.scheduleId,
      pickup: request.pickup.split(", "),
      dropoff: request.dropoff.split(", "),
    };
    editSchedule.mutate(updateScheduleDetails);
  };

  return (
    <StyledTableCell style={{ padding: 0 }} colSpan={8}>
      <form onSubmit={onSubmit}>
        <Table sx={{ maxWidth: "100%", width: 1 }}>
          <TableBody>
            <StyledTableRow>
              <StyledTableCell component="th" scope="row">
                {row.scheduleId}
              </StyledTableCell>
              <StyledTableCell align="right">
                <DatePickers name={ScheduleFields.DATE} initValue={row.date} />
              </StyledTableCell>
              <StyledTableCell align="right">
                <TimePickers name={ScheduleFields.TIME} initValue={row.time} />
              </StyledTableCell>
              <StyledTableCell align="right">
                <AutoCompleteFieldInput
                  name={ScheduleFields.PICKUP}
                  initValue={stringLabelValueMapper(row.pickup)}
                />
              </StyledTableCell>
              <StyledTableCell align="right">
                <AutoCompleteFieldInput
                  name={ScheduleFields.DROPOFF}
                  initValue={stringLabelValueMapper(row.dropoff)}
                />
              </StyledTableCell>
              <StyledTableCell align="right">
                <input
                  name={ScheduleFields.TOTALPAX}
                  type="text"
                  id="passenger_pax"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                  defaultValue={row.totalPax.toString()}
                  required
                />
              </StyledTableCell>
              <StyledTableCell align="right">
                <button type="submit">
                  <SaveIcon />
                </button>
              </StyledTableCell>
            </StyledTableRow>
          </TableBody>
        </Table>
      </form>
    </StyledTableCell>
  );
};
