import React, { useEffect, useState } from 'react'
import '../style/index.css'
import About from '../Components/About'
import Skills from '../Components/Skills'
import Projects from '../Components/Projects'
import Education from '../Components/Education'
import Contact from '../Components/Contact'

// import Registration from '../Components/Registration'
import Impressionbox from '../Components/Impressionbox'
// import Login from '../Components/login'
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";


function App() {
  const [impstate, setImpstate] = useState('impinactive');

  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log(container);
  };

  
  // const [regstate, setRegstate] = useState('reginactive');
  // const [regbut, setRegbut] = useState('regbutinactive');
  // const [loginbut, setLoginbut] = useState('loginbutinactive');
  return (
    <div>
      {init && (
        <Particles
          id="tsparticles"
          particlesLoaded={particlesLoaded}
          options={{
            fullScreen: {
              enable: true,
              zIndex: -1,
            },
            background: {
              color: {
                value: "#000000",
              },
            },
            fpsLimit: 120,
            interactivity: {
              events: {
                onClick: {
                  enable: true,
                  mode: "push",
                },
                onHover: {
                  enable: true,
                  mode: "repulse",
                  smooth: 10
                },
                resize: true,
              },
              modes: {
                push: {
                  quantity: 4,
                },
                repulse: {
                  distance: 200,
                  duration: 0.4,
                },
              },
            },
            particles: {
              color: {
                value: "#89CFF0",
              },
              links: {
                color: "#FF0000",
                distance: 150,
                enable: true,
                opacity: 0.5,
                width: 4,
              },
              move: {
                direction: "none",
                enable: true,
                outModes: {
                  default: "bounce",
                },
                random: false,
                speed: 6,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                  area: 800,
                },
                value: 80,
              },
              opacity: {
                value: 0.1,
              },
              shape: {
                type: "circle",
              },
              size: {
                value: { min: 1, max: 5 },
              },
            },
            detectRetina: true,
          }}
        />
      )}
      

    <div id='container' class={impstate}>
      <div id='navigationbar'>
        <div id='menu'>
          <div id="user"></div>
          <div> Portfolio</div>
        </div>
        <div id='list'>
          <div id="abtbtn"  onClick={()=>{window.scrollBy(0,10)}}>About</div>
          <div id="sklbtn" onClick={()=>{window.scrollBy(170,400)}}>Skills</div>
          <div id="prtsbtn" onClick={()=>{window.scrollBy(600,1000)}}>Projects</div>
          <div id="edubtn" onClick={() => {window.scrollBy(0,1750)}} >Education</div>
        </div>
        <div id="dropdown">
          <button id="listofmenu" type='button' data-bs-toggle="dropdown">Menu</button>

            <ul class="dropdown-menu">
              <li class="dropdown-item" onClick={()=>{window.scrollBy(0,10)}}>About</li>
              <li class="dropdown-item" onClick={()=>{window.scrollBy(170,400)}}>Skills</li>
              <li class="dropdown-item" onClick={()=>{window.scrollBy(600,1000)}}>Projects</li>
              <li class="dropdown-item" onClick={() => {window.scrollBy(0,1750)}}>Education</li>
              {/* <li ><a class="dropdown-item" href="#">About</a></li>
              <li ><a class="dropdown-item" href="#">About</a></li> */}
          </ul>
              
          
          
          {/* <button id="sign" onClick={() => { setRegstate('regactive'); 
            
          }}>Signin</button> */}
        </div>


      </div>
        <About />
        <Impressionbox impstate={impstate } setImpstate={setImpstate} />
      {/* <Registration regstate={regstate} setRegstate={setRegstate}  setLoginbut={setLoginbut} /> */}
      {/* <Login   loginbut={loginbut} setLoginbut={setLoginbut } regstate={regstate} setRegstate={setRegstate} /> */}
        <Skills />
        <Projects />
        <Education />
        <Contact/>
    </div>
    </div>
  )
}

export default App