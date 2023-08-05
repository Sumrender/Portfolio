import "./Intro.css";
import Coder from "../../assets/coder.png";

export default function Intro() {
  return (
    <div className="intro">
      <p className="intro-first-line">HI, MY NAME IS</p>
      <p className="name">Sumrender Singh.</p>
      <p className="name">I am a full-stack dev.</p>
      <div className="intro-content">
        <div className="coder-img-container">
          <img className="coder-img" src={Coder} alt="coder" />
        </div>
        <div className="one-liner">
          <p>
            I am a 4th year engineering graduate, interested in web development,
            with a focus on the <u>BACK-END</u>.
          </p>
          <p>
            Currently, I am exploring the field of{" "}
            <span style={{ color: "yellow" }}>web3</span> and learning about
            creating smart contracts and their development.
          </p>
          <button className="main-button">
            <a href="mailto:sumrenders@gmail.com">
              Do You Want To Work With Me?
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}
