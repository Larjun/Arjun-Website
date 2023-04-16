import logo from './logo.svg';
import { Container} from '@mui/system'
import { Box, Grid, Link, List, ListItem, ListItemIcon, ListItemText, Card, CardActionArea, CardContent, CardMedia, Button} from '@mui/material'
import DescriptionIcon from '@mui/icons-material/Description';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import './App.css';
import ProfilePhoto from './images/profilepic.jpg';
import CUG from './images/cug.jpeg';
import CUR from './images/cur.png';

function App() {
  return (
    <div className="App">
      <Container maxWidth={false} id="namePanel">
        <h1 id='nameHeader'>
          <span id='arjunHeader'>Arjun</span>
          <br></br>
          Lakshmi Narasimhan
          <br></br>
          <div id='iconsOfHeader'>
            <Link href='https://github.com/Larjun' color="inherit" class="headerLink"><GitHubIcon fontSize='inherit' color='inherit'/></Link>
            <Link href='https://www.linkedin.com/in/arjun-lakshmi-narasimhan-5626b01b8/' color="inherit"  class="headerLink"><LinkedInIcon fontSize='inherit' color='inherit'/></Link>
            <Link href='https://drive.google.com/file/d/1IQEdKDV0n5Xx8CPm4uU05CYJDavkk4jq/view?usp=sharing' color="inherit"  class="headerLink"><DescriptionIcon fontSize='inherit' color='inherit'/></Link>
          </div>
        </h1>
      </Container>

      <Container maxWidth={false} id="whoAmI">
        <Container class="centerCont whoI">
            <h2>Who Am I?</h2>
        </Container>
        <Grid container spacing={10}>
          <Grid xs={12} md={5}>
            <Container class="centerCont whoI"><img src={ProfilePhoto} id='displayimg'></img></Container>
          </Grid>
          <Grid xs={12} md={7}>
            <Container class="centerCont whoIContent">
              <p>
                Hi, I am Arjun Lakshmi Narasimhan. I am a student University of Colorado Boulder pursuing a Bachelor's and Master's in Computer Science in the Data Science sub-track. I love creating. My passion for computer science lies in Full Stack Development. I take great pride in building websites and applications and improving my craft for designing and building apps on both the front end and back end. I also geek out on AI and Machine Learning technology and I am intrigued by the capabilities of computers in managing big data and intelligence systems. I am someone who loves to learn, every task and project I take on is one that I will learn from. I feel great satisfaction from refining my skills and abilities as well as learning new and upcoming technologies. I also enjoy putting my skills to the test and pushing my limits to see what I am capable of doing. 
                <br></br><br></br>
                In my spare time, I am into Motorsport, Gaming, and putting both together - Simracing. I am the community manager at CU Gaming and Esports and I design and commission virtual liveries and car wraps in my simracing games. One of my favorite projects I worked on is a web app where several drivers can upload liveries that they created and my app would compress multiple liveries and form a livery pack for people to download. I also enjoy the outdoors, I love bicycling and hiking.
                <br></br><br></br>
                Thank You for taking the time to learn about me. I look forward to connecting with you and learning about the opportunity to improve and push myself further.
              </p>
            </Container>
          </Grid>
        </Grid>
      </Container>

      <Container maxWidth={false} class="infoPanel" id="technologies">
        <Container class="centerCont whoI">
          <h2>What I Can Do</h2>
        </Container>
        <Grid container spacing={4}>
          <Grid xs={12} md={4}>
            <h3>Programming Languages</h3>
            <List dense={true} disablePadding={true} className="technologiesList">
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

      <Container maxWidth={false} class="infoPanel" id="experiences">
        <Container class="centerCont whoI">
          <h2>What I Worked For</h2>
        </Container>
        <Grid container spacing={0}>
          <Grid xs={12} md={6}>
            <Card sx={{ maxWidth: "90%" }} className='experienceCard'>
              <CardMedia
                sx={{ height: 140 }}
                image={require("./images/cur.png")}
                title="CU Gaming Logo"
              />
              <CardContent className='cardContent'>
                <h3>
                  CU Robotics
                </h3>
                <p>
                  Cat ipsum dolor sit amet, i is not fat, i is fluffy cry louder at reflection always ensure to lay down in such a manner that tail can lightly brush human's nose or stare at ceiling light. This cat happen now, it was too purr-fect!!! attack the child. Dismember a mouse and then regurgitate parts of it on the family room floor. Spot something, big eyes, big eyes, crouch, shake butt, prepare to pounce throwup on your pillow, or groom yourself 4 hours - checked, have your beauty sleep 18 hours - checked, be fabulous for the rest of the day - checked.
                </p>
              </CardContent>
            </Card>
          </Grid>
          <Grid xs={12} md={6}>
            <Card sx={{ maxWidth: "90%" }} className='experienceCard'>
              <CardMedia
                sx={{ height: 140 }}
                image={require("./images/cug.jpeg")}
                title="CU Gaming Logo"
              />
              <CardContent className='cardContent'>
                <h3>
                  CU Gaming & Esports
                </h3>
                <p>
                  Cat ipsum dolor sit amet, i is not fat, i is fluffy cry louder at reflection always ensure to lay down in such a manner that tail can lightly brush human's nose or stare at ceiling light. This cat happen now, it was too purr-fect!!! attack the child. Dismember a mouse and then regurgitate parts of it on the family room floor. Spot something, big eyes, big eyes, crouch, shake butt, prepare to pounce throwup on your pillow, or groom yourself 4 hours - checked, have your beauty sleep 18 hours - checked, be fabulous for the rest of the day - checked.
                </p>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
      
      <Container maxWidth={false} class="infoPanel" id="projects">
        <Container class="centerCont whoI">
          <h2>What I Made</h2>
        </Container>
        <Grid container spacing={1} rowSpacing={1}>
          <Grid xs={12} md={4}>
            <Card sx={{ maxWidth: "90%" }} className='experienceCard'>
              <CardContent className='cardContent'>
                <h3>Expedia Senior Capstone Project</h3>
                <h4>Lead Frontend Developer</h4>
                <p>Description</p>
              </CardContent>
            </Card>
          </Grid>
          
          <Grid xs={12} md={4}>
            <Card sx={{ maxWidth: "90%" }} className='experienceCard'>
              <CardContent className='cardContent'>
                <h3>ACC Livery App</h3>
                <h4>Developer</h4>
                <p>Description</p>
              </CardContent>
            </Card>
          </Grid>
          <Grid xs={12} md={4}>
            <Card sx={{ maxWidth: "90%" }} className='experienceCard'>
              <CardContent className='cardContent'>
                <h3>Destination Colorado</h3>
                <h4>Project Lead</h4>
                <p>Description</p>
              </CardContent>
            </Card>
          </Grid>
          <Grid xs={12} md={4}>
            <Card sx={{ maxWidth: "90%" }} className='experienceCard'>
              <CardContent className='cardContent'>
                <h3>A-mazing</h3>
                <h4>Developer</h4>
                <p>Description</p>
              </CardContent>
            </Card>
          </Grid>
          <Grid xs={12} md={4}>
            <Card sx={{ maxWidth: "90%" }} className='experienceCard'>
              <CardContent className='cardContent'>
                <h3>Advanced Spotify Search</h3>
                <h4>Developer</h4>
                <p>Description</p>
              </CardContent>
            </Card>
          </Grid>
          <Grid xs={12} md={4}>
            <Card sx={{ maxWidth: "90%" }} className='experienceCard'>
              <CardContent className='cardContent'>
                <h3>Free PDF Reader</h3>
                <h4>Developer</h4>
                <p>Description</p>
              </CardContent>
            </Card>
          </Grid>
          <Grid xs={12} md={4}>
            <Card sx={{ maxWidth: "90%" }} className='experienceCard'>
              <CardContent className='cardContent'>
                <h3>Colorify</h3>
                <h4>Developer</h4>
                <p>Description</p>
              </CardContent>
            </Card>
          </Grid>
          <Grid xs={12} md={4}>
            <Card sx={{ maxWidth: "90%" }} className='experienceCard'>
              <CardContent className='cardContent'>
                <h3>Cyberhood</h3>
                <h4>Developer</h4>
                <p>Description</p>
              </CardContent>
            </Card>
          </Grid>
          <Grid xs={12} md={4}>
            <Card sx={{ maxWidth: "90%" }} className='experienceCard'>
              <CardContent className='cardContent'>
                <h3>Dungeon Deweller</h3>
                <h4>Developer</h4>
                <p>Description</p>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>

      <Container maxWidth={false} id="foot">
        <h3></h3>
      </Container>
      
    </div>
  );
}

export default App;
