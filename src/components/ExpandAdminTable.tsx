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
import { useEffect, useState } from "react";
import {
  Car,
  dataLabelValueMapper,
  driverMapper,
  passengerMapper,
} from "./helper";
import { group, journeyAssignmentPayload, labelObject } from "./interface";

type Journey = {
  car?: Car;
  driver?: string;
  groups?: group[];
  pax?: number;
};

export const ExpandAdminTable = (props: {
  assignmentDetails: journeyAssignmentPayload;
}) => {
  const { assignmentDetails } = props;
  const [carplateList, setCarplateList] = useState<any[]>([]);
  const [groupList, setGroupList] = useState<any[]>([]);
  const [driverList, setDriverList] = useState<any[]>([]);
  const [journey, setJourney] = useState({
    car: assignmentDetails.car,
    driver: assignmentDetails.driver,
    groups: assignmentDetails.groups,
    pax: assignmentDetails.groupPax,
  });

  const config = {
    headers: {
      "content-type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
  };

  useEffect(() => {
    axios
      .get("/carList")
      .then((res) => {
        console.log(res);
        setCarplateList(res.data);
      })
      .catch((e) => {
        console.log(e);
        setCarplateList(dataLabelValueMapper(mockCarplateList));
      });
  }, []);

  useEffect(() => {
    axios
      .get("/driverList")
      .then((res) => {
        console.log(res);
        setDriverList(res.data);
      })
      .catch((e) => {
        console.log(e);
        setDriverList(driverMapper(mockDriverList));
      });
  }, []);

  useEffect(() => {
    axios
      .get("/groupsList")
      .then((res) => {
        console.log(res);
        setGroupList(res.data);
      })
      .catch((e) => {
        console.log(e);
        setGroupList(passengerMapper(mockGroupList));
      });
  }, []);

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

  useEffect(() => {
    setJourney({
      ...journey,
      pax:
        journey.groups?.reduce((prev, curr) => prev + (curr?.pax || 0), 0) || 0,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [journey.groups]);

  useEffect(() => {
    handleSave(journey);
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
