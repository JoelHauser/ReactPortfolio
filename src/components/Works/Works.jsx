import { useState } from "react";
import "./Works.scss";

export default function Works() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const data = [
    {
      id: "1",
      icon: "./assets/mobile.png",
      title: "FoxY",
      desc: "Foxy is a site that lets you curate a list of foxes with assigned names/homes/bios and other information.",
      img: "https://raw.githubusercontent.com/JoelHauser/Foxy/main/assets/images/Minimal_Animal_Red_Fox_Logo.png",
    },
    {
      id: "2",
      icon: "./assets/mobile.png",
      title: "Fork that Orc",
      desc: "This application is designed with gamers in mind. If you have ever had issues coming up with a fun build for your favorite RPG style game, then this app may have what you're wanting.",
      img: "https://raw.githubusercontent.com/JoelHauser/ReactPortfolio/develop/public/Assets/New%20Project.png",
    },
    {
      id: "3",
      icon: "./assets/globe.png",
      title: "Thought Boxer",
      desc: "Thought Boxer is an application that you can use to weigh opinions on a given topic or situation in your life. If you want to settle a score, get advice, or have a little help in making a decision.",
      img: "https://raw.githubusercontent.com/JoelHauser/ReactPortfolio/main/public/Assets/Copy%20of%20Thought%20Boxer.png",
    },
  ];

  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };

  return (
    <div className="works" id="works">
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {data.map((d) => (
          <div className="container">
            <div className="item">
              <div className="left">
                <div className="leftcontainer">
                  <div className="imgcontainer">
                    <img src={d.icon} alt="" />
                  </div>
                  <h2>{d.title}</h2>
                  <p>{d.desc}</p>
                  {/* <span>Projects</span> */}
                </div>
              </div>
              <div className="right">
                <img
                  src={d.img}
                  alt="images"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      <img
        src="Assets/arrow.png"
        className="arrow left"
        alt="arrow"
        onClick={() => handleClick("left")}
      />
      <img
        src="Assets/arrow.png"
        className="arrow right"
        alt="arrow"
        onClick={() => handleClick()}
      />
    </div>
  );
}
