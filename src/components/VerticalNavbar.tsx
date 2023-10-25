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
  MailOutline,
  LightMode,
  ModeNight,
  Close,
  Message,
  Article,
} from "@mui/icons-material";
import {
  Box,
  Drawer,
  List,
  ListItemButton,
  IconButton,
  Typography,
  ListItem,
  Switch,
  Modal,
  ListItemIcon,
} from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/Global.css";

interface Props {
  mode: string;
  setMode: Function;
  activeBar: boolean[];
  setActiveBar: Function;
}

export default function Hello({
  mode,
  setMode,
  activeBar,
  setActiveBar,
}: Props) {
  const [open, setOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleActiveChange = (idx: number) => {
    let temp = [false, false, false, false];
    temp[idx] = true;
    setActiveBar(temp);
  };

  const navigate = useNavigate();

  return (
    <Box
      sx={{
        display: { xs: "flex", sm: "none" },
      }}
    >
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
              <ListItemButton
                sx={{
                  ":hover": {
                    color: "random.activeLink",
                  },
                  color: activeBar[0]
                    ? "random.activeLink"
                    : "random.unactiveLink",
                }}
                onClick={() => {
                  navigate("/");
                  handleActiveChange(0);
                }}
              >
                <HomeOutlined fontSize="large" />
                <Typography marginLeft="10px" variant="h5">
                  Home
                </Typography>
              </ListItemButton>
              <ListItemButton
                sx={{
                  ":hover": {
                    color: "random.activeLink",
                  },
                  color: activeBar[1]
                    ? "random.activeLink"
                    : "random.unactiveLink",
                }}
                onClick={() => {
                  navigate("/about");
                  handleActiveChange(1);
                }}
              >
                <Person4Outlined fontSize="large" />
                <Typography marginLeft="10px" variant="h5">
                  About Me
                </Typography>
              </ListItemButton>
              <ListItemButton
                sx={{
                  ":hover": {
                    color: "random.activeLink",
                  },
                  color: activeBar[2]
                    ? "random.activeLink"
                    : "random.unactiveLink",
                }}
                onClick={() => {
                  navigate("/history");
                  handleActiveChange(2);
                }}
              >
                <WorkOutline fontSize="large" />
                <Typography marginLeft="10px" variant="h5">
                  Work History
                </Typography>
              </ListItemButton>
              <ListItemButton
                sx={{
                  ":hover": {
                    color: "random.activeLink",
                  },
                  color: activeBar[3]
                    ? "random.activeLink"
                    : "random.unactiveLink",
                }}
                onClick={() => {
                  navigate("/projects");
                  handleActiveChange(3);
                }}
              >
                <Apps fontSize="large" />
                <Typography marginLeft="10px" variant="h5">
                  Projects
                </Typography>
              </ListItemButton>
              <ListItemButton
                sx={{
                  ":hover": {
                    color: "random.activeLink",
                  },
                  color: "random.unactiveLink",
                }}
                onClick={() => setContactOpen(true)}
              >
                <MailOutline fontSize="large" />
                <Typography marginLeft="10px" variant="h5">
                  Contact Me
                </Typography>
              </ListItemButton>
              <ListItem>
                <Box
                  sx={{
                    display: "flex",
                  }}
                >
                  {mode === "light" ? (
                    <LightMode
                      sx={{
                        fontSize: { xs: 30, sm: 40 },
                      }}
                    />
                  ) : (
                    <ModeNight
                      sx={{
                        fontSize: { xs: 30, sm: 40 },
                      }}
                    />
                  )}
                  <Switch
                    sx={{ marginLeft: "5px" }}
                    checked={mode === "light" ? false : true}
                    color="secondary"
                    onChange={(e) => {
                      setMode(mode === "light" ? "dark" : "light");
                    }}
                  ></Switch>
                </Box>
              </ListItem>
            </List>
            <List
              sx={{
                marginBottom: "5px",
              }}
            >
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

      <Modal
        sx={{
          display: "flex",
          justifyContent: "center",
          marginTop: "15px",
          borderRadius: "15px",
        }}
        open={contactOpen}
        onClose={() => setContactOpen(false)}
      >
        <Box
          sx={{
            width: "300px",
            borderRadius: "15px",
            height: "fit-content",
            marginBottom: "50px",
            backgroundColor: "background.default",
            color: "common.black",
            padding: "30px",
            display: "flex",
            flexDirection: "column",
            overflowX: "scroll",
          }}
        >
          <Box
            sx={{
              display: "flex",
              margin: "10px",
              justifyContent: "space-between",
            }}
          >
            <Typography color="common.black" variant="h4">
              Contact
            </Typography>
            <IconButton onClick={() => setContactOpen(false)}>
              <Close color="error" />
            </IconButton>
          </Box>
          <List>
            <ListItemButton
              onClick={() => {
                window.location.href =
                  "mailto:dyl2elite@gmail.com?subject=Website%20&body=Hey%20Dylan%2C%20I%20saw%20your%20website%20and%20I%20was%20wondering%3F%3F%3F";
              }}
            >
              <ListItemIcon>
                <MailOutline />
              </ListItemIcon>
              <Typography>dyl2elite@gmail.com</Typography>
            </ListItemButton>
            {/* <ListItem>
              <ListItemIcon>
                <Phone />
              </ListItemIcon>
              <Typography>Phone: &#40;123&#41; 456-7899 </Typography>
            </ListItem> */}
            <ListItemButton
              onClick={() => {
                window.open("https://m.me/1826213450", "__blank");
              }}
            >
              <ListItemIcon>
                <Message />
              </ListItemIcon>
              <Typography>Message</Typography>
            </ListItemButton>
            <a download="dylan_spencer.pdf" href="./media/resumeNew.pdf">
              <ListItemButton>
                <ListItemIcon>
                  <Article />
                </ListItemIcon>
                <Typography>Download Resume</Typography>
              </ListItemButton>
            </a>
          </List>
        </Box>
      </Modal>
    </Box>
  );
}
