import { Box, Typography } from "@mui/material";
import React from "react";
import SkillsCard from "../components/SkillsCard";
import "../css/Global.css";

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
        <img
          alt="family pic"
          className="family-pic"
          src={require("../assets/family.jpg")}
        ></img>
        <Box>
          <Typography
            fontSize={{ sm: 16, md: 18, lg: 20 }}
            marginLeft="15px"
            variant="body1"
          >
            Dylan Spencer is a Computer Science Major currently studying at Utah
            State University. He is currently working as a software development
            engineer intern at Family Search. He is interested in Web
            Development, UX/UI design principles, Disc Golf and Fishing. Dylan
            plans to finish his undergraduate with a Bachelors degree in
            Computer Science in the Fall of 2023.
          </Typography>
          <Typography
            fontSize={{ sm: 16, md: 18, lg: 20 }}
            marginTop="15px"
            marginLeft="15px"
            variant="body1"
          >
            This webpage was built as a resume or portfolio for easily
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
    </Box>
  );
}
