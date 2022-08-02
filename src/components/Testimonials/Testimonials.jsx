import "./Testimonials.scss";

export default function Testimonials() {
  const data = [
    {
      id: 1,
      name: "Mason McGinley",
      title: "QA Engineer at AdCellerant",
      img: "https://storage.googleapis.com/proudcity/mebanenc/uploads/2021/03/placeholder-image-300x225.png",
      icon: "assets/twitter.png",
      desc: "I was a TA of Joel’s through Michigan State University’s full stack coding bootcamp. Joel’s work ethic was beyond top tier. He consistently pushed further to understand topics and more so produce the best application possible. I would absolutely recommend Joel for any software role. You’ll be getting such an intelligent driven individual with a knack for coding ",
    },
    {
      id: 2,
      name: "Coming soon!",
      title: "Co-Founder of DELKA",
      img: "https://storage.googleapis.com/proudcity/mebanenc/uploads/2021/03/placeholder-image-300x225.png",
      icon: "assets/youtube.png",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem recusandae perspiciatis ducimus vel hic temporibus. ",
      featured: true,
    },
    {
      id: 3,
      name: "Coming soon!",
      title: "CEO of ALBI",
      img: "https://storage.googleapis.com/proudcity/mebanenc/uploads/2021/03/placeholder-image-300x225.png",
      icon: "assets/linkedin.png",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem",
    },
  ];

  return (
    <div className="testimonials" id="testimonials">
      <h1>Testimonials</h1>
      <div className="container">
        {data.map((d) => (
          <div className={d.featured ? "card featured" : "card"}>
            <div className="top">
              <img src="Assets/right-arrow.png" className="left" alt="" />
              <img className="user" src={d.img} alt="" />
              <img className="right" src={d.icon} alt="" />
            </div>
            <div className="center">{d.desc}</div>
            <div className="bottom">
              <h3>{d.name}</h3>
              <h4>{d.title}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
