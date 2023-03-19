import { mockCarplateList } from "@/pages/api/mockData/mockCarplateList";
import { mockDriverList } from "@/pages/api/mockData/mockDriverList";
import { mockGroupList } from "@/pages/api/mockData/mockGroupList";
import { AutoCompleteFieldDropdown } from "@/utils/AutoCompleteFieldDropdown";
import MultipleSelect from "@/utils/MultiSelect";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import axios from "axios";
import { useEffect, useRef, useState } from "react";
import {
  Car,
  dataLabelValueMapper,
  driverMapper,
  passengerMapper,
} from "./helper";
import { group, journeyAssignmentPayload, labelObject } from "./interface";
import { useQuery } from "@tanstack/react-query";

type Journey = {
  car?: Car;
  driver?: string;
  groups?: group[];
  pax?: number;
};

const calculatePax = (groups: group[]) =>
  groups.reduce((prev, curr) => prev + (curr?.pax || 0), 0) || 0;

const getCarList = async () =>
  await axios
    .get("/carList")
    .then((res) => res.data)
    .catch(() => dataLabelValueMapper(mockCarplateList));

const useCarList = () => {
  return useQuery(["carList"], getCarList);
};

const getDriverList = async () =>
  await axios
    .get("/driverList")
    .then((res) => res.data)
    .catch(() => driverMapper(mockDriverList));

const useDriverList = () => {
  return useQuery(["driverList"], getDriverList);
};

const getGroupsList = async (scheduleId: string) =>
  await axios
    .get(`/groupsList?scheduleId=${scheduleId}`)
    .then((res) => res.data)
    .catch(() => passengerMapper(mockGroupList));

const useGroupsList = (scheduleId: string) => {
  return useQuery(["groupsList", scheduleId], () => getGroupsList(scheduleId));
};

export const ExpandAdminTable = (props: {
  assignmentDetails: journeyAssignmentPayload;
  scheduleId: string;
}) => {
  const { assignmentDetails, scheduleId } = props;
  const getJourney = {
    car: assignmentDetails.car,
    driver: assignmentDetails.driver,
    groups: assignmentDetails.groups,
    pax: assignmentDetails.groups ? calculatePax(assignmentDetails.groups) : 0,
  };

  const [journey, setJourney] = useState(getJourney);

  const config = {
    headers: {
      "content-type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
  };

  const { data: carList, error, isLoading } = useCarList();
  const { data: driverList } = useDriverList();
  const { data: groupsList } = useGroupsList(scheduleId);

  const handleSave = async (journey: Journey) => {
    await axios
      .put(`/journey/${assignmentDetails.journeyId}`, journey, config)
      .then((res) => {
        console.log(res);
        console.log("save", journey);
      })
      .catch((e) => {
        console.log(e);
        console.log("save", journey);
      });
  };

  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      console.log("first");
      isFirstRender.current = false;
    } else {
      handleSave(journey);
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
          </TableRow>
        </TableHead>
        <TableBody>
          <TableCell sx={{ width: 300 }}>
            <AutoCompleteFieldDropdown
              name="car"
              objectList={carList}
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
              name="driver"
              objectList={driverList}
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
              name="groups"
              optionsList={
                groupsList?.map((item: any) => item.label || "") || []
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
              name="pax"
              type="text"
              id="passenger_pax"
              className="w-full text-right"
              placeholder={`${journey.pax}/${journey.car?.pax || 0}`}
              disabled
            />
          </TableCell>
        </TableBody>
      </Table>
    </form>
  );
};
