import * as React from "react";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { Button } from "@mui/material";
import { ExpandAdminTable } from "./ExpandAdminTable";
import { createData } from "./helper";
import { mockJourneyList } from "@/pages/api/mockData/mockJourneyList";
import { Queue } from "@mui/icons-material";
import axios from "axios";
import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query";

const getJourneyList = async (scheduleId: string) =>
  await axios
    .get(`/journeyList/?scheduleId=${scheduleId}`)
    .then((res) => res.data)
    .catch(
      () =>
        mockJourneyList.find((journey) => journey.scheduleId === scheduleId)
          ?.assignment
    );

const useJourneyList = (scheduleId: string) => {
  return useQuery({
    queryKey: ["journeyList", scheduleId],
    queryFn: () => getJourneyList(scheduleId),
  });
};

const addJourney = (scheduleId: string) => {
  axios
    .patch(`/new/journey/${scheduleId}`)
    .then((response) => response.data)
    .catch((e) => null);
  return Promise.resolve({
    data: Math.floor(Math.random() * 100).toString(),
    status: 200,
  });
};

const useAddJourney = (scheduleId: string) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: () => addJourney(scheduleId),
    onSuccess: (res) => {
      queryClient.setQueryData(
        ["journeyList", scheduleId],
        (journeyList: any) => {
          return [
            ...(journeyList as []),
            {
              driver: "",
              car: {
                name: "",
                pax: 0,
              },
              groups: [],
              journeyId: res.data,
            },
          ];
        }
      );
    },
  });
};

function Row(props: { row: ReturnType<typeof createData>; id: string }) {
  const { row, id: scheduleId } = props;
  const [open, setOpen] = React.useState(false);
  const addJourney = useAddJourney(scheduleId);
  const addNewAssignmentRow = async () => addJourney.mutate();

  const { data: journeyAssignment } = useJourneyList(scheduleId);

  return (
    <React.Fragment>
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
    </React.Fragment>
  );
}

const rows = mockJourneyList.map((item) =>
  createData(
    item.scheduleId,
    item.date,
    item.time,
    item.totalPax,
    item.pickup,
    item.dropoff,
    item.assignment
  )
);

export default function CollapsibleTable() {
  const headerData = ["Date", "Time", "Pickup", "Dropoff", ""];
  const [scheduleList, setScheduleList] = React.useState<any[]>([]);

  React.useEffect(() => {
    axios
      .get("/scheduleList")
      .then((res) => {
        console.log(res);
        setScheduleList(res.data);
      })
      .catch((e) => {
        console.log(e);
        setScheduleList(rows);
      });
  }, []);
  return (
    <form>
      <TableContainer
        component={Paper}
        sx={{ width: "90vw", overflow: "auto", maxWidth: "max-content" }}
      >
        <Table aria-label="collapsible table" sx={{ width: "max-content" }}>
          <TableHead sx={{ backgroundColor: "#111827" }}>
            <TableRow
              sx={{
                "& .MuiTableCell-root": { color: "white", fontWeight: 600 },
              }}
            >
              <TableCell />
              {headerData.map((title) => (
                <TableCell align="right" key={`${title}-title`}>
                  {title}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {scheduleList.map((row) => {
              console.log("row1", row);
              return (
                <Row
                  key={`${row.scheduleId}-journey`}
                  row={row}
                  id={row.scheduleId}
                />
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </form>
  );
}
