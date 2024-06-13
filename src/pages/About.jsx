// import React from 'react';
import Hero from "../component/Hero";
import Description from "../component/component-about/Description";
import Review from "../component/component-about/Review";
import ViMi from "../component/component-about/ViMi";
import Footer from "../component/Footer";

const About = () => {
  return (
    <div>
      <div className="flex flex-col items-center">
        <div className="p-6 mt-[100px]">
          <Hero />
        </div>
        <Description />
        <ViMi />
        <div className="mt-5">
          <p className="text-[35px]">Review</p>
        </div>
        <Review />
        <Review />
      </div>
      <Footer />
    </div>
  );
};

export default About;
