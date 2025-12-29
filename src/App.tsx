import { useEffect, useRef } from 'react';
import { Container} from '@mui/system'
import { Grid, Link, List, ListItem, ListItemIcon, ListItemText, Card, CardContent, CardMedia } from '@mui/material'
import DescriptionIcon from '@mui/icons-material/Description';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import MenuIcon from '@mui/icons-material/Menu';
import './App.css';
import ProfilePhoto from './images/profilepic.jpg';
import Particles from "react-tsparticles";
import particleConfig from './particle_config';
import { loadFull } from "tsparticles";

function App(): JSX.Element {
  useEffect(() => {
    document.title = 'Arjun Lakshmi Narasimhan';
  }, []);

  const navRef = useRef<HTMLElement | null>(null);
  const showNavbar = () => {
    if (navRef.current) navRef.current.classList.toggle('responsive_nav')
  }

  const particlesInit = async (engine: any) => {
    console.log(engine);
    await loadFull(engine);
  };

  const particlesLoaded = async (container: any) => {
    console.log(container);
  };
  
  return (
    <div className="App">
      
      <Particles id='tsparticles' init={particlesInit} loaded={particlesLoaded} options={particleConfig}>
      </Particles>
      {/*( )*/}
      <header>
        <nav ref={navRef}>
          <a href="#technologies">Technologies</a>
          <a href="#experiences">Experiences</a>
          <a href="#projects">Projects</a>
          <a href="#extracurricular">Hobbies</a>
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
            <Link href='https://github.com/Larjun' color="inherit" className="headerLink"><GitHubIcon fontSize='inherit' color='inherit'/></Link>
            <Link href='https://www.linkedin.com/in/arjun-lakshmi-narasimhan-5626b01b8/' color="inherit"  className="headerLink"><LinkedInIcon fontSize='inherit' color='inherit'/></Link>
            <Link href='https://docs.google.com/document/d/10tVN2y9JXOtEkxp-enNvhXcAlNF5aaNVAll04jmlZ2c/edit?usp=sharing' color="inherit"  className="headerLink"><DescriptionIcon fontSize='inherit' color='inherit'/></Link>
          </div>
        </h1>
      </Container>

      <Container maxWidth={false} id="whoAmI">
        <Container className="centerCont whoI">
            <h2>Who Am I?</h2>
        </Container>
        <Grid container spacing={0} className='InfoGrid'>
          <Grid item xs={12} md={5}>
            <Container className="centerCont whoI"><img src={ProfilePhoto} id='displayimg' alt='profile pic'></img></Container>
          </Grid>
          <Grid item xs={12} md={7}>
            <Container className="centerCont whoIContent">
              <p>
                Hi, I am Arjun Lakshmi Narasimhan. I recently graduate from with a Master's and Bacholor's degree in Computer Science in the Data Science sub-track from the University of Colorado, Boulder. I specialize in Full Stack Software and Web Developement, Data Science, Machine Learning and Computer Vision. I am driven to learn, improve and put my skill to the test. I also love exercising my creativity in all my projects and products I build.   
                <br></br><br></br>
                Thank You for taking the time to learn about me. I look forward to connecting with you and learning about your oppurtunites.
              </p>
            </Container>
          </Grid>
        </Grid>
      </Container>

      <Container maxWidth={"lg"} className="infoPanel" id="technologies">
        <Container className="centerCont whoI">
          <h2>What I Can Do</h2>
        </Container>
        <Grid container spacing={0} className='InfoGrid'>
          <Grid item xs={12} md={4}>
            <h3>Progamming Languages</h3>
            <List dense={true} className="technologiesList">
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
                <p className='listP'>Javascript / Typescript</p>
              </ListItemText></ListItem>
              <ListItem><ListItemIcon><PlayArrowIcon className='arrowIcon'/></ListItemIcon><ListItemText>
                <p className='listP'>Swift</p>
              </ListItemText></ListItem>
              <ListItem><ListItemIcon><PlayArrowIcon className='arrowIcon'/></ListItemIcon><ListItemText>
                <p className='listP'>Scala</p>
              </ListItemText></ListItem>
            </List>
          </Grid> 
          <Grid item xs={12} md={4}>
            <h3>Web & AI Technologies</h3>
            <List dense={true} className="technologiesList">
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
          <Grid item xs={12} md={4}>
            <h3>Database Technologies</h3>
            <List dense={true} className="technologiesList">
              <ListItem><ListItemIcon><PlayArrowIcon className='arrowIcon'/></ListItemIcon><ListItemText>
                <p className='listP'>MongoDB</p>
              </ListItemText></ListItem>
              <ListItem><ListItemIcon><PlayArrowIcon className='arrowIcon'/></ListItemIcon><ListItemText>
                <p className='listP'>MySQL</p>
              </ListItemText></ListItem>
              <ListItem><ListItemIcon><PlayArrowIcon className='arrowIcon'/></ListItemIcon><ListItemText>
                <p className='listP'>PostgreSQL</p>
              </ListItemText></ListItem>
              <ListItem><ListItemIcon><PlayArrowIcon className='arrowIcon'/></ListItemIcon><ListItemText>
                <p className='listP'>Amazon DynamoDB</p>
              </ListItemText></ListItem>
              <ListItem><ListItemIcon><PlayArrowIcon className='arrowIcon'/></ListItemIcon><ListItemText>
                <p className='listP'>Apache Spark</p>
              </ListItemText></ListItem>
            </List>
          </Grid> 
        </Grid>
      </Container>
      
      <Container maxWidth={"lg"} className="infoPanel" id="experiences">
        <Container className="centerCont whoI">
          <h2>What Experiences I Had</h2>
        </Container>
        <Grid container spacing={0} className='InfoGrid'>
          <Grid item xs={12} md={12}>
            <Card sx={{ maxWidth: "95%" }} className='experienceCard'>
              <CardMedia
                image={require("./images/svhc.JPG")}
                title="CU Gaming Logo"
                sx={{ height: 140, objectFit: "contain" }}
              />
              <CardContent className='cardContent'>
                <h3>
                  Sri Vari Hot Chips
                </h3>
                <p>
                  I built a website for a local bakery and snacks shop back home in Chennai, India. This is a full stack webapp built using React, NodeJS, Express and MongoDB. The website is hosted on AWS and is used to display the bakery's menu, take orders and manage inventory. Customers can also order food online and have it delivered to their homes as well as customize food orders to their specific needs. I am working closely with the owner to add and implement features that suites the requirements and abilities of a small business.
                </p>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
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
          <Grid item xs={12} md={6}>
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
      
      <Container maxWidth={"lg"} className="infoPanel" id="projects">
        <Container className="centerCont whoI">
          <h2>What I Made</h2>
        </Container>
        <Grid container spacing={1} rowSpacing={1} className='InfoGrid'>
          <Grid item xs={12} md={4}>
            <Card sx={{ maxWidth: "90%" }} className='experienceCard'>
              <CardContent className='cardContent'>
                <h3>Expedia Senior Capstone Project</h3>
                <h4>Lead Frontend Developer</h4>
                <p>Built using React, MongoDB, NodeJS and Express and hosted on AWS. This white collared webapp serves as a method for renters to communicate with the property managers of vation rentals</p>
              </CardContent>
            </Card>
          </Grid>
          
          <Grid item xs={12} md={4}>
            <Card sx={{ maxWidth: "90%" }} className='experienceCard'>
              <CardContent className='cardContent'>
                <h3>Swift Wildfire & Weather App</h3>
                <h4>Developer</h4>
                <p>Built using Swift. This app uses weather api data to display forcast as wild fire predictions predicted using complex models built using Tensorflow.</p>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card sx={{ maxWidth: "90%" }} className='experienceCard'>
              <CardContent className='cardContent'>
                <h3>ACC Livery App</h3>
                <h4>Developer</h4>
                <p>Built using NodeJS, Express, Amazon S3 and hosted on AWS. This website made for users to upload custom liveries (car wraps) for the video game Assetto Corsa Competizione, create livery packs with several liveries and make these livery packs available to be downloaded</p>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card sx={{ maxWidth: "90%" }} className='experienceCard'>
              <CardContent className='cardContent'>
                <h3>Destination Colorado</h3>
                <h4>Project Lead</h4>
                <p>Built using NodeJS, Express and MongoDb. This website shows parks around Colorado which can be uploaded, rated and commented on by users.</p>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card sx={{ maxWidth: "90%" }} className='experienceCard'>
              <CardContent className='cardContent'>
                <h3>A-mazing</h3>
                <h4>Developer</h4>
                <p>Built using React. This project is a maze game with a randomly generated maze through whicht he user can navigate through. This project won the "Best UI/UX" award at HackCU 2023</p>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card sx={{ maxWidth: "90%" }} className='experienceCard'>
              <CardContent className='cardContent'>
                <h3>Advanced Spotify Search</h3>
                <p>Built using React and NodeJS. This webapp creates custom Spotify playlists based on track metadata such as "Energy", "Danceability", "Accousticness", etc.</p>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card sx={{ maxWidth: "90%" }} className='experienceCard'>
              <CardContent className='cardContent'>
                <h3>Free PDF Reader</h3>
                <p>Built using Express and NodeJS. This webapp converts PDF documents into audio file using Google Text To Speech.</p>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card sx={{ maxWidth: "90%" }} className='experienceCard'>
              <CardContent className='cardContent'>
                <h3>Colorify</h3>
                <p>This is a chrome extension that improves the color contrast of every website, allowing users with visual impairment to have better access and readability of websites.</p>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card sx={{ maxWidth: "90%" }} className='experienceCard'>
              <CardContent className='cardContent'>
                <h3>Dungeon Deweller</h3>
                <p>Built using C++. This game is a dungeon crawler game played using the terminal. The player navigates through a dungeon with multiple levels, defeating enemies and reaching the exit.</p>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>

      <Container maxWidth={"lg"} className="infoPanel" id="extracurricular">
        <Container className="centerCont whoI">
          <h2>What I Like To Do</h2>
        </Container>
        <Grid container spacing={0} className='InfoGrid'>
          <Grid item xs={12} md={6}>
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
          <Grid item xs={12} md={6}>
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
