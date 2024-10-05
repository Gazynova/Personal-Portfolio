import { useEffect, useState } from "react";
import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters";
import "./index.scss";

const ProjectCard = () => {
  const [letterClass, setLetterClass] = useState("text-animate");

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 4000);

    return () => {
      clearTimeout(timeoutId); // Cleanup: Clear the timeout when the component unmounts.
    };
  }, []);

  const cards = [
    {
      title: "Mountain View",
      copy: "Check out all of these gorgeous mountain trips with beautiful views of, you guessed it, the mountains",
      button: "Visit",
      link: "https://www.youtube.com/",
    },
    {
      title: "To The Beach",
      copy: "Plan your next beach trip with these fabulous destinations",
      button: "Visit",
      link: "https://www.youtube.com/",
    },
    {
      title: "Desert Destinations",
      copy: "It's the desert you've always dreamed of ",
      button: "Visit",
      link: "https://www.youtube.com/",
    },
    {
      title: "Explore Galaxy",
      copy: "Seriously, straight up, just blast off into outer space today",
      button: "Visit",
      link: "https://www.youtube.com/",
    },
    {
      title: "Explore Galaxy",
      copy: "Seriously, straight up, just blast off into outer space today",
      button: "Visit",
      link: "https://www.youtube.com/",
    },
    {
      title: "Desert Destinations",
      copy: "It's the desert you've always dreamed of ",
      button: "Visit",
      link: "https://www.youtube.com/",
    },
  ];

  const nameArray = ["P", "r", "o", "j", "e", "c", "t", "s"];

  return (
    <div className="Project">
      <div className="text-zone">
        <h1>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={nameArray}
            idx={15}
          />
        </h1>
      </div>
      <div className="project-card">
        {cards.map((card, index) => (
          <div className="card" key={index}>
            <div className="content">
              <div className="front">
                <h2 className="title">{card.title}</h2>
                <button
                  className="btn"
                  onClick={() => window.open(card.link, "_blank")}
                >
                  {card.button}
                </button>
              </div>
              
              <div className="back">
                <p className="copy">{card.copy}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Loader type="pacman" />
    </div>
  );
};

export default ProjectCard;
