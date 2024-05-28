import React, { useRef } from "react";
import "./FourthPageStyle.css";
import emailjs from 'emailjs-com';
import { motion } from "framer-motion";

export default function Fourthpage() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_ijjp6xk', 'template_i3w05bd', form.current, 'j6Wd5q1xuAsnXM0QG')
      .then(
        (result) => {
          console.log('SUCCESS!', result.text);
        },
        (error) => {
          console.log('FAILED...', error.text);
        }
      );
  };

  return (
    <div className="FourthPage" id="contact">
      <h2 className="logo">Contact Me</h2>

      <div className="f-hero">
        <motion.div
          initial={{ opacity: 0, y: "120px" }}
          whileInView={{ opacity: 1, y: "60px" }}
          transition={{ delay: 1, duration: 1.5 }}
          viewport={{ once: true }}
          className="f-left"
        >
          <h3 className="f-head">Contact Info</h3>
          <div>
            <h3>Phone</h3>
            <h4>+91 8220852483</h4>
          </div>
          <div>
            <h3>E-mail</h3>
            <h4>muzamil112004@gmail.com</h4>
          </div>
          <div>
            <h3>Date of Birth</h3>
            <h4>11-02-2004</h4>
          </div>
          <div>
            <h3>Location</h3>
            <h4>Thottiyam ,Trichy </h4>
          </div>
        </motion.div>
        <div className="f-right">
          <motion.div
            initial={{ opacity: 0, y: "-60px" }}
            whileInView={{ opacity: 1, y: "55px" }}
            transition={{ delay: 1, duration: 1.5 }}
            viewport={{ once: true }}
          >
            <form ref={form} onSubmit={sendEmail}>
              <h2>Send a Message</h2>
              <span className="c-name">
                <span className="FirstName">
                  <label htmlFor="FirstName">First Name</label>
                  <input type="text" name="first_name" placeholder="First Name" />
                </span>
                <span className="LastName">
                  <label htmlFor="FirstName">Last Name</label>
                  <input type="text" name="last_name" placeholder="Last Name" />
                </span>
              </span>
              <span className="email">
                <label htmlFor="Email">Email</label>
                <input type="text" name="user_email" placeholder="Example@gmail.com" />
              </span>
              <label htmlFor="Message">Message</label>
              <textarea name="message" id="message" cols="30" rows="10" placeholder="Leave a Message"></textarea>
              <input type="submit" className="" value="Send" />
            </form>
          </motion.div>
        </div>
      </div>
      <footer>
      <div class="footer-col">
            <h4>follow us</h4>
            <div class="links">
                <a href="#"><i class="fab fa-linkedin-in"></i></a>
                <a href="#"><i class="fab fa-facebook-f"></i></a>
                <a href="#"><i class="fab fa-twitter"></i></a>
                <a href="#"><i class="fab fa-instagram"></i></a>
            </div>
        </div>
    </footer>
    </div>
    
  );
}
