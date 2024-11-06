import { useEffect, useState } from "react";
import {
  Box,
  Input,
  Table,
  TableBody,
  TableHead,
  TableContainer,
  TableRow,
  Typography,
  Card,
  Button,
} from "@mui/material";
import TableCell from "@mui/material/TableCell";

interface RiverData {
  flow: number;
  time: string;
}

interface BigData {
  flow: number;
  date: string;
  time: string;
}

export default function WaterHome() {
  const [latestData, setLatestData] = useState<RiverData>();
  const [currentNumber, setCurrentNumber] = useState("");
  const [currentRiver, setCurrentRiver] = useState("");
  const [currentBigData, setCurrentBigData] = useState<BigData[]>([]);

  const [loganData, setLoganData] = useState<RiverData>();
  const [hyrumData, setHyrumData] = useState<RiverData>();

  const [loganBigData, setLoganBigData] = useState<BigData[]>([]);
  const [hyrumBigData, setHyrumBigData] = useState<BigData[]>([]);

  useEffect(() => {
    fetchLoganRiver();
    fetchHyrumReserviour();
  }, []);

  const getWaterData = (num: string) => {
    fetch(
      `https://waterservices.usgs.gov/nwis/iv/?sites=${num}&parameterCd=00060&period=P30D&siteStatus=all&format=json`
    )
      .then((resp) => resp.json())
      .then((data) => {
        const le = data.value.timeSeries[0].values[0].value.length;
        const latestData = data.value.timeSeries[0].values[0].value[le - 1];
        const d = new Date(latestData.dateTime);
        setLatestData({
          flow: latestData.value,
          time: d.toDateString() + " at " + d.toLocaleTimeString(),
        });
        setCurrentRiver(data.value.timeSeries[0].sourceInfo.siteName);
        const tempArray: BigData[] = [];
        for (let i = le - 1; i >= 0; i -= 48) {
          const tempData = data.value.timeSeries[0].values[0].value[i];
          const flow = tempData.value;
          const d = new Date(tempData.dateTime);
          const time = d.toLocaleTimeString();
          const date = d.toLocaleDateString();
          tempArray.push({
            flow,
            time,
            date,
          });
        }
        setCurrentBigData(tempArray);
      });
  };

  const fetchLoganRiver = () => {
    fetch(
      `https://waterservices.usgs.gov/nwis/iv/?sites=10109000&parameterCd=00060&period=P30D&siteStatus=all&format=json`
    )
      .then((resp) => resp.json())
      .then((data) => {
        const le = data.value.timeSeries[0].values[0].value.length;
        const latestData = data.value.timeSeries[0].values[0].value[le - 1];
        const d = new Date(latestData.dateTime);
        setLoganData({
          flow: latestData.value,
          time: d.toDateString() + " at " + d.toLocaleTimeString(),
        });
        const tempArray: BigData[] = [];
        for (let i = le - 1; i >= 0; i -= 48) {
          const tempData = data.value.timeSeries[0].values[0].value[i];
          const flow = tempData.value;
          const d = new Date(tempData.dateTime);
          const time = d.toLocaleTimeString();
          const date = d.toLocaleDateString();
          tempArray.push({
            flow,
            time,
            date,
          });
        }
        setLoganBigData(tempArray);
      });
  };

  const fetchHyrumReserviour = () => {
    fetch(
      `https://waterservices.usgs.gov/nwis/iv/?sites=10113500&parameterCd=00060&period=P30D&siteStatus=all&format=json`
    )
      .then((resp) => resp.json())
      .then((data) => {
        const le = data.value.timeSeries[0].values[0].value.length;
        const latestData = data.value.timeSeries[0].values[0].value[le - 1];
        const d = new Date(latestData.dateTime);
        setHyrumData({
          flow: latestData.value,
          time: d.toDateString() + " at " + d.toLocaleTimeString(),
        });
        const tempArray: BigData[] = [];
        for (let i = le - 1; i >= 0; i -= 48) {
          const tempData = data.value.timeSeries[0].values[0].value[i];
          const flow = tempData.value;
          const d = new Date(tempData.dateTime);
          const time = d.toLocaleTimeString();
          const date = d.toLocaleDateString();
          tempArray.push({
            flow,
            time,
            date,
          });
        }
        setHyrumBigData(tempArray);
      });
  };

  return (
    <Box>
      <Typography marginLeft="10px" variant="h3">
        Water Flow Statistics Finder
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          margin: "auto",
          padding: "25px",
          justifyContent: "start",
        }}
      >
        <Typography>
          Enter in site Id for the body of water and see the latest flow. All
          data is provided by waterservices.usgu.gov
        </Typography>
        <Input
          placeholder="Id ( Ex. 10108400)"
          type="text"
          sx={{
            width: "250px",
            margin: "10px",
          }}
          value={currentNumber}
          onChange={(e) => {
            setCurrentNumber(e.target.value);
          }}
        />
        <Button
          variant="contained"
          sx={{
            width: "fit-content",
          }}
          onClick={() => getWaterData(currentNumber)}
        >
          Get Data
        </Button>
      </Box>
      {currentRiver !== "" && (
        <Box
          sx={{
            textAlign: "center",
          }}
        >
          <Typography variant="h4">{currentRiver}</Typography>
          <Typography>{latestData?.time}</Typography>
          <Typography>{latestData?.flow} ft&sup3;/s</Typography>
          <TableContainer
            component={Card}
            sx={{
              margin: 1,
              width: { xs: 300, sm: 500, md: "auto" },
            }}
          >
            <Table aria-label="customized table">
              <TableHead>
                <TableRow>
                  <TableCell sx={{ fontSize: 14 }}>Date</TableCell>
                  <TableCell sx={{ fontSize: 14 }}>Time</TableCell>
                  <TableCell sx={{ fontSize: 14 }}>Flow</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {currentBigData.map((entry) => (
                  <TableRow>
                    <TableCell sx={{ fontSize: 14 }}>{entry.date}</TableCell>
                    <TableCell sx={{ fontSize: 14 }}>{entry.time}</TableCell>
                    <TableCell sx={{ fontSize: 14 }}>
                      {entry.flow} ft&sup3;/s
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      )}
      <Box
        sx={{
          textAlign: "center",
        }}
      >
        <Typography variant="h4">Logan River</Typography>
        <Typography>{loganData?.time}</Typography>
        <Typography>{loganData?.flow} ft&sup3;/s</Typography>
        <TableContainer
          component={Card}
          sx={{
            margin: 1,
            width: { xs: 300, sm: 500, md: "auto" },
          }}
        >
          <Table aria-label="customized table">
            <TableHead>
              <TableRow>
                <TableCell
                  sx={{
                    backgroundColor: "primary.main",
                    color: "common.white",
                    fontSize: 16,
                  }}
                >
                  Date
                </TableCell>
                <TableCell
                  sx={{
                    backgroundColor: "primary.main",
                    color: "common.white",
                    fontSize: 16,
                  }}
                >
                  Time
                </TableCell>
                <TableCell
                  sx={{
                    backgroundColor: "primary.main",
                    color: "common.white",
                    fontSize: 16,
                  }}
                >
                  Flow
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {loganBigData.map((entry) => (
                <TableRow>
                  <TableCell sx={{ fontSize: 14 }}>{entry.date}</TableCell>
                  <TableCell sx={{ fontSize: 14 }}>{entry.time}</TableCell>
                  <TableCell sx={{ fontSize: 14 }}>
                    {entry.flow} ft&sup3;/s
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
      <Box
        sx={{
          textAlign: "center",
        }}
      >
        <Typography variant="h4">Hyrum Rserviour</Typography>
        <Typography>{hyrumData?.time}</Typography>
        <Typography>{hyrumData?.flow} ft&sup3;/s</Typography>
        <TableContainer
          component={Card}
          sx={{
            margin: 1,
            width: { xs: 300, sm: 500, md: "auto" },
          }}
        >
          <Table aria-label="customized table">
            <TableHead>
              <TableRow>
                <TableCell
                  sx={{
                    backgroundColor: "primary.main",
                    color: "common.white",
                    fontSize: 16,
                  }}
                >
                  Date
                </TableCell>
                <TableCell
                  sx={{
                    backgroundColor: "primary.main",
                    color: "common.white",
                    fontSize: 16,
                  }}
                >
                  Time
                </TableCell>
                <TableCell
                  sx={{
                    backgroundColor: "primary.main",
                    color: "common.white",
                    fontSize: 16,
                  }}
                >
                  Flow
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {hyrumBigData.map((entry) => (
                <TableRow>
                  <TableCell sx={{ fontSize: 14 }}>{entry.date}</TableCell>
                  <TableCell sx={{ fontSize: 14 }}>{entry.time}</TableCell>
                  <TableCell sx={{ fontSize: 14 }}>
                    {entry.flow} ft&sup3;/s
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
}
