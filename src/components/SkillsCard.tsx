import {
  Card,
  CardContent,
  CardHeader,
  List,
  ListItem,
  Typography,
} from "@mui/material";
import React from "react";

interface Props {
  title: string;
  list: string[];
}

export default function SkillsCard({ title, list }: Props) {
  return (
    <Card
      sx={{
        width: 250,
        minHeight: 300,
        backgroundColor: "secondary.main",
        margin: "auto",
        marginBottom: "25px",
      }}
    >
      <CardHeader
        title={title}
        sx={{
          color: "common.white",
          margin: "0px",
          bgcolor: "primary.main",
          textAlign: "center",
        }}
      />
      <CardContent>
        <List>
          {list.map((item, idx) => (
            <ListItem key={idx}>
              <Typography variant="overline">{item}</Typography>
            </ListItem>
          ))}
        </List>
      </CardContent>
    </Card>
  );
}
