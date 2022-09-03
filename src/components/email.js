import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Card } from '@material-ui/core';

export const Email = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_m5afr5m', 'template_h4xd0b6', form.current, 'stStji-w7rDaymj08')
      .then((result) => {
          console.log(result.text);
          console.log("Messsage sent successfully!")
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div>
      <Card style={{ maxWidth: 580, margin:30,maxHeight:600,borderRadius:50}}>
      <form ref={form} onSubmit={sendEmail}>
      <label style={{display:'block',textAlign:'center', fontWeight:1000, fontSize:24}}>Put me a quick message</label><br/>
      <label style={{display:'block',textAlign:'left'}}>Your Full Name</label>
      <input type="text" name="to_name" class="feedback-input"/>
      <label style={{display:'block',textAlign:'left'}}>Your Email Address</label>
      <input type="email" name="from_name" class="feedback-input"/>
      <label style={{display:'block',textAlign:'left'}}>Message</label>
      <textarea name="message" class="feedback-input"/>
      <input type="submit" value="Send" />
    </form>
      </Card>
    </div>
  );
};