import {
  Avatar,
  Card,
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
    <Card
      sx={{
        margin: "auto",
        backgroundColor: "secondary.main",
        borderRadius: "15px",
        width: { xs: "90%", sm: "85%", md: "75%" },
        // width: "75%",
      }}
    >
      <CardHeader
        titleTypographyProps={{ fontSize: 28, width: "90%" }}
        title={location}
        subheaderTypographyProps={{ color: "lightgrey" }}
        subheader={dateRange}
        sx={{
          color: "common.white",
          bgcolor: "primary.main",
          width: "100%",
          borderTopRightRadius: "5px",
          borderTopLeftRadius: "5px",
        }}
        avatar={<Avatar sx={{ width: 75, height: 75 }} src={image} />}
      />
      <CardContent
        sx={{
          margin: "auto",
          width: "90%",
        }}
      >
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
    </Card>
  );
}
