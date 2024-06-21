import React, { useState } from 'react'
import '../src/App'

function Impressionbox({impstate,setImpstate}) {
  // const [impstate, setImpstate] = useState('inactive');
  return (
    <div id="impressionboxcontainer">
      <div id="ixclose" onClick={()=>{setImpstate('impactive')}}>X</div>
      <div id="iicon"><ion-icon name="information-circle" id="i"></ion-icon></div>  
      <h3>Welcome to My World of Creation!</h3>
      <button id="impok" onClick={() => {setImpstate('impactive') }}>OK</button>
    </div>
  )
}

export default Impressionbox