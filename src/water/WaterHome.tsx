import React, { useEffect, useState } from "react";
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
  styled,
} from "@mui/material";
import TableCell from "@mui/material/TableCell";

// Taken from MUI tables section
const StyledTableCellHead = styled(TableCell)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.common.white,
  fontSize: 16,
}));

const StyledTableCellBody = styled(TableCell)(({ theme }) => ({
  fontSize: 14,
}));

// Taken from MUI tables section
const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

interface RiverData {
  depth: number;
  time: string;
}

interface BigData {
  depth: number;
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
        let le = data.value.timeSeries[0].values[0].value.length;
        let latestData = data.value.timeSeries[0].values[0].value[le - 1];
        let d = new Date(latestData.dateTime);
        setLatestData({
          depth: latestData.value,
          time: d.toDateString() + " at " + d.toLocaleTimeString(),
        });
        setCurrentRiver(data.value.timeSeries[0].sourceInfo.siteName);
        let tempArray: BigData[] = [];
        for (let i = le - 1; i >= 0; i -= 48) {
          let tempData = data.value.timeSeries[0].values[0].value[i];
          let depth = tempData.value;
          let d = new Date(tempData.dateTime);
          let time = d.toLocaleTimeString();
          let date = d.toLocaleDateString();
          tempArray.push({
            depth,
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
        let le = data.value.timeSeries[0].values[0].value.length;
        let latestData = data.value.timeSeries[0].values[0].value[le - 1];
        let d = new Date(latestData.dateTime);
        setLoganData({
          depth: latestData.value,
          time: d.toDateString() + " at " + d.toLocaleTimeString(),
        });
        let tempArray: BigData[] = [];
        for (let i = le - 1; i >= 0; i -= 48) {
          let tempData = data.value.timeSeries[0].values[0].value[i];
          let depth = tempData.value;
          let d = new Date(tempData.dateTime);
          let time = d.toLocaleTimeString();
          let date = d.toLocaleDateString();
          tempArray.push({
            depth,
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
        let le = data.value.timeSeries[0].values[0].value.length;
        let latestData = data.value.timeSeries[0].values[0].value[le - 1];
        let d = new Date(latestData.dateTime);
        setHyrumData({
          depth: latestData.value,
          time: d.toDateString() + " at " + d.toLocaleTimeString(),
        });
        let tempArray: BigData[] = [];
        for (let i = le - 1; i >= 0; i -= 48) {
          let tempData = data.value.timeSeries[0].values[0].value[i];
          let depth = tempData.value;
          let d = new Date(tempData.dateTime);
          let time = d.toLocaleTimeString();
          let date = d.toLocaleDateString();
          tempArray.push({
            depth,
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
        Water Level Statistics Finder
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
          Enter in site Id for the body of water and see the latest depths. All
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
          <Typography>{latestData?.depth} ft sq</Typography>
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
                  <StyledTableCellHead>Date</StyledTableCellHead>
                  <StyledTableCellHead>Time</StyledTableCellHead>
                  <StyledTableCellHead>Depth</StyledTableCellHead>
                </TableRow>
              </TableHead>
              <TableBody>
                {currentBigData.map((entry) => (
                  <StyledTableRow>
                    <StyledTableCellBody>{entry.date}</StyledTableCellBody>
                    <StyledTableCellBody>{entry.time}</StyledTableCellBody>
                    <StyledTableCellBody>{entry.depth}</StyledTableCellBody>
                  </StyledTableRow>
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
        <Typography>{loganData?.depth} ft Sq</Typography>
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
                <StyledTableCellHead>Date</StyledTableCellHead>
                <StyledTableCellHead>Time</StyledTableCellHead>
                <StyledTableCellHead>Depth</StyledTableCellHead>
              </TableRow>
            </TableHead>
            <TableBody>
              {loganBigData.map((entry) => (
                <StyledTableRow>
                  <StyledTableCellBody>{entry.date}</StyledTableCellBody>
                  <StyledTableCellBody>{entry.time}</StyledTableCellBody>
                  <StyledTableCellBody>{entry.depth}</StyledTableCellBody>
                </StyledTableRow>
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
        <Typography>{hyrumData?.depth} ft Sq</Typography>
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
                <StyledTableCellHead>Date</StyledTableCellHead>
                <StyledTableCellHead>Time</StyledTableCellHead>
                <StyledTableCellHead>Depth</StyledTableCellHead>
              </TableRow>
            </TableHead>
            <TableBody>
              {hyrumBigData.map((entry) => (
                <StyledTableRow>
                  <StyledTableCellBody>{entry.date}</StyledTableCellBody>
                  <StyledTableCellBody>{entry.time}</StyledTableCellBody>
                  <StyledTableCellBody>{entry.depth}</StyledTableCellBody>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
}
