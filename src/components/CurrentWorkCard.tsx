import {
  Avatar,
  Box,
  CardContent,
  CardHeader,
  Typography,
} from "@mui/material";
import React from "react";

interface Props {
  location: string;
  position: string;
  content: string;
  dateRange: string;
  responsibilities: string[];
  image: string;
}

export default function CurrentWorkCard({
  location,
  position,
  content,
  dateRange,
  responsibilities,
  image,
}: Props) {
  return (
    <Box
      sx={{
        margin: "auto",
        marginTop: "25px",
        padding: "10px",
        borderRadius: "15px",
        width: { xs: "300px", sm: "450px", md: "750px" },
      }}
    >
      <CardHeader
        titleTypographyProps={{ fontSize: 28 }}
        title={location}
        subheaderTypographyProps={{ color: "lightgrey" }}
        subheader={dateRange}
        sx={{
          color: "common.white",
          margin: "0px",
          bgcolor: "primary.main",
          width: "100%",
          borderTopRightRadius: "5px",
          borderTopLeftRadius: "5px",
        }}
        avatar={<Avatar sx={{ width: 75, height: 75 }} src={image} />}
      />
      <CardContent sx={{ backgroundColor: "secondary.main", width: "100%" }}>
        <Typography marginTop="10px" variant="h5">
          {position}
        </Typography>
        <Typography marginTop="20px">{content}</Typography>
        <Typography marginTop="20px" variant="h6">
          Responsibilities:
        </Typography>
        <ul>
          {responsibilities.map((item) => (
            <li>
              <Typography>{item}</Typography>
            </li>
          ))}
        </ul>
      </CardContent>
    </Box>
  );
}
