import { ModeNight, LightMode } from "@mui/icons-material";
import { Box, Switch, Typography } from "@mui/material";
import React from "react";
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
  const handleActiveChange = (idx: number) => {
    let temp = [false, false, false, false];
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
            onChange={(e) => {
              setMode(mode === "light" ? "dark" : "light");
            }}
          ></Switch>
        </Box>
      </Box>
    </Box>
  );
}
