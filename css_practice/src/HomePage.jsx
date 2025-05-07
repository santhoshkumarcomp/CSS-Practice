import React from "react";
import FadeInSection from "./FadeInSection";

const HomePage = () => {
  return (
    <div>
      <FadeInSection>
        <h1>Hello, I fade in on scroll!</h1>
      </FadeInSection>
      <FadeInSection>
        <p>This is some more content that fades in.</p>
      </FadeInSection>
    </div>
  );
};

export default HomePage;
