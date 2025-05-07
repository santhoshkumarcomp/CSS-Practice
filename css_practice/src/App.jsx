import React from "react";
import actualVideoFile from "./assets/webVideo1.mp4"; // Or the correct path to your video
// import typingVideo from "./assets/world.png"; // This was likely a mistake if a video was intended
import world from "./assets/world.png";
import CardLayout from "./CardLayout";
import TriCardLayout from "./TriCardLayout";
const App = () => {
  return (
    <div className="main">
      <video src={actualVideoFile} autoPlay loop muted />
      <div className="content">
        <h1>Hello There</h1>
        <p>Journey begins...</p>
      </div>

      <CardLayout />
      <TriCardLayout />

      {/* <video src={webVideo} autoPlay loop muted />
      <div className="content">
        <h1>Hello There</h1>
        <p>Journey begins...</p>
      </div> */}

      <div className="main">
        <div className="image-container">
          <img src={world} alt="" className="world" />
          <div className="quote1 merienda-Light">
            <h1>
              IT MATTERS NOT WHAT SOMEONE IS BORN,BUT WHAT THEY GROW TO BE
            </h1>
          </div>
        </div>
      </div>
      <TriCardLayout />
    </div>
  );
};

export default App;
