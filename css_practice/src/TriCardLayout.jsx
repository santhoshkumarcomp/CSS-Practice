import React from "react";
import young from "./assets/me1.png";
const TriCardLayout = () => {
  return (
    <div className="section2">
      <div>
        <div className="container2">
          <div>
            <h1>
              My Journey: From Curious Student to Software Engineer
              <hr className="scroll-watcher" />
            </h1>
            <br />
            <br />
            <div className="two-split">
              <div className="job-title">The Engineer</div>
              <div className="inner-split">
                <img src={young} className="young" />
                <p className="oswald-light para ">
                  From a young age, I was always curious about how things
                  worked—especially computers. That curiosity grew into a
                  passion, and it shaped every decision I made through my
                  academic journey. I began my formal education with a strong
                  focus on mathematics and science, always eager to explore how
                  technology could solve real-world problems. This interest only
                  deepened as I progressed through school, where I often found
                  myself fascinated by logic, problem-solving, and the potential
                  of software to bring ideas to life.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TriCardLayout;
