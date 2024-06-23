import React, { useState } from 'react'
import '../style/index.css'
import '../src/App'

function Registration({ regstate, setRegstate, setLoginbut }) {
   const [regDetails, setRegDetails] = useState({
    email: "",
    name: "",
    password:""
  })

  const Reghandler = async(e) => {
    e.preventDefault();

    const regbody = {
      username: regDetails.email,
      name: regDetails.name,
      password:regDetails.password
      
    }

    const response = await fetch('https://newportfoliobackend.onrender.com/api/register/', {
      method: "POST",
      headers: {
        "Content-type":"application/json"
      },
      body:JSON.stringify(regbody)
    })
    const data = response.json();
    if (response.status == 200)
    {
      setRegDetails({
        email: "",
        name: "",
        password:""
      })
      setRegstate('reginactive');
      setLoginbut('loginbutactive');
      }


  }
  return (
    <div id="Regcontainer" class={regstate}>
      <div id='Rxclose' onClick={()=>{setRegstate('reginactive')}}>X</div>
      <div id="regform">

      
      <h3>Register</h3>
      <form onSubmit={Reghandler}>

          
          <label>Username :</label>
      <div>

            <input type="email" placeholder='Enter your Email..'
            value={regDetails.email}
            onChange={(e)=>{setRegDetails({...regDetails,email:e.target.value})}}
            required
            
            />
          </div>
          <label>Name :</label>
      <div>

            <input type="text" placeholder='Enter your Name..'
            value={regDetails.name}
            onChange={(e)=>{setRegDetails({...regDetails,name:e.target.value})}}
            required
            />
          </div>
          <label>Password :</label>
      <div>

            <input type="password" placeholder='Password..'
            value={regDetails.password} 
            onChange={(e) => { setRegDetails({ ...regDetails, password: e.target.value }) }}
            required  
            
            
            />
        </div>
        
          <button id="regbut" type="submit" onClick={Reghandler}
          
          >Register</button>
        <div id="or">-----------------------OR-----------------------</div>
          <button id="loginbut" type="button" onClick={() => {
            setRegstate('reginactive');
            setLoginbut('loginbutactive');
        }}>Login</button>
      </form>
      </div>
    </div>
  )
}

export default Registration