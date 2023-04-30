import logo from './logo.svg';
import { useEffect, useState, useRef, useCallback } from 'react';
import { Container} from '@mui/system'
import { Box, Grid, Link, List, ListItem, ListItemIcon, ListItemText, Card, CardActionArea, CardContent, CardMedia, Button, AppBar, Toolbar} from '@mui/material'
import DescriptionIcon from '@mui/icons-material/Description';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import './App.css';
import ProfilePhoto from './images/profilepic.jpg';
import Particles from "react-tsparticles";
import particleConfig from './particle_config.js';
import { loadFull } from "tsparticles";


function App() {
  useEffect(() => {
    document.title = 'Arjun Lakshmi Narasimhan';
  }, []);

  const navRef = useRef()
  const showNavbar = () => {
    navRef.current.classList.toggle('responsive_nav')
  }
  const particlesInit = async engine => {
    console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  };

  const particlesLoaded = container => {
    console.log(container);
  };
  
  return (
    <div className="App">
      
      <Particles id='tsparticles' init={particlesInit} loaded={particlesLoaded} options={particleConfig}>
      </Particles>
      {/*()*/}
      <header>
        <nav ref={navRef}>
          <a href="#technologies">Technologies</a>
          <a href="#experiences">Experiences</a>
          <a href="#projects">Projects</a>
          <a href="#extracurricular">Hobbies</a>
          {/*(
          <button className='nav-btn nav-close-btn' onClick={showNavbar}>
            <CloseIcon />
          </button>
          )*/}
        </nav>
        <button className='nav-btn' onClick={showNavbar}>
          <MenuIcon />
        </button>
      </header>
      
      <Container maxWidth={false} id="namePanel">
        <h1 id='nameHeader'>
          <span id='arjunHeader'>Arjun</span>
          <br></br>
          Lakshmi Narasimhan
          <br></br>
          <div id='iconsOfHeader'>
            <Link href='https://github.com/Larjun' color="inherit" class="headerLink"><GitHubIcon fontSize='inherit' color='inherit'/></Link>
            <Link href='https://www.linkedin.com/in/arjun-lakshmi-narasimhan-5626b01b8/' color="inherit"  class="headerLink"><LinkedInIcon fontSize='inherit' color='inherit'/></Link>
            <Link href='https://drive.google.com/file/d/1Xr5HikFYurES9f7B91jRa0RMJ8e_C8sB/view?usp=sharing' color="inherit"  class="headerLink"><DescriptionIcon fontSize='inherit' color='inherit'/></Link>
          </div>
        </h1>
      </Container>
      <Container maxWidth={false} id="whoAmI">
        <Container class="centerCont whoI">
            <h2>Who Am I?</h2>
        </Container>
        <Grid container spacing={0} className='InfoGrid'>
          <Grid xs={12} md={5}>
            <Container class="centerCont whoI"><img src={ProfilePhoto} id='displayimg'></img></Container>
          </Grid>
          <Grid xs={12} md={7}>
            <Container class="centerCont whoIContent">
              <p>
                Hi, I am Arjun Lakshmi Narasimhan. I am a student at University of Colorado Boulder pursuing a Bachelor and Master in Computer Science in the Data Science sub-track though. I specialize in Full Stack Software and Web Developement, Data Science, Machine Learning and Computer Vision. I am driven to learn, improve and put my skill to the tet. I also love exercising my creativity in the softwares I build.   
                
                {//I love creating. My passion for computer science lies in Full Stack Development. I take great pride in building websites and applications and improving my craft for designing and building apps on both the front end and back end. I also geek out on AI and Machine Learning technology and I am intrigued by the capabilities of computers in managing big data and intelligence systems. I am someone who loves to learn, every task and project I take on is one that I will learn from. I feel great satisfaction from refining my skills and abilities as well as learning new and upcoming technologies. I also enjoy putting my skills to the test and pushing my limits to see what I am capable of doing.
}
                <br></br><br></br>
                Thank You for taking the time to learn about me. I look forward to connecting with you and learning about your oppurtunites.
              </p>
            </Container>
          </Grid>
        </Grid>
      </Container>
      
      

      <Container maxWidth={"lg"} class="infoPanel" id="technologies">
        <Container class="centerCont whoI">
          <h2>What I Can Do</h2>
        </Container>
        <Grid container spacing={0} className='InfoGrid'>
          <Grid xs={12} md={4}>
            <h3>Progamming Languages</h3>
            <List dense={true} class="technologiesList">
              <ListItem><ListItemIcon><PlayArrowIcon className='arrowIcon'/></ListItemIcon><ListItemText>
                <p className='listP'>C</p>
              </ListItemText></ListItem>
              <ListItem><ListItemIcon><PlayArrowIcon className='arrowIcon'/></ListItemIcon><ListItemText>
                <p className='listP'>C++</p>
              </ListItemText></ListItem>
              <ListItem><ListItemIcon><PlayArrowIcon className='arrowIcon'/></ListItemIcon><ListItemText>
                <p className='listP'>Python</p>
              </ListItemText></ListItem>
              <ListItem><ListItemIcon><PlayArrowIcon className='arrowIcon'/></ListItemIcon><ListItemText>
                <p className='listP'>TensorFlow</p>
              </ListItemText></ListItem>
              <ListItem><ListItemIcon><PlayArrowIcon className='arrowIcon'/></ListItemIcon><ListItemText>
                <p className='listP'>Java</p>
              </ListItemText></ListItem>
              <ListItem><ListItemIcon><PlayArrowIcon className='arrowIcon'/></ListItemIcon><ListItemText>
                <p className='listP'>Javascript</p>
              </ListItemText></ListItem>
            </List>
          </Grid> 
          <Grid xs={12} md={4}>
            <h3>Web & AI Technologies</h3>
            <List dense={true} class="technologiesList">
              <ListItem><ListItemIcon><PlayArrowIcon className='arrowIcon'/></ListItemIcon><ListItemText>
                <p className='listP'>Express</p>
              </ListItemText></ListItem>
              <ListItem><ListItemIcon><PlayArrowIcon className='arrowIcon'/></ListItemIcon><ListItemText>
                <p className='listP'>NodeJS</p>
              </ListItemText></ListItem>
              <ListItem><ListItemIcon><PlayArrowIcon className='arrowIcon'/></ListItemIcon><ListItemText>
                <p className='listP'>React (This Website)</p>
              </ListItemText></ListItem>
              <ListItem><ListItemIcon><PlayArrowIcon className='arrowIcon'/></ListItemIcon><ListItemText>
                <p className='listP'>TensorFlow</p>
              </ListItemText></ListItem>
              <ListItem><ListItemIcon><PlayArrowIcon className='arrowIcon'/></ListItemIcon><ListItemText>
                <p className='listP'>OpenCV</p>
              </ListItemText></ListItem>
            </List>
          </Grid> 
          <Grid xs={12} md={4}>
            <h3>Database Technologies</h3>
            <List dense={true} class="technologiesList">
              <ListItem><ListItemIcon><PlayArrowIcon className='arrowIcon'/></ListItemIcon><ListItemText>
                <p className='listP'>MongoDB</p>
              </ListItemText></ListItem>
              <ListItem><ListItemIcon><PlayArrowIcon className='arrowIcon'/></ListItemIcon><ListItemText>
                <p className='listP'>MySQL</p>
              </ListItemText></ListItem>
              <ListItem><ListItemIcon><PlayArrowIcon className='arrowIcon'/></ListItemIcon><ListItemText>
                <p className='listP'>PostgreSQL</p>
              </ListItemText></ListItem>
            </List>
          </Grid> 
        </Grid>
      </Container>

      <Container maxWidth={"lg"} class="infoPanel" id="experiences">
        <Container class="centerCont whoI">
          <h2>What Experiences I Had</h2>
        </Container>
        <Grid container spacing={0} className='InfoGrid'>
          <Grid xs={12} md={6}>
            <Card sx={{ maxWidth: "90%" }} className='experienceCard'>
              <CardMedia
                sx={{ height: 140 }}
                image={require("./images/cur.jpg")}
                title="CU Gaming Logo"
              />
              <CardContent className='cardContent'>
                <h3>
                  CU Robotics
                </h3>
                <p>
                  I was the control systems developer for CU Robotics. I designed and built the way the robots move and fire their rounds. The control system is primarily built from teensyarduino, an arduino framework made to support the teensy microcontroller. 
                </p>
              </CardContent>
            </Card>
          </Grid>
          <Grid xs={12} md={6}>
            <Card sx={{ maxWidth: "90%" }} className='experienceCard'>
              <CardMedia
                sx={{ height: 140 }}
                image={require("./images/cug.jpg")}
                title="CU Gaming Logo"
              />
              <CardContent className='cardContent'>
                <h3>
                  CU Gaming & Esports
                </h3>
                <p>
                  I am the community manager for CU Gaming and Esports. I manage public relations with the community as well as host huge events that support up to a 1000 people and frequent small scale community events. 
                </p>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
      
      <Container maxWidth={"lg"} class="infoPanel" id="projects">
        <Container class="centerCont whoI">
          <h2>What I Made</h2>
        </Container>
        <Grid container spacing={1} rowSpacing={1} className='InfoGrid'>
          <Grid xs={12} md={4}>
            <Card sx={{ maxWidth: "90%" }} className='experienceCard'>
              <CardContent className='cardContent'>
                <h3>Expedia Senior Capstone Project</h3>
                <h4>Lead Frontend Developer</h4>
                <p>Built using React, MongoDB, NodeJS and Express and hosted on AWS. This white collared webapp serves as a method for renters to communicate with the property managers of vation rentals</p>
              </CardContent>
            </Card>
          </Grid>
          
          <Grid xs={12} md={4}>
            <Card sx={{ maxWidth: "90%" }} className='experienceCard'>
              <CardContent className='cardContent'>
                <h3>ACC Livery App</h3>
                <h4>Developer</h4>
                <p>Built using NodeJS, Express, Amazon S3 and hosted on AWS. This website made for users to upload custom liveries (car wraps) for the video game Assetto Corsa Competizione, create livery packs with several liveries and make these livery packs available to be downloaded</p>
              </CardContent>
            </Card>
          </Grid>
          <Grid xs={12} md={4}>
            <Card sx={{ maxWidth: "90%" }} className='experienceCard'>
              <CardContent className='cardContent'>
                <h3>Destination Colorado</h3>
                <h4>Project Lead</h4>
                <p>Built using NodeJS, Express and MongoDb. This website shows parks around Colorado which can be uploaded, rated and commented on by users.</p>
              </CardContent>
            </Card>
          </Grid>
          <Grid xs={12} md={4}>
            <Card sx={{ maxWidth: "90%" }} className='experienceCard'>
              <CardContent className='cardContent'>
                <h3>A-mazing</h3>
                <h4>Developer</h4>
                <p>Built using React. This project is a maze game with a randomly generated maze through whicht he user can navigate through. This project won the "Best UI/UX" award at HackCU 2023</p>
              </CardContent>
            </Card>
          </Grid>
          <Grid xs={12} md={4}>
            <Card sx={{ maxWidth: "90%" }} className='experienceCard'>
              <CardContent className='cardContent'>
                <h3>Advanced Spotify Search</h3>
                <p>Built using React and NodeJS. This webapp creates custom Spotify playlists based on track metadata such as "Energy", "Danceability", "Accousticness", etc.</p>
              </CardContent>
            </Card>
          </Grid>
          <Grid xs={12} md={4}>
            <Card sx={{ maxWidth: "90%" }} className='experienceCard'>
              <CardContent className='cardContent'>
                <h3>Free PDF Reader</h3>
                <p>Built using Express and NodeJS. This webapp converts PDF documents into audio file using Google Text To Speech.</p>
              </CardContent>
            </Card>
          </Grid>
          <Grid xs={12} md={4}>
            <Card sx={{ maxWidth: "90%" }} className='experienceCard'>
              <CardContent className='cardContent'>
                <h3>Colorify</h3>
                <p>This is a chrome extension that improves the color contrast of every website, allowing users with visual impairment to have better access and readability of websites.</p>
              </CardContent>
            </Card>
          </Grid>
          <Grid xs={12} md={4}>
            <Card sx={{ maxWidth: "90%" }} className='experienceCard'>
              <CardContent className='cardContent'>
                <h3>Dungeon Deweller</h3>
                <p>Built using C++. This game is a dungeon crawler game played using the terminal. The player navigates through a dungeon with multiple levels, defeating enemies and reaching the exit.</p>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
      
      <Container maxWidth={"lg"} class="infoPanel" id="extracurricular">
        <Container class="centerCont whoI">
          <h2>What I Like To Do</h2>
        </Container>
        <Grid container spacing={0} className='InfoGrid'>
          <Grid xs={12} md={6}>
            <Card sx={{ maxWidth: "90%" }} className='experienceCard'>
              <CardMedia
                sx={{ height: 140 }}
                image={require("./images/car.jpg")}
                title="Sim racing car sude by side"
              />
              <CardContent className='cardContent'>
                <h3>
                  Simracing & Motorsport
                </h3>
                <p>
                  I am a huge fan of Motorsport growing up. I also am a avid simracer who participate in regular league and eudurance races that can go on for several hours with my team. I am a sucker for fast things and the engineering that goes into building fast race cars intrigues me. I am also a livery designer for my simracing team and I practice my graphics design skills by building custom wraps for my cars. In fact, the wrap for the Mercedes in the card is made by me.
                </p>
              </CardContent>
            </Card>
          </Grid>
          <Grid xs={12} md={6}>
            <Card sx={{ maxWidth: "90%" }} className='experienceCard'>
              <CardMedia
                sx={{ height: 140 }}
                image={require("./images/hike.jpg")}
                title="Me at a peak of a hike"
              />
              <CardContent className='cardContent'>
                <h3>
                  Hiking and Outdoors
                </h3>
                <p>
                  Ever since I moved to Colorado, I fell in love with the outdoors. I love exploring the mountains and enjoy nature's beauty. I love pushing past my limits. I am no stranger to exhausting hikes tests my endurance. One day I will reach my goal of summiting a fourteener.
                </p>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>

      <Container maxWidth={"lg"} id="foot">
        <h5>Handcrafted using React with Material UI Framework</h5>
      </Container>
      
    </div>
  );
}

export default App;
