import React, { useState } from "react";
import rock from "../src/assets/Images/projectsimages/rocket.jpeg";
import '../style/index.css'

function Contact() {
  const [responsemessge, setResponsemessge] = useState();
  const [contactdetails, setContactdetails] = useState({
    email: "",
    name: "",
    subject: "",
    message:""
  })
  const contactHandler = async (e) => {
    e.preventDefault();
    setResponsemessge("Sending...");
    const contact = {
      email: contactdetails.email,
      name: contactdetails.name,
      Subject: contactdetails.subject,
      message:contactdetails.message
    }

    const response = await fetch('https://newportfoliobackend.onrender.com/api/sendmail/',
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(contact),
        
      }
    );
    const result = await response.json();
    if (response.status == 200)
    {
      setContactdetails({
        email: "",
        name: "",
        subject: "",
        message: ""
      });
      setResponsemessge(result.message)
      }
      setTimeout(() => {
        setResponsemessge('');
      },4000)
  }
  return (
    <div id="contact">
      <h1>Contact</h1>
      <p>Feel free to reach out to me for any questions or opportunities!</p>

      <div id="contactcontainer">
        <h5 id="ehead">Email Me <img src={rock} /></h5>
        <form onSubmit={contactHandler}>

        <input id="cemail" type="email"
          placeholder="Your Email"
          value={contactdetails.email}
          onChange={(e) => {setContactdetails({...contactdetails,email:e.target.value})}}
        />
        <input id="cname" type="text"
          placeholder="Your Name"
          value={contactdetails.name}
          onChange={(e)=>{setContactdetails({...contactdetails,name:e.target.value})}}
        />
        <input id="csubject" type="text"
          placeholder="Subject"
          value={contactdetails.subject}
          onChange={(e)=>{setContactdetails({...contactdetails,subject:e.target.value})}}
        />
        {/* <input id="cmessage" type="text" placeholder="Message" ro /> */}
        <textarea id="cmessage"
          placeholder="Message"
          value={contactdetails.message}
          onChange={(e)=>{setContactdetails({...contactdetails,message:e.target.value})}} ></textarea>

          <button id="esend" type="submit" onClick={contactHandler}>Send</button>
          <div id="resmsg">{responsemessge }</div>
        
      </form>

        
      </div>
      <div id="socialmedias">
        <div><i class="fa fa-phone" onClick={()=>{window.location.href="https://www.phone.com"}} ></i></div>
        <div><i class="fa fa-github" onClick={()=>{window.location.href="https://github.com/Nivash23?tab=repositories"}}></i></div>
        <div><i class="fa fa-linkedin" onClick={()=>{window.location.href="https://www.linkedin.com/in/nivash-r-845a61269/"}}></i></div>
        <div><i class="fa fa-envelope" onClick={()=>{window.location.href="https://mail.google.com/mail/u/0/#inbox"}}></i></div>
        <div><i class="fa fa-whatsapp" onClick={()=>{window.location.href="https://wa.me/+919360154633"}}></i></div>
      </div>
    </div>
  );
}

export default Contact;
