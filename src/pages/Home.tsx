import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import SkillsCard from "../components/SkillsCard";
import "../css/Global.css";
import SelfPhoto from "../assets/full.jpg";
import Chad from "../assets/chad_logo.png";
import Trivia from "../assets/trivia.jpg";
import Galaga from "../assets/galagaTitle.png";
import ProjectCard from "../components/ProjectCard";
import CurrentWorkCard from "../components/CurrentWorkCard";
import FamilySearchLogo from "../assets/familySearch.png";
export default function Home() {
  const softSkills = ["Teamwork", "Communication", "Software Documentation"];
  const techSkills = [
    "Agile/Scrum",
    "Git Version Control",
    "Problem Solving",
    "Frontend web dev.",
    "Backend web dev.",
    "Automation Testing",
  ];
  const languages = [
    "HTML/CSS",
    "React.js",
    "TypeScript",
    "JavaScript",
    "WebDriverIo",
    "Java",
    "Python",
    "C++",
    "C",
    "PostgreSQL",
  ];

  return (
    <Box>
      <Typography
        sx={{
          textAlign: "center",
          marginTop: "15px",
        }}
        variant="h2"
      >
        Welcome
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          width: "100%",
          margin: "auto",
          paddingTop: "20px",
          paddingBottom: "20px",
          backgroundColor: "secondary.main",
          alignItems: { xs: "center", md: "normal" },
        }}
      >
        <img alt="self-pic" className="family-pic" src={SelfPhoto}></img>
        <Box>
          <Typography
            fontSize={{ sm: 16, md: 18, lg: 20 }}
            marginLeft="15px"
            variant="body1"
          >
            Dylan Spencer is a Computer Science Major currently studying at Utah
            State University. He is interested in Full Stack Web Development,
            UX/UI design principles, game development, and sports. Dylan plans
            to finish his undergraduate with a Bachelors degree in Computer
            Science with a minor in Spanish in the Fall of 2023. He currently
            has a security clearance and could start working full time
            immediately due to short class schedule.
          </Typography>
          <Typography
            fontSize={{ sm: 16, md: 18, lg: 20 }}
            marginTop="15px"
            marginLeft="15px"
            variant="body1"
          >
            Dylan built this webpage as a resume or portfolio for easily
            accessible information about Dylan, his work history, skills, and a
            look into some projects he has worked on. It was developed using
            React with TypeScript and although this site does not draw from a
            database, Dylan does have experience working with PostgreSQL,
            Express.js, Node.js, and Django.
          </Typography>
        </Box>
      </Box>
      <Typography
        variant="h4"
        sx={{
          margin: "25px",
        }}
      >
        Current Job
      </Typography>
      <CurrentWorkCard
        location="FamilySearch"
        dateRange="2023 | current"
        content="Dylan is Currently working at Family Search and a Software Developer Intern. He works on the Global Campaigns team as a QA. He has mainly been developing complete test automation for multiple different campaign pages, while validating data for emails."
        position="Software Developer in Test"
        responsibilities={[
          "Developing Automation testing with Node.js and WebdriverIo",
          "Write code to read very large data files and parse the data to get needed information",
          "Work in an Agile Scrum environment",
          "Do manual testing and data verification testing for multiple campaigns.",
          "Testing Emails",
          "Frontend testing for different web pages",
        ]}
        image={FamilySearchLogo}
      />
      <Typography
        variant="h4"
        sx={{
          margin: "25px",
        }}
      >
        Skills
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: { xs: "center", md: "space-around" },
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          maxWidth: "900px",
          margin: "auto",
        }}
      >
        <SkillsCard title="Languages" list={languages} />
        <SkillsCard title="Technical Skills" list={techSkills} />
        <SkillsCard title="Soft Skills" list={softSkills} />
      </Box>
      <Typography
        variant="h4"
        sx={{
          margin: "25px",
        }}
      >
        Favorite Projects
      </Typography>
      <Box
        display="flex"
        justifyContent="center"
        flexGrow={1}
        paddingTop={5}
        bgcolor="darkgrey"
      >
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
            title="Trivia Game"
            image={Trivia}
            description="A Trivia game I developed for training. Calls from a trivia API with random questions. Click to Play"
            path="/trivia-home"
          />
          <ProjectCard
            title="Chad Coleman Films"
            image={Chad}
            description="The website for a local company Chad Coleman Films. Chad Hired me to re design his current website. Currently under development."
            path="https://dylando22.github.io/coleman_films"
          />
        </Grid>
      </Box>
    </Box>
  );
}
