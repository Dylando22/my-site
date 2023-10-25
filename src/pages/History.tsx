import { Box, Typography } from "@mui/material";
import React from "react";
import WorkHistoryCard from "../components/WorkHistoryCard";
import workHistoryData from "../data/workHistory";

export default function History() {
  return (
    <Box
      sx={{
        paddingBottom: "50px",
      }}
    >
      <Typography
        sx={{
          textAlign: "center",
          marginTop: "15px",
        }}
        variant="h2"
      >
        Work History
      </Typography>
      {workHistoryData.map((item) => (
        <WorkHistoryCard
          key={item.location}
          location={item.location}
          position={item.position}
          content={item.content}
          dateRange={item.dateRange}
          additionalDetails={item.additionalDetails}
        />
      ))}
    </Box>
  );
}
