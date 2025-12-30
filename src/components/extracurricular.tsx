import React from "react";
import { Container } from "@mui/system";
import { Grid, Card, CardContent, CardMedia } from "@mui/material";
import carImage from "../images/car.jpg";
import hikeImage from "../images/hike.jpg";
import bicycleImage from "../images/IMG_4796.jpg";

const Extracurricular: React.FC = () => {
  return (
    <Container maxWidth={"lg"} className="infoPanel" id="extracurricular">
      <Container className="centerCont whoI">
        <h2>What I Like To Do</h2>
      </Container>
      <Grid container spacing={3} className="InfoGrid">
        <Grid item xs={12} md={12}>
          <Card sx={{ maxWidth: "100%" }} className="experienceCard">
            <CardMedia
              sx={{ height: 140 }}
              image={carImage}
              title="Sim racing car sude by side"
            />
            <CardContent className="cardContent">
              <h3>Simracing & Motorsport</h3>
              <p>
                I am a huge fan of Motorsport growing up. I am a sucker for
                speed and technology. I picked up simracing during the pandemic
                and have been hooked ever since. This is my go to hobby to
                unwind. I love working up my competitive spirit to get the
                better finishing position or faster lap time. I love working
                with fellow simracers to get faster and become a better racer. I
                create liveries and set the creative direction of 2 simracing
                teams. In fact, the livery(wrap) for the Mercedes in the image
                was designed and made by me.
              </p>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card sx={{ maxWidth: "100%" }} className="experienceCard">
            <CardMedia
              sx={{ height: 140 }}
              image={hikeImage}
              title="Me at a peak of a hike"
            />
            <CardContent className="cardContent">
              <h3>Hiking and Outdoors</h3>
              <p>
                Ever since I moved to Colorado, I fell in love with the
                outdoors. I love exploring the mountains and enjoy nature's
                beauty. I love pushing past my limits. I am no stranger to
                exhausting hikes tests my endurance. One day I will reach my
                goal of summiting a fourteener.
              </p>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card sx={{ maxWidth: "100%" }} className="experienceCard">
            <CardMedia
              sx={{ height: 140 }}
              image={bicycleImage}
              title="Me on a road bike"
            />
            <CardContent className="cardContent">
              <h3>Road Biking</h3>
              <p>
                I fell in love with road biking in Arizona. I love exploring new
                places on a bike and pushing myself to go the extra mile to get
                up and close those mountains. I love setting goals and
                achieiving them. Like motorsport, I love speed and distance that
                comes with biking.
              </p>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Extracurricular;
