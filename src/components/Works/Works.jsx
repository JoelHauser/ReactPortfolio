import { useState } from "react";
import "./Works.scss";

export default function Works() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const data = [
    {
      id: "1",
      icon: "./assets/mobile.png",
      title: "FoxY",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
      img: "https://raw.githubusercontent.com/JoelHauser/Foxy/main/assets/images/Minimal_Animal_Red_Fox_Logo.png",
    },
    {
      id: "2",
      icon: "./assets/globe.png",
      title: "Fork that Orc",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      img: "https://raw.githubusercontent.com/JoelHauser/ReactPortfolio/develop/public/Assets/New%20Project.png",
    },
    {
      id: "3",
      icon: "./assets/writing.png",
      title: "Branding",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      img: "https://i.pinimg.com/originals/a9/f6/94/a9f69465d972a004ad581f245d6ad581.jpg",
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
