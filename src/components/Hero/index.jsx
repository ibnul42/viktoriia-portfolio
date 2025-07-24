import React from "react";
import "./Hero.css";
import Image from '../../assets/Image-01.svg'

const Hero = () => {
  return (
    <div className="container mb-4">
      <div className="row">
        <div className="col-md-6 col-sm-12 d-flex flex-column justify-content-center hero_text">
          <h2>Hi there,</h2>
          <p>I'm a Web Developer with excellent skill in developing websites and hybrid applications—both informational and transactional. I specialize in creating responsive, user-friendly interfaces and performance-optimized solutions. With a strong understanding of modern frameworks and tools, I turn complex ideas into functional, elegant digital experiences that deliver real value.</p>
          {/* <button type="button" className="btn_my_resume">My Resume</button> */}
        </div>
        <div className="col-md-6 col-sm-12">
          <img src={Image} alt="" className="img-fluid" style={{maxWidth: "80%"}} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
