import { Box, Card, CardActionArea, Typography } from "@mui/material";
import React, { useState } from "react";
import Pic from "../assets/family2.jpg";
import "../css/Global.css";

export default function About() {
  const [guess, setGuess] = useState(0);
  const [answer, setAnswer] = useState("Click to guess the lie below");
  const [hasGuessed, setHasGuessed] = useState(false);

  const checkGuess = (id: number) => {
    if (!hasGuessed) {
      switch (id) {
        case 1:
          setGuess(1);
          setAnswer("Correct, I got married at 21");
          setHasGuessed(true);
          break;
        case 2:
          setGuess(2);
          setAnswer("Incorrect, refresh and try again");
          setHasGuessed(true);
          break;
        case 3:
          setGuess(3);
          setAnswer("Incorrect, refresh and try again");
          setHasGuessed(true);
          break;
      }
    }
  };

  return (
    <Box>
      <Typography
        sx={{
          textAlign: "center",
          marginTop: "15px",
        }}
        variant="h2"
      >
        About Me
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "center",
        }}
        height={{ xs: "auto", md: "500px" }}
      >
        <img alt="about-pic" className="about-pic" src={Pic}></img>
        <Box marginLeft="30px">
          <Typography variant="h3">Dylan Spencer</Typography>
          <Typography variant="h5">Software Developer</Typography>
          <Typography variant="h6">
            Degree: BS - Computer Science with Spanish minor
          </Typography>
          <Typography variant="h6">Age: 24</Typography>
          <Typography variant="h6">GPA: 3.85</Typography>
          <Typography marginTop="20px" width="90%">
            Hi, I'm Dylan Spencer. I'm from Stansbury Park Utah and my wife and
            I have a little baby boy. I love coding and developing apps or
            websites. My core values consist of having integrity, being honest,
            doing quality hard work and being a helpful team member. Some fun
            things about me are that I love sports, playing games, doing puzzles
            and solving problems. My recent hobbies include Disc Golf and
            Fishing. I have had lots of experience with frontend and backend web
            development. Let me know if there are any projects that I can help
            work on or if you have any questions for me.
          </Typography>
        </Box>
      </Box>
      <Typography marginTop="45px" variant="h4" textAlign="center">
        Two truths and one lie
      </Typography>
      <Typography textAlign="center" variant="h5">
        {answer}
      </Typography>
      <Box
        sx={{
          display: "flex",
          margin: "auto",
          marginBottom: "30px",
          flexDirection: { xs: "column", sm: "row" },
          justifyContent: "space-around",
          maxWidth: "700px",
        }}
      >
        <Card
          sx={{
            width: "200px",
            margin: "auto",
            marginTop: "10px",
            marginBottom: "10px",
          }}
        >
          <CardActionArea
            sx={{
              padding: "20px",
              textAlign: "center",
              backgroundColor: guess === 1 ? "green" : "primary.light",
            }}
            onClick={() => checkGuess(1)}
          >
            <Typography>I Got married at 20 years old</Typography>
          </CardActionArea>
        </Card>
        <Card
          sx={{
            width: "200px",
            margin: "auto",
            marginTop: "10px",
            marginBottom: "10px",
          }}
        >
          <CardActionArea
            sx={{
              width: "200px",
              padding: "20px",
              textAlign: "center",
              backgroundColor: guess === 2 ? "red" : "primary.light",
            }}
            onClick={() => checkGuess(2)}
          >
            <Typography>I have never broken a bone</Typography>
          </CardActionArea>
        </Card>
        <Card
          sx={{
            width: "200px",
            margin: "auto",
            marginTop: "10px",
            marginBottom: "10px",
          }}
        >
          <CardActionArea
            sx={{
              width: "200px",
              padding: "20px",
              textAlign: "center",
              backgroundColor: guess === 3 ? "red" : "primary.light",
            }}
            onClick={() => checkGuess(3)}
          >
            <Typography>The lowest grade I've ever received is a B</Typography>
          </CardActionArea>
        </Card>
      </Box>
    </Box>
  );
}
