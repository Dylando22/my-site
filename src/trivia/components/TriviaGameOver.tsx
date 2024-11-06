import { Box, Button, Typography } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";

function TriviaGameOver() {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        width: "auto",
        height: 350,
        margin: 25,
        padding: 15,
        textAlign: "center",
        justifyContent: "center",
      }}
    >
      <Typography
        variant="h3"
        sx={{
          backgroundColor: "primary.main",
          color: "common.white",
          borderRadius: "15px",
          margin: "50px",
        }}
      >
        Game Over
      </Typography>
      <Typography
        variant="h5"
        sx={{
          fontSize: 25,
          fontFamily: "monospace",
          justifyContent: "center",
          padding: "25px",
          margin: "10px",
          border: "solid",
          borderColor: "primary.main",
          backgroundColor: "black",
          color: "common.white",
        }}
      >
        {location.state.playerName} your Score is {location.state.Score} /{" "}
        {location.state.Total}
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          marginLeft: 1,
          marginRight: 1,
        }}
      >
        <Button
          variant="contained"
          sx={{ marginTop: 1 }}
          onClick={() => {
            navigate("/trivia-home");
          }}
        >
          Play Again?
        </Button>
      </Box>
    </Box>
  );
}

export default TriviaGameOver;
