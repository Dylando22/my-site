import {
  Card,
  CardContent,
  CardHeader,
  Collapse,
  List,
  ListItemText,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

interface Props {
  location: string;
  position: string;
  content: string;
  dateRange: string;
  additionalDetails: string[];
}

export default function WorkHistoryCard({
  location,
  position,
  content,
  dateRange,
  additionalDetails,
}: Props) {
  const [open, setOpen] = useState(false);

  return (
    <Card
      sx={{
        margin: "auto",
        marginTop: "25px",
        padding: "0px",
        borderRadius: "15px",
        width: { xs: "300px", sm: "450px", md: "750px" },
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
      <CardContent
        sx={{
          backgroundColor: "random.cardBackground",
        }}
      >
        <Typography marginTop="10px" variant="h5">
          {position}
        </Typography>
        <Typography marginTop="20px">{content}</Typography>
        {additionalDetails.length > 0 && (
          <>
            <Typography
              onClick={() => setOpen(!open)}
              textAlign="center"
              marginTop="10px"
              color="primary.dark"
              sx={{
                cursor: "pointer",
              }}
            >
              Additional Details
            </Typography>
            <Collapse in={open}>
              <List
                sx={{ listStyleType: "disc", margin: "auto", width: "75%" }}
              >
                {additionalDetails.map((item) => (
                  <ListItemText sx={{ display: "list-item" }}>
                    {item}
                  </ListItemText>
                ))}
              </List>
            </Collapse>
          </>
        )}
      </CardContent>
    </Card>
  );
}
