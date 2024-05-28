import React from "react";
import {motion} from "framer-motion"
import "../SecondPage/SecondPageStyle.css";

function QulaificationPage() {
  return (
    <div className="Qulaification">
      
      <h2 className="logo s-logo" id="Qualification">
        Qualification
      </h2>
      <div className="tree">
        <h3>Education</h3>
        <h3>Works</h3>
      </div>
      <div className="timeLine">
        <motion.div
          initial={{ opacity: 1, y: -130 }}
          whileInView={{ opacity: 1, y: 50 }}
          transition={{ duration: 2 }}
          viewport={{ once: true }}
          className="timeLine-container left-timeLine-container"
        >
          <p className="image"></p>
          <div className="text-box">
            <h2>Schooling</h2>
            <p>
              <b>Sowdambika Matric & Higher Secondary School</b>
            </p>
            <p>Trichy-X</p>
            <small>2018 - 2019</small>
            <p>
              <b>Sowdambika Matric & Higher Secondary School</b>
            </p>
            <p>Trichy-XII</p>
            <small>2019 - 2021</small>
            <span className="left-timeLine-arrow"></span>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 1, y: -130 }}
          whileInView={{ opacity: 1, y: 50 }}
          transition={{ duration: 2, delay: 0.5 }}
          viewport={{ once: true }}
          className="timeLine-container right-timeLine-container"
        >
          <p className="image"></p>
          <div className="text-box">
            <h2>Intern </h2>

            <p>Razz Security,Banglore-Cybersecurity Researcher</p>
            <ul>
              <li>
                Assited in Monitoring security events and responding to
                incidents.
              </li>
              <li>
                Participated in security awareness on Breach Notification
                platforms.
              </li>
            </ul>
            <small>Jun2023 -Aug2023</small>
            <span className="right-timeLine-arrow"></span>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 1, y: -130 }}
          whileInView={{ opacity: 1, y: 50 }}
          transition={{ duration: 2, delay: 1 }}
          viewport={{ once: true }}
          className="timeLine-container left-timeLine-container"
        >
          <p className="image"></p>
          <div className="text-box">
            <h2>Pursuing</h2>

            <p>
              Dhanalakshimi Srinivasan Enginering college (Perambalur) - B.Tech
              AI&DS
            </p>
            <small>2021-2025</small>
            <span className="left-timeLine-arrow"></span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default QulaificationPage;
