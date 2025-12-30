import React from "react";
import { Container } from "@mui/system";
import { Grid, Card, CardContent, CardActionArea, Link } from "@mui/material";
import projectsData from "../data/projects.json";

type Project = {
  title: string;
  role?: string;
  description: string;
  link?: string;
};

const Projects: React.FC = () => {
  const projects: Project[] = projectsData.projects;

  return (
    <Container maxWidth={"lg"} className="infoPanel" id="projects">
      <Container className="centerCont whoI">
        <h2>What I Made</h2>
      </Container>
      <Grid container spacing={3} rowSpacing={1} className="InfoGrid">
        {projects.map((project) => (
          <Grid item xs={12} md={4} key={project.title}>
            <Card
              sx={{
                transition: "all 0.3s ease-in-out",
                "&:hover": {
                  transform: "scale(1.10)",
                },
              }}
              className="experienceCard"
            >
              <CardActionArea>
                <Link
                  href={project.link || "#"}
                  target="_blank"
                  underline="none"
                  color="inherit"
                >
                  <CardContent className="cardContent">
                    <h3>{project.title}</h3>
                    {project.role && <h4>{project.role}</h4>}
                    <p>{project.description}</p>
                  </CardContent>
                </Link>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Projects;
