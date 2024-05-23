import React from "react";
import { motion } from "framer-motion";
import "./SecondPageStyle.css";

export default function SecondPage() {
  return (
    <>
      <div className="SecondPage" id="about">
        <h2 className="logo">About Me!</h2>
        <div className="s-hero">
          <motion.div
            initial={{ opacity: 0, scale: 0.1 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="s-left"
          >
            <img src="/software tester.gif" alt="" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.1 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="s-right"
          >
            <h2>CyberSecurity Researcher</h2>
            <div className="s-content">
              <p>
                Hello! I'm Mohammed Muzamil, a cybersecurity professional with 2
                years of experience in threat analysis, penetration testing, and
                network security. I hold certifications like cisco upskill
                Certifications and have worked on projects to identify
                vulnerabilities and implement security measures. Proficient in
                tools like Metasploit,Nmap,Git-Clone,Air Crack-ng.
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      <h2 className="logo s-logo" >Qulification</h2>
      <div className="tree">
        <h3 >Education</h3>
        <h3>Works</h3>
      </div>

      <div className="timeLine">
        <div className="timeLine-container left-timeLine-container">
          <p className="image"></p>
          <div className="text-box">
            <h2>Schooling</h2>
            <p><b>Sowdambika Matric & Higher Secondary School</b></p>
            <p>Trichy-X</p>
            <small>2018 - 2019</small>
            <p><b>Sowdambika Matric & Higher Secondary School</b></p>
            <p>Trichy-XII</p>
            <small>2019 - 2021</small>
            <span className="left-timeLine-arrow"></span>
          </div>
        </div>
        <div className="timeLine-container right-timeLine-container">
          <p className="image"></p>
          <div className="text-box">
            <h2>Intern </h2>
            
            <p>Razz Security,Banglore-Cybersecurity Researcher</p>
           <ul> <li>Assited in Monitoring security events and responding to incidents.</li>
            <li>Participated in security awareness on Breach Notification platforms.</li></ul>
            <small>Jun2023 -Aug2023</small>
            <span className="right-timeLine-arrow"></span>
          </div>
        </div>
        <div className="timeLine-container left-timeLine-container">
          <p className="image"></p>
          <div className="text-box">
            <h2>Pursuing</h2>
            
            <p>Dhanalakshimi Srinivasan Enginering college
            Perambalur- B.Tech AI&DS</p>
            <small>2021-2025</small>
            <span className="left-timeLine-arrow"></span>
          </div>
        </div>
      </div>
    </>
  );
}
