import "./Experiences.css";
import Experience from "./Experience";
import { experiences } from "../../data/data";

export default function Experiences() {
  return (
    <div className="experiences">
      <p>👨‍💻My Experiences</p>
      {experiences.map((exp, idx) => (
        <Experience key={`exp-${idx}`} exp={exp} />
      ))}
    </div>
  );
}
