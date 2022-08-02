import "./Navbar.scss";

export default function Navbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"navbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            {" "}
            JH{" "}
          </a>
          <div className="itemcontainer">
            <span>
              <a href="2487739671" alt="phone">
                (248)773-9671
              </a>
            </span>
          </div>
          <div className="itemcontainer">
            <span>Joel.Hauser@gmail.com</span>
          </div>
          <div className="itemcontainer">
            <span>
            <a href="Assets/Joel_Hauser_Resume2022.pdf" download="resume">Resume</a>
            </span>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
