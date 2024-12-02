import React, { useEffect, useState } from 'react'
// import img1 from '../src/assets/Images/projectsimages/onlineshoppingimg.png';
// import img2 from '../src/assets/Images/projectsimages/Dictionaryimg.png';
// import img3 from '../src/assets/Images/projectsimages/Weatherimg.png';
// import img4 from '../src/assets/Images/projectsimages/CardsWebimg.png';
// import img5 from '../src/assets/Images/projectsimages/Restcountries.png';
// import img6 from '../src/assets/Images/projectsimages/PettycashManager.png';
// import img7 from '../src/assets/Images/projectsimages/bookingWeb.png';
// import img8 from '../src/assets/Images/projectsimages/E-commerce.png';
// // import img9 from '../src/assets/Images/projectsimages/resettingpassword.png';
// import img9 from '../src/assets/Images/projectsimages/Groerybasket.png';
// import img9 from '../src/assets/Images/projectsimages/PasswordReset.png';

import Cards from './Cards';


function Projects() {
  const [projectlist, setProjectlist] = useState([]);
  const [allprojects, setAllprojects] = useState([]);
    
  const handleprojects =async() => {
    const response = await fetch('https://newportfoliobackend.onrender.com/api/projects/')
    
    const data = await response.json();

    if (response.status == 200)
    {
      setAllprojects(data.Allprojects)
    }
  }

  // ]
  useEffect(() => {
    handleprojects();
  },[])

  const all = () => {
    setProjectlist(allprojects);
  }
  const frontendprojects = () => {
    let dummyprojects = [];
    allprojects.map((projects, i) => {
      
      if (projects.category == "Frontend")
        {
          dummyprojects.push(projects)
        }
      }
    )
    setProjectlist(dummyprojects);
  }
  const frontendandbackendprojects = () => {
    let dummyprojects1 = [];
    allprojects.map((projects, i) => {
      
      if (projects.category == "Frontend & Backend")
        {
          dummyprojects1.push(projects)
        }
      }
    )
    setProjectlist(dummyprojects1);
  }



  return (
      <div id="projectcontainer">
          <h1>Projects</h1>
        <p>I have worked on a wide range of projects.Here are some of my Projects.</p>
       
      <table>
      
        <tbody>
          <tr>
            <td onClick={all}>ALL</td>
            <td onClick={frontendprojects}>Frontend</td>
            <td onClick={frontendandbackendprojects}>Frontend & Backend</td>

          </tr>
        </tbody>
      </table>
      <div id="projectlists">
        <div class="row">

              {
                projectlist.map((p, i) =>
                  <div class="col-md-3">
                    <Cards image={p.imagesrc} projectName={p.ProjectName} implementation={p.Implementation} Codecheck={p.codecheck} Livecheck={p.livecheck} recoment={p.Recomendation } />
                  </div>
                )
               }
        </div>
      </div>
    </div>
  )
}

export default Projects