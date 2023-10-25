import { Facebook, GitHub, Instagram, LinkedIn } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { Box } from "@mui/system";
import Logo from "../assets/dyl_logo_1.png";

export default function Footer() {
  return (
    <Box
      sx={{
        width: "100%",
        height: "180px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "primary.dark",
        color: "white",
      }}
    >
      <Box
        sx={{
          display: { xs: "flex", sm: "none" },
        }}
      >
        <img src={Logo} alt="Dylan Spencer Logo" className="logo-pic"></img>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <IconButton
          onClick={() => {
            window.open("https://www.facebook.com/dylan.spencer.524", "_blank");
          }}
        >
          <Facebook
            fontSize="large"
            sx={{ marginRight: "10px", marginLeft: "10px", color: "white" }}
          />
        </IconButton>
        <IconButton
          onClick={() => {
            window.open("https://www.instagram.com/dyl.of.pickles/", "_blank");
          }}
        >
          <Instagram
            fontSize="large"
            sx={{ marginRight: "10px", marginLeft: "10px", color: "white" }}
          />
        </IconButton>
        <Box
          sx={{
            display: { xs: "none", sm: "flex" },
          }}
        >
          <img src={Logo} alt="Dylan Spencer Logo" className="logo-pic"></img>
        </Box>
        <IconButton
          onClick={() => {
            window.open(
              "https://www.linkedin.com/in/dylan-spencer-550003248/",
              "_blank"
            );
          }}
        >
          <LinkedIn
            fontSize="large"
            sx={{ marginRight: "10px", marginLeft: "10px", color: "white" }}
          />
        </IconButton>
        <IconButton
          onClick={() => {
            window.open("https://github.com/Dylando22", "_blank");
          }}
        >
          <GitHub
            fontSize="large"
            sx={{ marginRight: "10px", marginLeft: "10px", color: "white" }}
          />
        </IconButton>
      </Box>
    </Box>
  );
}
