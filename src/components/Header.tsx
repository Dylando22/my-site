import {
  ModeNight,
  LightMode,
  MailOutline,
  Close,
  // Phone,
  Message,
  Article,
} from "@mui/icons-material";
import {
  Box,
  IconButton,
  List,
  // ListItem,
  ListItemButton,
  ListItemIcon,
  Modal,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import "../css/Global.css";

interface Props {
  mode: string;
  setMode: Function;
}

export default function Header({ mode, setMode }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "secondary.main",
        paddingTop: "10px",
        paddingBottom: "10px",
      }}
    >
      <Typography
        sx={{
          fontSize: { xs: 30, sm: 50 },
          margin: "5px",
        }}
        variant="h2"
      >
        Dylan Spencer
      </Typography>
      <Box display="flex">
        <IconButton onClick={() => setOpen(true)}>
          <MailOutline
            sx={{
              fontSize: { xs: 30, sm: 40 },
            }}
          />
        </IconButton>
        {mode === "light" ? (
          <IconButton
            onClick={(e) => {
              setMode(mode === "light" ? "dark" : "light");
            }}
          >
            <LightMode
              sx={{
                fontSize: { xs: 30, sm: 40 },
              }}
            />
          </IconButton>
        ) : (
          <IconButton
            onClick={(e) => {
              setMode(mode === "light" ? "dark" : "light");
            }}
          >
            <ModeNight
              sx={{
                fontSize: { xs: 30, sm: 40 },
              }}
            />
          </IconButton>
        )}
      </Box>
      <Modal
        sx={{
          display: "flex",
          justifyContent: "center",
          marginTop: "15px",
          borderRadius: "15px",
        }}
        open={open}
        onClose={() => setOpen(false)}
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
            <IconButton onClick={() => setOpen(false)}>
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
            <a download="dylan_spencer.pdf" href="./media/resume.pdf">
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
