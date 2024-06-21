import React from 'react'
import '../style/index.css'
import c from '../src/assets/Images/skillsimages/c.png'
import java from '../src/assets/Images/skillsimages/java.jpg'
import html from '../src/assets/Images/skillsimages/html-logo.svg'
import css from '../src/assets/Images/skillsimages/css logo.png'
import boot from '../src/assets/Images/skillsimages/Bootstrap_logo.svg'
import js from '../src/assets/Images/skillsimages/JavaScript-logo.png'
import react from '../src/assets/Images/skillsimages/React.webp'
import mongodb from '../src/assets/Images/skillsimages/mongodb.png'
import express from '../src/assets/Images/skillsimages/expressjs.png'
import node from '../src/assets/Images/skillsimages/node.png'
import git from '../src/assets/Images/skillsimages/git.png'
import github from '../src/assets/Images/skillsimages/github.webp'
import netlify from '../src/assets/Images/skillsimages/netlify.png'
import render from '../src/assets/Images/skillsimages/render.png'
import vite from '../public/vite.svg'
import vscode from '../src/assets/Images/skillsimages/vscode.jpeg'
import devtool from '../src/assets/Images/skillsimages/devtools.jpeg'

function Skills() {
  return (
      <div id="skillscontainer">
          <h1 id="skillhead">Skills</h1>
          <p id="skilldesc">Here are some of my skills on which I have learnt.</p>
          <div id="skills">
              
        <div id="skillslist">
          <h2>Frontend & Backend</h2>
              <div id="lstone">  
                <div><img src={c} alt="c"/>C</div>
                <div><img src={java} alt="java"/>Java</div>
                <div><img src={html} alt="HTML"/>HTML</div>
                <div><img src={css} alt="css"/>CSS</div>
              </div>
              <div id="lsttwo">
                  
                <div><img src={boot} alt="Bootstrap"/>BootStrap</div>
                <div><img src={js} alt="Javascript"/>JavaScript</div>
                <div><img src={react} alt="Reactjs"/>ReactJS</div>
              </div>
              <div id="lstthree">  
                <div><img src={mongodb} alt="MongoDB"/>MongoDB</div>
                <div><img src={express} alt="Expressjs"/>ExpressJS</div>
                <div><img src={node} alt="Nodejs"/>NodeJS</div>
              </div>
          </div>
        <div id="otherskills">
                 <h2>Others</h2>
                  <div id="other">
                      
                    <div><img src={git } />Git</div>
                    <div><img src={github}  /> Github</div>
                    <div><img src={netlify}  /> Netlify</div>
                  </div>
                  <div id="other1">
                      
                    <div><img src={render}  /> Render</div>
                    <div><img src={vite}  /> Vite</div>
                    
                  </div>
                  <div id="other2">
                    <div><img src={vscode}  /> VS Code</div>
                    <div><img src={devtool}  /> Chrome Dev tools</div>
                  </div>
           
          
               </div>
           </div>
    </div>
  )
}

export default Skills