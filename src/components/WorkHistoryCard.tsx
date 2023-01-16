import { Card, CardContent, CardHeader, Typography } from "@mui/material";
import React from "react";

interface Props {
  location: string;
  position: string;
  content: string;
  dateRange: string;
}

export default function WorkHistoryCard({
  location,
  position,
  content,
  dateRange,
}: Props) {
  return (
    <Card
      sx={{
        margin: "auto",
        marginTop: "25px",
        padding: "10px",
        borderRadius: "15px",
        width: { xs: "350px", sm: "450px", md: "750px" },
      }}
    >
      <CardHeader
        title={location}
        subheaderTypographyProps={{ color: "lightgrey" }}
        subheader={dateRange}
        sx={{
          color: "common.white",
          margin: "0px",
          bgcolor: "primary.main",
        }}
      />
      <CardContent>
        <Typography marginTop="10px" variant="h5">
          Position: {position}
        </Typography>
        <Typography marginTop="20px">{content}</Typography>
      </CardContent>
    </Card>
  );
}
