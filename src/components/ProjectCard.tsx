import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

interface Props {
  path: string;
  title: string;
  image: string;
  description: string;
}

export default function ProjectCard({
  path,
  title,
  image,
  description,
}: Props) {
  const navigate = useNavigate();

  return (
    <Card
      key={title}
      sx={{ width: 300, height: 300, backgroundColor: "secondary.main" }}
    >
      <CardActionArea
        onClick={() => {
          path.startsWith("/") ? navigate(path) : window.open(path, "__blank");
        }}
      >
        <CardMedia
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: 150,
          }}
        >
          <img className="project-pic" alt={title} src={image}></img>
        </CardMedia>
        <CardContent
          sx={{
            padding: 0,
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              height: 150,
            }}
          >
            <Typography variant="caption" marginLeft="15px" marginRight="15px">
              {description}
            </Typography>
            <Typography
              display={"flex"}
              variant="h6"
              component="div"
              justifyContent={"center"}
              height={80}
              color={"common.white"}
              alignItems={"center"}
              bgcolor="primary.main"
            >
              {title}
            </Typography>
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
