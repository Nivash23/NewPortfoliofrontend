import React from 'react'
import '../style/index.css'
import '../src/App'

function Registration({ regstate, setRegstate ,setLoginbut}) {
  return (
    <div id="Regcontainer" class={regstate}>
      <div id='Rxclose' onClick={()=>{setRegstate('reginactive')}}>X</div>
      <div id="regform">

      
      <h3>Register</h3>
      <form>

          
          <label>Username :</label>
      <div>

          <input type="email" placeholder='Enter your Email..' />
          </div>
          <label>Name :</label>
      <div>

          <input type="text" placeholder='Enter your Name..' />
          </div>
          <label>Password :</label>
      <div>

          <input type="password" placeholder='Password..' />
        </div>
        
          <button id="regbut" type="button" onClick={() => {
            setRegstate('reginactive');
            setLoginbut('loginbutactive');
          }}>Register</button>
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