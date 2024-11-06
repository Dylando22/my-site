import {
  ModeNight,
  LightMode,
  MailOutline,
  Close,
  Message,
  Article,
} from "@mui/icons-material";
import {
  Box,
  IconButton,
  Switch,
  Typography,
  List,
  ListItemButton,
  Modal,
  ListItemIcon,
} from "@mui/material";
import { useState } from "react";
import "../css/Global.css";
import HeaderLink from "./HeaderLink";
import Logo from "../assets/dyl_logo_1.png";

interface Props {
  mode: string;
  setMode: Function;
  activeBar: boolean[];
  setActiveBar: Function;
}

export default function Header({
  mode,
  setMode,
  activeBar,
  setActiveBar,
}: Props) {
  const [contactOpen, setContactOpen] = useState(false);

  const handleActiveChange = (idx: number) => {
    const temp = [false, false, false, false];
    temp[idx] = true;
    setActiveBar(temp);
  };

  return (
    <Box
      sx={{
        width: "100%",
        display: { xs: "none", sm: "flex" },
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "primary.dark",
        paddingTop: "10px",
        paddingBottom: "10px",
        color: "white",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <img src={Logo} alt="Dylan Spencer Logo" className="header-logo"></img>

        <Typography
          sx={{
            // fontSize: { xs: 30, sm: 50 },
            margin: "5px",
            display: { xs: "none", md: "block" },
          }}
          variant="h5"
        >
          Dylan Spencer
        </Typography>
      </Box>
      <Box
        display="flex"
        sx={{
          marginRight: "15px",
        }}
      >
        <HeaderLink
          onClick={() => handleActiveChange(0)}
          to="/"
          active={activeBar[0]}
          title="Home"
        />
        <HeaderLink
          onClick={() => handleActiveChange(1)}
          to="/about"
          title="About Me"
          active={activeBar[1]}
        />
        <HeaderLink
          onClick={() => handleActiveChange(2)}
          to="/history"
          title="Work History"
          active={activeBar[2]}
        />
        <HeaderLink
          onClick={() => handleActiveChange(3)}
          to="/projects"
          title="Projects"
          active={activeBar[3]}
        />
        <IconButton
          sx={{ color: "white" }}
          onClick={() => setContactOpen(true)}
        >
          <MailOutline />
        </IconButton>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          {mode === "light" ? (
            <LightMode
              sx={{
                fontSize: 25,
              }}
            />
          ) : (
            <ModeNight
              sx={{
                fontSize: 25,
              }}
            />
          )}
          <Switch
            sx={{ marginLeft: "5px" }}
            checked={mode === "light" ? false : true}
            color="secondary"
            onChange={() => {
              setMode(mode === "light" ? "dark" : "light");
            }}
          ></Switch>
        </Box>
      </Box>

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
