import { useEffect, useState } from "react";
import PortfolioList from "../PortfolioList/PortfolioList";
import "./Portfolio.scss";
import {
  featuredPortfolio,
  webPortfolio,
  mobilePortfolio,
} from "../../data";

export default function Portfolio() {
  const [selected, setSelected] = useState("featured");
  const [data, setData] = useState([]);

  const list = [
    {
      id: "featured",
      title: "Featured",
      link: "link"
    },
    {
      id: "web",
      title: "Web App",
      link: "link"
    },
    {
      id: "mobile",
      title: "Mobile App",
      link: "link"
    },
  ];

  useEffect(() => {
    switch (selected) {
      case "featured":
        setData(featuredPortfolio);
        break;
      case "web":
        setData(webPortfolio);
        break;
      case "mobile":
        setData(mobilePortfolio);
        break;
      default:
        setData(featuredPortfolio);
    }
  }, [selected]);

  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        {list.map((item) => (
          <PortfolioList
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
          />
          ))}
      </ul>
      <div className="container">
        {data.map((d) => (
          <div className="item">
            <img src={d.img} alt="test" />
            <h3>{d.title}</h3>
          </div>
        ))}
        </div>
        <div className="link">\
          {data.map((d) => (
            <div className="item">
              <a href={d.link}>Visit</a>
            </div>
          ))}
      </div>
    </div>
  );
}
