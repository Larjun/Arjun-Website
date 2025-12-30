import { useEffect } from "react";
import { Container } from "@mui/system";
import "./App.css";
import Particles from "react-tsparticles";
import particleConfig from "./particle_config";
import { loadFull } from "tsparticles";
import Extracurricular from "./components/extracurricular";
import Mindmap from "./components/mindmap";
import NamePanel from "./components/namepanel";
import Projects from "./components/projects";
import Experience from "./components/experience";
import Navbar from "./components/navbar";

function App() {
  useEffect(() => {
    document.title = "Arjun Lakshmi Narasimhan";
  }, []);

  const particlesInit = async (engine: any) => {
    console.log(engine);
    await loadFull(engine);
  };

  const particlesLoaded = async (container: any) => {
    console.log(container);
  };

  return (
    <div className="App">
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={particleConfig}
      ></Particles>
      <Navbar />
      <NamePanel />
      <Mindmap />
      <Experience />
      <Projects />
      <Extracurricular />

      <Container maxWidth={"lg"} id="foot">
        <h5>Handcrafted using React Typescript with Material UI Framework</h5>
      </Container>
    </div>
  );
}

export default App;
