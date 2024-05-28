import React from "react";
import { motion } from "framer-motion";
import "./SecondPageStyle.css";

export default function SecondPage() {
  return (
    <>
      <div className="SecondPage" id="about">
        <div className="about-up">
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
              <p><span>
                Hello! I'm Mohammed Muzamil</span><br /> <br /> A cybersecurity professional with 2
                years of experience in threat analysis, penetration testing, and
                network security. I hold certifications like cisco upskill
                Certifications and have worked on projects to identify
                vulnerabilities and implement security measures. Proficient in
                tools like Metasploit,Nmap,Git-Clone,Air Crack-ng.
              </p>
            </div>
            
          </motion.div>  </div>
          <p className="s-second">
            I,m pursuing B.TECH Artificial intelligence and data science in Dhanalakshimi srinivasan Engineering Collage. I am intrested in the domain of cyber security and Ethical Hacking . I started my journey as a open source contributing many open source works.
          </p>  </div> </div>
        
     

    
      
    </>
  );
}
