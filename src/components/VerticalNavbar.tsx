import {
  Facebook,
  GitHub,
  Instagram,
  LinkedIn,
  Menu,
  WorkOutline,
  Person4Outlined,
  Apps,
  HomeOutlined,
} from "@mui/icons-material";
import {
  Box,
  Drawer,
  List,
  ListItemButton,
  IconButton,
  Typography,
  ListItem,
} from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/Global.css";

export default function Hello() {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const navigate = useNavigate();

  return (
    <Box>
      <Box
        sx={{
          height: "100%",
          width: "60px",
          position: "fixed",
          bgcolor: "primary.dark",
          color: "white",
          textAlign: "center",
          boxShadow: 3,
        }}
        onMouseOver={() => setOpen(true)}
      >
        <Menu
          sx={{
            marginTop: "15px",
            fontSize: 40,
          }}
        />
      </Box>
      <Drawer
        open={open}
        onClose={handleClose}
        onMouseLeave={handleClose}
        sx={{
          width: 240,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: 240,
            boxSizing: "border-box",
          },
        }}
      >
        <Box
          sx={{
            width: "100%",
            height: "100%",
            backgroundColor: "primary.dark",
            color: "white",
            textAlign: "center",
          }}
          onMouseLeave={handleClose}
        >
          <Box
            sx={{
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <List>
              <ListItem>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignContent: "center",
                    justifyContent: "center",
                  }}
                >
                  <img
                    className="profile-pic"
                    alt="profile"
                    src={require("../assets/profile.png")}
                  ></img>
                  <Typography margin="auto" variant="h5">
                    Dylan Spencer
                  </Typography>
                </Box>
              </ListItem>
              <ListItemButton onClick={() => navigate("/")}>
                <HomeOutlined fontSize="large" />
                <Typography marginLeft="10px" variant="h5">
                  Home
                </Typography>
              </ListItemButton>
              <ListItemButton onClick={() => navigate("/about")}>
                <Person4Outlined fontSize="large" />
                <Typography marginLeft="10px" variant="h5">
                  About Me
                </Typography>
              </ListItemButton>
              <ListItemButton onClick={() => navigate("/history")}>
                <WorkOutline fontSize="large" />
                <Typography marginLeft="10px" variant="h5">
                  Work History
                </Typography>
              </ListItemButton>
              <ListItemButton onClick={() => navigate("/projects")}>
                <Apps fontSize="large" />
                <Typography marginLeft="10px" variant="h5">
                  Projects
                </Typography>
              </ListItemButton>
            </List>
            <List>
              <IconButton
                onClick={() => {
                  window.open(
                    "https://www.facebook.com/dylan.spencer.524",
                    "_blank"
                  );
                }}
              >
                <Facebook sx={{ color: "white" }} fontSize="large" />
              </IconButton>
              <IconButton
                onClick={() => {
                  window.open(
                    "https://www.instagram.com/dyl.of.pickles/",
                    "_blank"
                  );
                }}
              >
                <Instagram sx={{ color: "white" }} fontSize="large" />
              </IconButton>
              <IconButton
                onClick={() => {
                  window.open(
                    "https://www.linkedin.com/in/dylan-spencer-550003248/",
                    "_blank"
                  );
                }}
              >
                <LinkedIn sx={{ color: "white" }} fontSize="large" />
              </IconButton>
              <IconButton
                onClick={() => {
                  window.open("https://github.com/Dylando22", "_blank");
                }}
              >
                <GitHub sx={{ color: "white" }} fontSize="large" />
              </IconButton>
            </List>
          </Box>
        </Box>
      </Drawer>
    </Box>
  );
}
