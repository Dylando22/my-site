import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import HomeIcon from "@mui/icons-material/Home";

function TriviaGame() {
  //Used to get the data passed from the navigate in Trivia Menu
  const location = useLocation();
  //Used to navigate to GameOver screen and give data
  const navigate = useNavigate();

  //State variables used when pages are changed
  const [index, setIndex] = useState(0);
  const QuestionNumber = Object.keys(location.state.questions).length;
  const RoundState = Array(QuestionNumber).fill(false);
  const [score, setScore] = useState(0);
  const [answerText, setAnswerText] = useState("Waiting for guess....");
  const [roundState, setRoundState] = useState(RoundState); //True once player has guessed

  //Makes the round stop, so when the user gets a question wrong, they can not go back and change it
  const handleChangeRoundState = (index: number) => {
    const temp = roundState;
    temp[index] = true;
    setRoundState(temp);
  };

  return (
    <Box>
      <Card
        sx={{
          height: "95%",
          width: "75vw",
          margin: "auto",
          padding: "25px",
          textAlign: "center",
          alignItems: "center",
          maxWidth: "850px",
        }}
      >
        <Typography
          variant="h2"
          sx={{ backgroundColor: "primary.main", color: "common.white" }}
        >
          TRIVIA
        </Typography>
        <Typography
          variant="h6"
          sx={{
            float: "right",
            width: "auto",
            backgroundColor: "primary.main",
            color: "common.white",
            padding: "15",
            marginRight: "10px",
          }}
        >
          Score: {score}
        </Typography>
        <Typography
          variant="h6"
          sx={{
            float: "right",
            width: "auto",
            backgroundColor: "primary.main",
            color: "common.white",
            padding: "15",
            marginRight: "10px",
          }}
        >
          {location.state.playerName}
        </Typography>

        <CardContent
          sx={{
            padding: 1,
            backgroundColor: "primary.main",
          }}
        >
          <Card
            sx={{
              width: "auto",
              minHeight: 250,
              margin: 25,
              padding: 15,
              textAlign: "center",
            }}
          >
            {" "}
            <Typography sx={{ marginBottom: "10px" }}>
              Category: {location.state.questions[index].Category} - Difficulty:{" "}
              {location.state.questions[index].Difficulty}
            </Typography>
            <Typography variant="h5">
              {index + 1}. {location.state.questions[index].QuestionText}
            </Typography>
          </Card>
          <Box sx={{ width: "auto", margin: "25px" }}>
            <Grid container rowSpacing={1} columnSpacing={2}>
              <Grid item>
                <Card
                  sx={{
                    width: 160,
                    height: 100,
                    margin: 5,
                    padding: 5,
                    display: "flex",
                  }}
                >
                  <CardActionArea
                    data-testid="good-click"
                    onClick={() => {
                      if (
                        location.state.questions[index].Options[0] ===
                          location.state.questions[index].Answer &&
                        !roundState[index]
                      ) {
                        setAnswerText("Correct! - Go to next Question");
                        handleChangeRoundState(index);
                        setScore(score + 1);
                      } else if (!roundState[index]) {
                        setAnswerText(
                          `Incorrect, the correct answer is -- ${location.state.questions[index].Answer}`
                        );
                        handleChangeRoundState(index);
                      } else {
                        setAnswerText(
                          `Already been played, the correct answer is -- ${location.state.questions[index].Answer}`
                        );
                      }
                    }}
                  >
                    <CardContent>
                      {location.state.questions[index].Options[0]}
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
              <Grid item>
                <Card
                  sx={{
                    width: 160,
                    height: 100,
                    margin: 5,
                    padding: 5,
                    display: "flex",
                  }}
                >
                  <CardActionArea
                    data-testid="bad-click"
                    onClick={() => {
                      if (
                        location.state.questions[index].Options[1] ===
                          location.state.questions[index].Answer &&
                        !roundState[index]
                      ) {
                        setAnswerText("Correct! - Go to next Question");
                        handleChangeRoundState(index);
                        setScore(score + 1);
                      } else if (!roundState[index]) {
                        setAnswerText(
                          `Incorrect, the correct answer is -- ${location.state.questions[index].Answer}`
                        );
                        handleChangeRoundState(index);
                      } else {
                        setAnswerText(
                          `Already been played, the correct answer is -- ${location.state.questions[index].Answer}`
                        );
                      }
                    }}
                  >
                    <CardContent>
                      {location.state.questions[index].Options[1]}
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
              <Grid item>
                <Card
                  sx={{
                    width: 160,
                    height: 100,
                    margin: 5,
                    padding: 5,
                    display: "flex",
                  }}
                >
                  <CardActionArea
                    onClick={() => {
                      if (
                        location.state.questions[index].Options[2] ===
                          location.state.questions[index].Answer &&
                        !roundState[index]
                      ) {
                        setAnswerText("Correct! - Go to next Question");
                        handleChangeRoundState(index);
                        setScore(score + 1);
                      } else if (!roundState[index]) {
                        setAnswerText(
                          `Incorrect, the correct answer is -- ${location.state.questions[index].Answer}`
                        );
                        handleChangeRoundState(index);
                      } else {
                        setAnswerText(
                          `Already been played, the correct answer is -- ${location.state.questions[index].Answer}`
                        );
                      }
                    }}
                  >
                    <CardContent>
                      {location.state.questions[index].Options[2]}
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
              <Grid item>
                <Card
                  sx={{
                    width: 160,
                    height: 100,
                    margin: 5,
                    padding: 5,
                    display: "flex",
                  }}
                >
                  <CardActionArea
                    onClick={() => {
                      if (
                        location.state.questions[index].Options[3] ===
                          location.state.questions[index].Answer &&
                        !roundState[index]
                      ) {
                        setAnswerText("Correct! - Go to next Question");
                        handleChangeRoundState(index);
                        setScore(score + 1);
                      } else if (!roundState[index]) {
                        setAnswerText(
                          `Incorrect, the correct answer is -- ${location.state.questions[index].Answer}`
                        );
                        handleChangeRoundState(index);
                      } else {
                        setAnswerText(
                          `Already been played, the correct answer is -- ${location.state.questions[index].Answer}`
                        );
                      }
                    }}
                  >
                    <CardContent>
                      {location.state.questions[index].Options[3]}
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            </Grid>
          </Box>
          <Typography
            variant="h5"
            sx={{
              color: "common.black",
              backgroundColor: "background.paper",
              borderRadius: "12px",
            }}
          >
            {answerText}
          </Typography>
        </CardContent>
      </Card>
      <Box display="flex" justifyContent="center" padding={1} width="100%">
        <Button
          variant="contained"
          sx={{ marginRight: "30px" }}
          onClick={() => {
            navigate("/trivia-home");
          }}
        >
          <HomeIcon />
        </Button>
        <Button
          variant="contained"
          sx={{ marginRight: "30px" }}
          onClick={() => {
            if (index >= 1) {
              setIndex(index - 1);
              setAnswerText("Waiting for guess....");
            }
          }}
        >
          <ArrowBackIos />
        </Button>
        <Button
          sx={{ marginRight: "30px" }}
          variant="contained"
          onClick={() => {
            if (index < QuestionNumber - 1) {
              setIndex(index + 1);
              setAnswerText("Waiting for guess....");
            } else {
              navigate("/trivia-game-over", {
                state: {
                  Score: score,
                  playerName: location.state.playerName,
                  Total: QuestionNumber,
                  Difficulty: location.state.questions[0].Difficulty,
                  Category: location.state.mainCategory,
                },
              });
            }
          }}
        >
          <ArrowForwardIos />
        </Button>
      </Box>
    </Box>
  );
}

export default TriviaGame;
