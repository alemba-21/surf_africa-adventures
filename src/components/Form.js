import "./Form.css";
import React from 'react'
import { useRef } from 'react';
import emailjs from "emailjs-com"

const Form = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_h4dwvev', 'template_wuog0wf', form.current, '7VJ44ZC_DfK2Tcajm')
        
        e.target.reset()
      };
    

  return (
    <div className="form">
        <form ref={form} onSubmit={sendEmail}>
            <label>Your Name</label>
            <input text="text" name="name" placeholder="Type Your Name"></input>
            <label>Email</label>
            <input text="text" name="email" placeholder="Write Your Email"></input>
            <label>Message</label>
            <textarea rows="6" name="message" placeholder="Type your message here"/>
            <button className="btn-3">Submit</button>
        </form>
    </div>
  )
}

export default Form