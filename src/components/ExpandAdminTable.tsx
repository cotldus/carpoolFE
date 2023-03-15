import { mockCarplateList } from "@/pages/api/mockData/mockCarplateList";
import { mockDriverList } from "@/pages/api/mockData/mockDriverList";
import { mockGroupList } from "@/pages/api/mockData/mockGroupList";
import { AutoCompleteFieldDropdown } from "@/utils/AutoCompleteFieldDropdown";
import MultipleSelect from "@/utils/MultiSelect";
import {
  Table, TableBody,
  TableCell, TableHead, TableRow
} from "@mui/material";
import { useState } from "react";
import { dataLabelValueMapper, driverMapper, passengerMapper } from "./helper";
import { journeyAssignmentPayload } from "./interface";

export const ExpandAdminTable = (props: {
  assignmentDetails: journeyAssignmentPayload;
}) => {
  const { assignmentDetails } = props;
  const [carplateList, setCarplateList] = useState(
    dataLabelValueMapper(mockCarplateList)
  );
  const [groupList, setGroupList] = useState(passengerMapper(mockGroupList));
  const [driverList, setDriverList] = useState(driverMapper(mockDriverList));
  const [journey, setJourney] = useState({
    car: assignmentDetails.car,
    driver: assignmentDetails.driver,
    groups: assignmentDetails.groups,
    pax: assignmentDetails.groupPax,
  });

  return (
    <Table size="small" aria-label="purchases">
      <TableHead>
        <TableRow sx={{ "& th": { color: "#64748b" } }}>
          <TableCell align="right">Car Plate Assignment</TableCell>
          <TableCell component="th" scope="row" align="right">
            Driver Assignment
          </TableCell>
          <TableCell align="right">Groups</TableCell>
          <TableCell align="right">Pax</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        <TableCell sx={{ width: 300 }}>
          <AutoCompleteFieldDropdown
            objectList={carplateList}
            existingValue={assignmentDetails.car?.name}
            setContext={(value) =>
              setJourney({
                ...journey,
                car: mockCarplateList.find((car) => car.name === value.value),
              })
            }
          />
        </TableCell>
        <TableCell sx={{ width: 300 }}>
          <AutoCompleteFieldDropdown
            objectList={driverList}
            existingValue={assignmentDetails.driver}
          />
        </TableCell>
        <TableCell sx={{ width: 300 }}>
          <MultipleSelect
            optionsList={groupList.map((item) => item.label || "")}
            setContext={(value: string[]) =>
              setJourney({
                ...journey,
                groups:
                  value.map((value) =>
                    mockGroupList.find(
                      (group) => group.groupid === value.split(" - ")[0]
                    )
                  ) || [],
              })
            }
          />
        </TableCell>
        <TableCell width="80px">
          <input
            type="text"
            id="passenger_pax"
            className="w-full text-right"
            placeholder={`${
              journey.groups?.reduce(
                (prev, curr) => prev + (curr?.pax || 0),
                0
              ) || 0
            }/${journey.car?.pax || 0}`}
            disabled
          />
        </TableCell>
      </TableBody>
    </Table>
  );
};
