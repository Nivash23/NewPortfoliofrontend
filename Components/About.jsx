import React, { useEffect, useState } from 'react'
import '../style/index.css'
import profile from '../src/assets/Images/profilephoto.jpg'


function About() {
  
  return (
    <div id='About'>
      
      <div id="abt">

        <div id="name" >Hi,I am </div>
        <div class="name1">NIVASH R</div>
        <div id="role">I am a Passionate </div>
        <div class="role1">Web Developer</div>

        <p> A highly motivated and hardworking individual looking for a responsible role in a
          reputable organization.</p>
        <button id="Resumebtn" type="submit" onClick={()=>{window.open('https://drive.google.com/file/d/1-6ozlFAppMhUuAu7deDum5dIQ6qIw-8c/view')}}>Check Resume</button>
      </div>
        <div>

         <img id="profile" src={profile} alt="" />
        </div>
    </div>
  )
}


export default About