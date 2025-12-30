import React from "react";
import { Container } from "@mui/system";
import { Grid, Card, CardContent, CardMedia } from "@mui/material";
import AmazonStoresLogo from "../images/amazonStores.webp";
import svhcImage from "../images/svhc.jpg";
import curImage from "../images/cur.jpg";
import cugImage from "../images/cug.jpg";

const Experience: React.FC = () => {
  return (
    <Container maxWidth={"lg"} className="infoPanel" id="experiences">
      <Container className="centerCont whoI">
        <h2>What Experiences I Had</h2>
      </Container>
      <Grid container spacing={3} className="InfoGrid">
        <Grid item xs={12} md={12}>
          <Card className="experienceCard">
            <CardMedia
              image={AmazonStoresLogo}
              title="Amazon Stores"
              sx={{ height: 140, objectFit: "contain" }}
            />
            <CardContent className="cardContent">
              <h3>Amazon Stores</h3>
              <p>
                I am a Software Development Engineer I at Amazon Stores in the
                Tempe, Arizona. I work on building Seller Life Cycle Management
                and Inventory Trust tools specifically for fraud prevention. We
                handle the quarantining and disposal of thousands of inventories
                owned by fraudulent sellers, saving Amazon millions of dollars
                in potential losses. I build frontend interfaces for Amazon
                Seller Central using React Typescript and backend microservices
                and REST APIs using Java. I use data warehousing tools to run
                ETL jobs and analyze large datasets to identify fraudulent
                seller patterns. I live and breath AWS technologies.
              </p>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={12}>
          <Card className="experienceCard">
            <CardMedia
              image={svhcImage}
              title="Sri Vari Hot Chips Logo"
              sx={{ height: 140, objectFit: "contain" }}
            />
            <CardContent className="cardContent">
              <h3>Sri Vari Hot Chips</h3>
              <p>
                I built a website for a local bakery and snacks shop back home
                in Chennai, India. This is a full stack webapp built using
                React, NodeJS, Express and MongoDB. The website is hosted on AWS
                and is used to display the bakery's menu, take orders and manage
                inventory. Customers can also order food online and have it
                delivered to their homes as well as customize food orders to
                their specific needs. I am working closely with the owner to add
                and implement features that suites the requirements and
                abilities of a small business.
              </p>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card className="experienceCard">
            <CardMedia
              sx={{ height: 140 }}
              image={curImage}
              title="CU Gaming Logo"
            />
            <CardContent className="cardContent">
              <h3>CU Robotics</h3>
              <p>
                I was the control systems developer for CU Robotics. I designed
                and built the way the robots move and fire their rounds. The
                control system is primarily built from teensyarduino, an arduino
                framework made to support the teensy microcontroller.
              </p>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card className="experienceCard">
            <CardMedia
              sx={{ height: 140 }}
              image={cugImage}
              title="CU Gaming Logo"
            />
            <CardContent className="cardContent">
              <h3>CU Gaming & Esports</h3>
              <p>
                I am the community manager for CU Gaming and Esports. I manage
                public relations with the community as well as host huge events
                that support up to a 1000 people and frequent small scale
                community events.
              </p>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Experience;
