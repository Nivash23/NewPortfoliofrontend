import React from 'react'
import '../src/App'

function login({loginbut,setLoginbut,regstate,setRegstate}) {
  return (
      <div id="logincontainer" class={loginbut} >
          <div id="lxclose" onClick={()=>{setLoginbut('loginbutinactive')}}>X</div>
          <div id="logform">
              <h3>Login</h3>
      <form>

          
          <label>Username :</label>
      <div>

          <input type="email" placeholder='Enter your Email..' /> 
          </div>
          <label>Password :</label>
      <div>

          <input type="password" placeholder='Password..' />
        </div>
        
         <button id="lloginbut" type="button" >Login</button>
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