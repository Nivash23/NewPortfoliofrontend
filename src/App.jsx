import React, { useState } from 'react'
import '../style/index.css'
import About from '../Components/About'
import Skills from '../Components/Skills'
import Projects from '../Components/Projects'
import Education from '../Components/Education'
import Contact from '../Components/Contact'
import Registration from '../Components/Registration'
import Impressionbox from '../Components/Impressionbox'
import Login from '../Components/login'

function App() {
  const [impstate, setImpstate] = useState('impinactive');
  const [regstate, setRegstate] = useState('reginactive');
  const [regbut, setRegbut] = useState('regbutinactive');
  const [loginbut, setLoginbut] = useState('loginbutinactive');
  return (
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
              
          
          
          <button id="sign" onClick={() => { setRegstate('regactive'); 
            
          }}>Signin</button>
        </div>


      </div>
        <About />
        <Impressionbox impstate={impstate } setImpstate={setImpstate} />
      <Registration regstate={regstate} setRegstate={setRegstate}  setLoginbut={setLoginbut} />
      <Login   loginbut={loginbut} setLoginbut={setLoginbut } regstate={regstate} setRegstate={setRegstate} />
        <Skills />
        <Projects />
        <Education />
        <Contact/>
    </div>
  )
}

export default App