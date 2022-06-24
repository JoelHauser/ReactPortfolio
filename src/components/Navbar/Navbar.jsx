import "./Navbar.scss";

export default function Navbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"navbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            {" "}
            JS{" "}
          </a>
          <div className="itemcontainer">
            {/* <div className="img">
              <img src="Assets/icons8-person-30.png" alt="person" srcset="" />
            </div> */}
            {/* <Person className="icon" /> */}
            <span>
              <a href="2487739671" alt="phone">
                (248)773-9671
              </a>
            </span>
          </div>
          <div className="itemcontainer">
            {/* <div className="img">
              <img src="Assets/icons8-mail-50.png" alt="mail" srcset="" />
            </div> */}
            {/* <Mail className="icon" /> */}
            <span>Joel.Hauser@gmail.com</span>
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
