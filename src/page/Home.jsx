import React from "react";
import Hero from "../components/homeCompo/Hero";
import { useOutletContext } from "react-router-dom";
import About from "../components/homeCompo/aboutCompo/About";
import image from "../img/kk.png"
import ResumeRow from "../components/homeCompo/resumeRow/ResumeRow";
import Portfolio from "../components/homeCompo/portfolio/Portfolio";
import Blog from "../components/homeCompo/blog/Blog";
import Contact from "../components/homeCompo/contact/Contact";
import Services from "../components/homeCompo/services/Services";
import FigureRow from "../components/homeCompo/figuers/FigureRow";

function Home() {
  const [navbar] = useOutletContext();

  return (
    <>
      <Hero
        semiTitle="HEY! I AM"
        title="Kevadiya Kishan"
        subtitle="Web Designer."
        fixTitle="I'm a"
      />

      {navbar}

      <About 
        image={image}  
        aboutTitle="UI/UX Designer & Web Developer"
        aboutInfo="Tempor eos dolore amet tempor dolor tempor. Dolore ea magna sit amet dolor eirmod. Eos ipsum est tempor dolor. Clita lorem kasd sed ea lorem diam ea lorem eirmod duo sit ipsum. Amet dolor stet lorem diam dolor justo et dolor dolor dolor"
        
      />

      <ResumeRow />
      <Services />
      <Portfolio />
      <Blog />
      <FigureRow />
      <Contact />
    </>
  );
}

export default Home;
