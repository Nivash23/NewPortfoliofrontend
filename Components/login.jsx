import React, { useState } from 'react'
import '../src/App'

function login({ loginbut, setLoginbut, regstate, setRegstate }) {
  const [loginDetails, setLoginDetails] = useState({
    email: "",
    password:""
  })

  const Loginhandler = async(e) => {
    e.preventDefault();

    const loginbody = {
      username: loginDetails.email,
      password:loginDetails.password
      
    }

    const response = await fetch('https://newportfoliobackend.onrender.com/api/login/', {
      method: "POST",
      headers: {
        "Content-type":"application/json"
      },
      body:JSON.stringify(loginbody)
    })
    const data = response.json();
    if (response.status == 200)
    {
      setLoginDetails({
        email: "",
        password:""
      })
      setLoginbut('loginbutinactive');
      }


  }
  return (
      <div id="logincontainer" class={loginbut} >
          <div id="lxclose" onClick={()=>{setLoginbut('loginbutinactive')}}>X</div>
          <div id="logform">
              <h3>Login</h3>
      <form onSubmit={Loginhandler}>

          
          <label>Username :</label>
      <div>

            <input type="email" placeholder='Enter your Email..'
            value={loginDetails.email}
            onChange={(e)=>{setLoginDetails({...loginDetails,email:e.target.value})}}
            required
            /> 
          </div>
          <label>Password :</label>
      <div>

            <input type="password" placeholder='Password..'
            value={loginDetails.password}
            onChange={(e)=>{setLoginDetails({...loginDetails,password:e.target.value})}}
            required
            
            />
        </div>
        
         <button id="lloginbut" type="submit"  onClick={Loginhandler}>Login</button>
         <div id="or">-----------------------OR-----------------------</div>
          <button id="lRegbut" type="button" onClick={() => {
            setRegstate('regactive');
            setLoginbut('loginbutinactive');
        }}>Register</button>
      </form>
          </div>
    </div>
  )
}

export default login