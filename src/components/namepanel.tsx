import React from "react";
import { Container } from "@mui/system";
import { Grid, Link } from "@mui/material";
import DescriptionIcon from "@mui/icons-material/Description";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import ProfilePhoto from "../images/profilepic.jpg";

const NamePanel: React.FC = () => {
  return (
    <>
      <Container maxWidth={false} id="namePanel">
        <h1 id="nameHeader">
          <span id="arjunHeader">Arjun</span>
          <br></br>
          Lakshmi Narasimhan
          <br></br>
          <div id="iconsOfHeader">
            <Link
              href="https://github.com/Larjun"
              color="inherit"
              className="headerLink"
              target="_blank"
            >
              <GitHubIcon fontSize="inherit" color="inherit" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/arjun-lakshmi-narasimhan-5626b01b8/"
              color="inherit"
              className="headerLink"
              target="_blank"
            >
              <LinkedInIcon fontSize="inherit" color="inherit" />
            </Link>
            <Link
              href="https://docs.google.com/document/d/1znKOX7C3jt2riuvrlDEIp4GJXmwMD7ox7OkEJoahcXY/edit?usp=sharing"
              color="inherit"
              className="headerLink"
              target="_blank"
            >
              <DescriptionIcon fontSize="inherit" color="inherit" />
            </Link>
          </div>
        </h1>
      </Container>

      <Container maxWidth={false} id="whoAmI">
        <Container className="centerCont whoI">
          <h2>Who Am I?</h2>
        </Container>
        <Grid container spacing={0} className="InfoGrid">
          <Grid item xs={12} md={5}>
            <Container className="centerCont whoI">
              <img src={ProfilePhoto} id="displayimg" alt="profile pic"></img>
            </Container>
          </Grid>
          <Grid item xs={12} md={7}>
            <Container className="centerCont whoIContent">
              <p>
                Hello there! I'm Arjun Lakshmi Narasimhan. I am a software
                engineer who loves exploring and learning new technologies and
                applying them to real-world problems. I am a software engineer
                who build all kinds of cool software from Java applications to
                React Typescript Web Interfaces while dabbling in Machine
                Learning and Data Science. My passion for software development
                pushes me to explore and learn new technologies and put my skils
                to test. I graduated with a Masters degree in Computer Science
                from the University of Colorado Boulder.
              </p>
            </Container>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default NamePanel;
