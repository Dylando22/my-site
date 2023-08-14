import React from "react";
import ProjectCard from "../components/ProjectCard";
import { Box, Grid, Typography } from "@mui/material";

import Old from "../assets/old-web.png";
import Calc from "../assets/calculator.png";
import Weather from "../assets/weather.jpg";
import Frappy from "../assets/frappy.jpg";
import Raptor from "../assets/raptor.png";
import Quotes from "../assets/quotes.png";
import Chad from "../assets/chad_logo.png";
import Trivia from "../assets/trivia.jpg";
import Galaga from "../assets/galagaTitle.png";
import StarShooter from "../assets/startShooter.png";
import Lines from "../assets/Lines.png";
import Nuke from "../assets/nuke.png";
import MultiAgent from "../assets/multiAgent.png";
import GameCenter from "../assets/gameCenter.png";
import Blocks from "../assets/blocks.png";
import Maze from "../assets/maze.png";
import Water from "../assets/water.jpg";

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
            title="GALAGA"
            image={Galaga}
            description="Final Project from my game development class. Enjoy"
            path="https://dylando22.github.io/galaga-static"
          />
          <ProjectCard
            title="Zombie Breakout"
            image={Nuke}
            description="A Project from my game development class. Zombie breakout style"
            path="https://dylando22.github.io/zombie-game"
          />
          <ProjectCard
            title="Blocks"
            image={Blocks}
            description="A Project from my game development class. This was a midterm and was completed in less than 5 hours"
            path="https://dylando22.github.io/falling-blocks"
          />
          <ProjectCard
            title="Random Maze Game"
            image={Maze}
            description="A Project from my game development class. This was a random maze generated game"
            path="https://dylando22.github.io/school-maze-runner"
          />
          <ProjectCard
            title="Simple Animation"
            image={StarShooter}
            description="An animation I made in my graphics class. We did 3D animations, but this was 
            a simple 2D animation. We built all the line drawing from scratch."
            path="https://dylando22.github.io/star-shooter"
          />
          <ProjectCard
            title="Line Drawing"
            image={Lines}
            description="Interactive Line drawing demo with a heartbeat animation made for my graphics class."
            path="https://dylando22.github.io/line-drawing"
          />
          <ProjectCard
            title="Trivia Game"
            image={Trivia}
            description="A Trivia game I developed for training. Calls from a trivia API with random questions. Click to Play"
            path="/trivia-home"
          />
          <ProjectCard
            title="Water Depths"
            image={Water}
            description="A webpage I made for a friend needing water depth statistics. Data is provided from USGS."
            path="/water-stats"
          />
          <ProjectCard
            title="Gamers 3000"
            image={GameCenter}
            description="Final Project from my web development class. We made an arcade website using firebase and Next.js 
            to interactively play games. Firebase is currently down."
            path="https://4610-final.vercel.app/"
          />
          <ProjectCard
            title="Quotes API"
            image={Quotes}
            description="A Quotes searcher built for a class project. The CSS does not translate over very well."
            path="/quotes"
          />
          <ProjectCard
            title="Chad Coleman Films"
            image={Chad}
            description="The website for a local company Chad Coleman Films. Chad Hired me to re design his current website. Currently under development."
            path="https://dylando22.github.io/coleman_films"
          />
          <ProjectCard
            title="Warehouse Simulation"
            image={MultiAgent}
            description="Repo for my multi agent systems final group project. We analyzed this simulation of how a multi-agent system would work in a warehouse.  "
            path="https://github.com/Dylando22/warehouse-sim"
          />
          <ProjectCard
            title="Old Website"
            image={Old}
            description="My old resume website built completely from HTML and CSS"
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
            path="/projects"
          />
        </Grid>
      </Box>
    </Box>
  );
}
