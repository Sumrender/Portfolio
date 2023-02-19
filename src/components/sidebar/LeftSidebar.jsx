import "./Sidebar.css";
import Linkedin from "../../assets/linkedin.png";
import Twitter from "../../assets/twitter.png";
import Github from "../../assets/github.png";
import Resume from "../../assets/resume.png";

export default function LeftSidebar() {
  return (
    <div className="left sidebar">
      <div className="links">
        <a
          className="link"
          target={"_blank"}
          href="https://drive.google.com/file/d/1KsadNRtqj3skAk7ZviQvCDPiPjzaaRnd/view?usp=drivesdk"
        >
          <img className="resume-logo" src={Resume} alt="resume" />
        </a>
        <a
          target={"_blank"}
          className="link"
          href="https://www.linkedin.com/in/sumrendersingh/"
        >
          <img className="linkedin-logo" src={Linkedin} alt="linkedin" />
        </a>
        <a
          target={"_blank"}
          className="link"
          href="https://twitter.com/sumrenders"
        >
          <img className="twitter-logo" src={Twitter} alt="twitter" />
        </a>
        <a
          target={"_blank"}
          className="link"
          href="https://github.com/sumrender"
        >
          <img className="github-logo" src={Github} alt="github" />
        </a>
      </div>
    </div>
  );
}
