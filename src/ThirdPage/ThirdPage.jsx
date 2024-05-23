import React from "react";
import "./ThirdPageStyle.css";
import { motion } from "framer-motion";

export default function ThirdPage() {
  return (
    <div className="ThirdPage" id="skills">
      <h2 className="logo">My Skills</h2>
      <div className="t-hero">
        <div className="t-left">
          <div className="t-skill">
            <div className="skill-name">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1, x: 50 }}
                transition={{ delay: 1 }}
                viewport={{ once: true }}
              >
                <span>
                  <img src="/logo-1.png" alt="Cyber Talks" />
                  <h5>Cyber Talks</h5>
                </span>
                <div className="progress-bg">
                  <p className="p1"></p>
                  <p className="percent"></p>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1, x: 50 }}
                transition={{ delay: 1.4 }}
                viewport={{ once: true }}
              >
                <span>
                  <img src="/logo-2.png" alt="Hardware and IOT" />
                  <h5>Hardware and IOT</h5>
                </span>
                <div className="progress-bg">
                  <p className="p2"></p>
                  <p className="percent"></p>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1, x: 50 }}
                transition={{ delay: 1.8 }}
                viewport={{ once: true }}
              >
                <span>
                  <img src="/logo-3.png" alt="Teaching" />
                  <h5>Teaching</h5>
                </span>
                <div className="progress-bg">
                  <p className="p3"></p>
                  <p className="percent"></p>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1, x: 50 }}
                transition={{ delay: 2.2 }}
                viewport={{ once: true }}
              >
                <span>
                  <img src="/logo-4.png" alt="Art" />
                  <h5>Art</h5>
                </span>
                <div className="progress-bg">
                  <p className="p4"></p>
                  <p className="percent"></p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
        <div className="t-right">
          <div className="skill-img">
            <motion.div className="col-1">
              <motion.img
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1, x: -80 }}
                transition={{ delay: 1 }}
                viewport={{ once: true }}
                src="/img/linux.png"
                alt="Linux"
              />
              <motion.img
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1, x: -80 }}
                transition={{ delay: 1.4 }}
                viewport={{ once: true }}
                src="/img/bash.png"
                alt="Bash"
              />
            </motion.div>
            <motion.div className="col-2">
              <motion.img
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1, x: -80 }}
                transition={{ delay: 1 }}
                viewport={{ once: true }}
                className="python"
                src="/img/python.png"
                alt="Python"
              />
              <motion.img
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1, x: -80 }}
                transition={{ delay: 1.4 }}
                viewport={{ once: true }}
                className="git"
                src="/img/git1.png"
                alt="GitHub"
              />
            </motion.div>
          </div>
        </div>
      </div>
      <div className="logos">
        <h1 className="logo">My Strong Foundations</h1>
        <div className="logos-slide">
          <img className="terminal" src="/img/1.png" alt="Terminal" />
          <img className="adurino" src="/img/2.png" alt="Arduino" />
          <img className="network" src="/img/3.png" alt="Networking" />
          <img className="bs" src="/img/4.png" alt="Bootstrap" />
          <img className="html" src="/img/5.png" alt="HTML" />
          <img className="tor" src="/img/6.png" alt="Tor" />
        </div>
        <div className="logos-slide">
          <img className="terminal" src="/img/1.png" alt="Terminal" />
          <img className="adurino" src="/img/2.png" alt="Arduino" />
          <img className="network" src="/img/3.png" alt="Networking" />
          <img className="bs" src="/img/4.png" alt="Bootstrap" />
          <img className="html" src="/img/5.png" alt="HTML" />
          <img className="tor" src="/img/6.png" alt="Tor" />
        </div>
      </div>
    </div>
  );
}
