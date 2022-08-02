import "./Testimonials.scss";

export default function Testimonials() {
  const data = [
    {
      id: 1,
      name: "Mason McGinley",
      title: "QA Engineer at AdCellerant",
      img: "https://github.com/JoelHauser/ReactPortfolio/blob/main/public/Assets/mason.jpg?raw=true",
      icon: "assets/linkedin.png",
      desc: "I was a TA of Joel’s through Michigan State University’s full stack coding bootcamp. Joel’s work ethic was beyond top tier. He consistently pushed further to understand topics and more so produce the best application possible. I would absolutely recommend Joel for any software role. You’ll be getting such an intelligent driven individual with a knack for coding ",
    },
    {
      id: 2,
      name: "David Vogel",
      title: "Associate Application Engineer",
      img: "https://storage.googleapis.com/proudcity/mebanenc/uploads/2021/03/placeholder-image-300x225.png",
      icon: "assets/linkedin.png",
      desc: "Joel is a great web developer. Not only does he know how to write strong code, but he also knows how to work effectively in a team, coordinating efforts both through collaborative design as well as through version control platforms like Github. He knows how to ask good questions about hard to define problems, and is ready to work with others to get a project across the finish line.",
      featured: true,
    },
    {
      id: 3,
      name: "Rachel Solov",
      title: "Full Stack Web Developer",
      img: "https://storage.googleapis.com/proudcity/mebanenc/uploads/2021/03/placeholder-image-300x225.png",
      icon: "assets/linkedin.png",
      desc: "Joel is dedicated, self-motivated, methodical, and very capable. He is not only a reliable and forward thinking web developer but also an inspiring team player. Besides being a joy to work with, Joel is a take-charge person who is able to present creative solutions to complex problems and communicate the benefits to his peers. He is very thorough in everything he does and can be depended upon to get the job done. He showed a high level of proficiency with the MERN stack, CSS3 and JavaScript. I attest to Joel's strong Full Stack Web Development capabilities and have no doubt he will be an essential asset to your team!",
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
