import "./Contact.scss";
import { useState } from "react";

export default function Contact() {
  const [message, setMessage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
  };
  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src="Assets/shake.svg" alt="" />
      </div>
      <div className="right">
        <h2>Contact.</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Email" />
          <textarea placeholder="Message"></textarea>
          <a href="mailto: joel.hauser@gmail.com?subject=Mail">
          <button type="submit">Send</button>
          </a>
          {message && <span>Thank you, I will be in touch soon!</span>}
        </form>
      </div>
    </div>
  );
}
