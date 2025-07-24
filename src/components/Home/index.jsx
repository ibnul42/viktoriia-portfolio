import Achievement from "../achievements";
import Experience from "../experience";
import Hero from "../Hero";
import Project from "../projects";
import Skill from "../Skill";

const Home = () => {
  return (
    <>
      <Hero />
      <div className="container">
        <div className="hr_line"></div>
      </div>
      <Project />
      <div className="container">
        <div className="hr_line"></div>
      </div>
      <Skill />
      <div className="container">
        <div className="hr_line"></div>
      </div>
      <Experience />
      <div className="container">
        <div className="hr_line"></div>
      </div>
      <Achievement />
    </>
  );
};

export default Home;
