import React from "react";
import ProjectCard from "../components/ProjectCard";
import { Box, Grid, Typography } from "@mui/material";

import Chad from "../assets/chad_logo.png";
import Old from "../assets/old-web.png";
import Calc from "../assets/calculator.png";
import Weather from "../assets/weather.jpg";
import Frappy from "../assets/frappy.jpg";
import Raptor from "../assets/raptor.png";
import Trivia from "../assets/trivia.jpg";

export default function Projects() {
  return (
    <Box>
      <Typography
        sx={{
          textAlign: "center",
          marginTop: "15px",
        }}
        variant="h2"
      >
        Projects
      </Typography>
      <Box display="flex" justifyContent="center" flexGrow={1} paddingTop={5}>
        <Grid
          container
          spacing={1}
          padding={1}
          justifyContent="center"
          direction="row"
          gap={8}
          item
          xs={9}
        >
          <ProjectCard
            title="Trivia Game"
            image={Trivia}
            description="A Trivia game I developed for training. Calls from a trivia API with random questions. Click to Play"
            path="/my-site/trivia-home"
          />
          <ProjectCard
            title="Chad Coleman Films"
            image={Chad}
            description="The website for a local company Chad Coleman Films. Chad Hired me to re design his current website. Currently under development."
            path="https://dylando22.github.io/coleman_films"
          />
          <ProjectCard
            title="Old Website"
            image={Old}
            description="The website for a local company Chad Coleman Films. Chad Hired me to re design his current website."
            path="https://dylando22.github.io/"
          />
          <ProjectCard
            title="Javascript Calculator"
            image={Calc}
            description="A class project making a calculator out of 100% javascript, no HTML used"
            path="https://dylando22.github.io/templates/calculator.html"
          />
          <ProjectCard
            title="Simple Weather App"
            image={Weather}
            description="A class project that uses a free API to get the site visitors relative location and then 40 day weather forecast for that location."
            path="https://dylando22.github.io/templates/weather.html"
          />
          <ProjectCard
            title="Frappy"
            image={Frappy}
            description="A web app built for fictional frappiccino shop named Frappy. This is a link to the github repo for my group. This was a group project."
            path="https://github.com/CS-3450-Group-13/frappy"
          />
          <ProjectCard
            title="RAPTOR"
            image={Raptor}
            description="A website I helped develop while working at Hill Air Force Base. Worked on frontend and setup the backend. Not accessible to the public."
            path="/my-site/projects"
          />
        </Grid>
      </Box>
    </Box>
  );
}
