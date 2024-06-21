import React from 'react'
import '../style/index.css'

function Cards({image,projectName,implementation,Codecheck,Livecheck,recoment}) {
  return (
    <div className="card text-center">
      <div className="overflow">
        <img  id='image'  src={image} alt='image'/>
      </div>
      <div className='card-body-text'>
        <h6 className="card-title">{implementation }</h6>
        <div className='card-text text-secondary'>{projectName}</div>
        <div id="recoment">{recoment }</div>
        {/* <a id='read' href={props.url } >Read more{more} </a> */}
        <div id="buttons">
          <button onClick={()=>{window.location.href=Codecheck}}>check code</button>
          <button onClick={()=>{window.location.href=Livecheck}}>live</button>
 
        </div>
      </div>


   </div>
  )
}

export default Cards