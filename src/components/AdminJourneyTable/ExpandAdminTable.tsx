import { useCar } from "@/hooks/useCar";
import { useDeleteJourney } from "@/hooks/useDeleteJourney";
import { useDriverList } from "@/hooks/useDriverList";
import { useGroupsList } from "@/hooks/useGroupsList";
import { useSaveJourney } from "@/hooks/useSaveJourney";
import { mockCarplateList } from "@/pages/api/mockData/mockCarplateList";
import { mockGroupList } from "@/pages/api/mockData/mockGroupList";
import { AutoCompleteFieldDropdown } from "@/utils/AutoCompleteFieldDropdown";
import MultipleSelect from "@/utils/MultiSelect";
import DeleteIcon from "@mui/icons-material/Delete";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import { isEmpty } from "lodash";
import { useEffect, useRef, useState } from "react";
import { Journey, JourneyFields, labelObject } from "../../services/interface";
import { calculatePax, dataLabelValueMapper } from "../helper";

export const ExpandAdminTable = (props: {
  assignmentDetails: Journey;
  scheduleId: string;
}) => {
  const { assignmentDetails, scheduleId } = props;

  const saveJourney = useSaveJourney(scheduleId);
  const getJourney: Journey = {
    car: assignmentDetails.car,
    driver: assignmentDetails.driver,
    groups: assignmentDetails.groups,
    pax: assignmentDetails.groups ? calculatePax(assignmentDetails.groups) : 0,
    journeyId: assignmentDetails.journeyId,
  };
  const { retrieveCarList } = useCar();

  const [journey, setJourney] = useState(getJourney);

  const { data: carList, error, isLoading } = retrieveCarList;
  const { data: driverList } = useDriverList();
  const { data: groupsList } = useGroupsList(scheduleId);
  const deleteJourney = useDeleteJourney(scheduleId);
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
    } else {
      saveJourney.mutate(journey);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [journey]);

  return (
    <form>
      <Table size="small" aria-label="purchases">
        <TableHead>
          <TableRow sx={{ "& th": { color: "#64748b" } }}>
            <TableCell align="right">Car Plate Assignment</TableCell>
            <TableCell component="th" scope="row" align="right">
              Driver Assignment
            </TableCell>
            <TableCell align="right">Groups</TableCell>
            <TableCell align="right">Pax</TableCell>
            <TableCell align="right"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableCell sx={{ width: 300 }}>
            <AutoCompleteFieldDropdown
              name={JourneyFields.CAR}
              existingValue={assignmentDetails.car?.carPlateNumber}
              objectList={
                !isEmpty(carList) && carList
                  ? dataLabelValueMapper(carList)
                  : []
              }
              setContext={(value) =>
                setJourney({
                  ...journey,
                  car: mockCarplateList.find(
                    (car) => car.carPlateNumber === value.value
                  ),
                })
              }
            />
          </TableCell>
          <TableCell sx={{ width: 300 }}>
            <AutoCompleteFieldDropdown
              name={JourneyFields.DRIVER}
              objectList={driverList || []}
              existingValue={assignmentDetails.driver}
              setContext={(value: labelObject) =>
                setJourney({
                  ...journey,
                  driver: value.value,
                })
              }
            />
          </TableCell>
          <TableCell sx={{ width: 300 }}>
            <MultipleSelect
              name={JourneyFields.GROUPS}
              optionsList={
                groupsList?.map((item?: labelObject) => item?.label || "") || []
              }
              setContext={(value: string[]) => {
                const groups =
                  value.map((value) =>
                    mockGroupList.find(
                      (group) => group.groupid === value.split(" - ")[0]
                    )
                  ) || [];
                setJourney({
                  ...journey,
                  groups,
                  pax: calculatePax(groups),
                });
              }}
            />
          </TableCell>
          <TableCell width="80px">
            <input
              name={JourneyFields.PAX}
              type="text"
              id="passenger_pax"
              className="w-full text-right"
              placeholder={`${journey.pax}/${journey.car?.maxPax || 0}`}
              disabled
            />
          </TableCell>
          <TableCell width="40px">
            <DeleteIcon
              onClick={() =>
                deleteJourney.mutate(assignmentDetails.journeyId || "")
              }
            />
          </TableCell>
        </TableBody>
      </Table>
    </form>
  );
};
